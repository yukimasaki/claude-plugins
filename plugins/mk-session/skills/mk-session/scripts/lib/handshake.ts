/**
 * 疎通確認（設計判断 D1）。
 *
 * 「送信できた」は「届いた」の証拠にならないため、親が投げたトークンが
 * 子からの返信として履歴に現れるまでを成功条件にする。
 */

/** `history.sh` の 1 行: `  ● [2026-08-23T05:00:00Z] lead → 53: body` */
const HISTORY_LINE =
  /^\s*[●○]\s*\[([^\]]+)\]\s*(\S+)\s*(?:→|->)\s*([^:]+):\s*([\s\S]*)$/;

export type HistoryEntry = {
  at: string;
  from: string;
  to: string;
  body: string;
};

export function parseHistory(output: string): HistoryEntry[] {
  return output
    .split("\n")
    .map((line) => HISTORY_LINE.exec(line))
    .filter((matched): matched is RegExpExecArray => matched !== null)
    .map((matched) => ({
      at: matched[1],
      from: matched[2].trim(),
      to: matched[3].trim(),
      body: matched[4],
    }));
}

/** 親が送るトークン。返信の本文に含まれていれば往復が成立したと判断する */
export function buildHandshakeToken(issue: number, stamp: string): string {
  return `mk-session-handshake-${issue}-${stamp}`;
}

export type HandshakeCheck = {
  from: string;
  to: string;
  token: string;
};

/** 子 → 親の方向でトークンが返ってきているか。自分が送った分は数えない */
export function hasHandshakeReply(
  entries: HistoryEntry[],
  check: HandshakeCheck,
): boolean {
  return entries.some(
    (entry) =>
      entry.from === check.from &&
      entry.to === check.to &&
      entry.body.includes(check.token),
  );
}

/**
 * シェルに渡す 1 引数として安全な形に包む。
 *
 * 起動プロンプトと疎通メッセージには「そのまま実行させるコマンド」を書くので、
 * team 名やパスに空白やメタ文字が入ると分割・解釈されて別のコマンドになる。
 * agmsg 側はそうした名前を受け付けるため、包まないとこちらだけが壊れる。
 */
export function shellQuote(value: string): string {
  if (value.length > 0 && /^[A-Za-z0-9_@%+=:,./-]+$/.test(value)) return value;
  return `'${value.replace(/'/g, `'\\''`)}'`;
}

export type KickoffPromptInput = {
  issue: number;
  team: string;
  /** 親（呼び出し側）の agmsg 名 */
  lead: string;
  /** 子が初期化完了を知らせるトークン */
  readyToken: string;
  /** agmsg の scripts ディレクトリ（send.sh の絶対パス生成に使う） */
  agmsgScriptsDir: string;
  /** 起動後に子へ渡す本題。既定は Issue の取得 */
  task?: string;
  /**
   * リーダー役の所在（設計判断 D2）。
   * `delegated` のとき、本題の手前に役割の宣言を差し込む。既定は `kept`。
   */
  leadRole?: LeadRole;
};

/** `delegated` = この子がリーダー / `kept` = 呼び出し元がリーダーのまま */
export type LeadRole = "delegated" | "kept";

/**
 * 子セッションの起動プロンプト（設計判断 D5）。
 *
 * ターミナルへの流し込みではなく、起動引数として渡す。子が 1 ターン目に
 * 自分で actas / monitor を有効化し、ready を返してから本題に入る。
 * 親 → 子の配送が生きているかは、このあと親が送るトークンへの返信で確かめる。
 */
export function buildKickoffPrompt(input: KickoffPromptInput): string {
  const task = input.task ?? `#${input.issue} を取得して着手して`;
  const declaration = input.leadRole === "delegated"
    ? buildLeadDeclaration({
      issue: input.issue,
      lead: input.lead,
      channel: {
        team: input.team,
        agmsgScriptsDir: input.agmsgScriptsDir,
      },
    })
    : undefined;
  const body = declaration
    ? `${declaration}\n\nそのあと本題に入って: ${task}`
    : `そのあと本題に入って: ${task}`;
  return [
    "最初に次の 4 つを順に実行して。終わるまで他の作業を始めないで。",
    `1. /agmsg actas ${input.issue}`,
    "2. /agmsg mode monitor",
    `3. ${buildSendCommand(input, `${input.readyToken} ready`)}`,
    `4. このあと ${input.lead} から疎通確認のメッセージが届く。本文に書かれた返信コマンドをそのまま実行して返信して`,
    "",
    body,
  ].join("\n");
}

export type LeadDeclarationInput = {
  issue: number;
  /** 親（呼び出し側）の agmsg 名 */
  lead: string;
  /**
   * agmsg が使えるときだけ渡す。相談・報告の送信コマンドを宣言に添える。
   * 未指定でも宣言そのものは出す（agmsg 未導入でも役割の所在は伝わるべきなので）。
   */
  channel?: { team: string; agmsgScriptsDir: string };
};

/**
 * 移譲の宣言（設計判断 D2）。
 *
 * 起動後に送ると、届く前に子が本題へ入ってしまう。起動引数に入れておけば
 * 1 ターン目に必ず読まれる。相談窓口を書いておくのは、呼び出し元が team に
 * 残る（D3）ためで、閉じられていても履歴として次のセッションが受け取れる。
 *
 * agmsg 依存なのは送信コマンドの行だけ。役割の所在は agmsg の有無と関係なく
 * 伝える（縮退時に黙って旧挙動へ戻ると、呼び出し元が実装に入る事故が残る）。
 */
export function buildLeadDeclaration(input: LeadDeclarationInput): string {
  const lines = [
    `この Issue（#${input.issue}）の作業リーダーはあなた。`,
    "方針判断・実装・レビュー依頼・PR 運用の起点はすべてあなたが持つ。",
    `呼び出し元（${input.lead}）はこの Issue の実装に関与せず、判断はあなたに委ねる。`,
  ];
  if (input.channel) {
    lines.push(
      "呼び出し元は上の 4 手順が終わったあと終了することがある（4 の返信は必ず返して）。",
      `相談・報告は次の 1 行で投げて: ${
        buildSendCommand(
          { ...input.channel, issue: input.issue, lead: input.lead },
          "<本文>",
        )
      }`,
    );
  } else {
    lines.push(
      "agmsg が無いため呼び出し元との連絡手段は無い。判断は自分で完結させて。",
    );
  }
  return lines.join("\n");
}

export type ProbeMessageInput = {
  issue: number;
  team: string;
  lead: string;
  token: string;
  agmsgScriptsDir: string;
};

/**
 * 親 → 子へ送る疎通確認メッセージ。
 *
 * 返信コマンドを本文に丸ごと書いておく（子が team 名や宛先を推測しなくて済む）。
 */
export function buildProbeMessage(input: ProbeMessageInput): string {
  return [
    `mk-session の疎通確認です。次のコマンドをそのまま実行して返信してください:`,
    buildSendCommand(input, `${input.token} ok`),
  ].join("\n");
}

/** 子に実行させる send.sh の 1 行。引数はすべてクォートして渡す */
function buildSendCommand(
  input: {
    agmsgScriptsDir: string;
    team: string;
    issue: number;
    lead: string;
  },
  body: string,
): string {
  return [
    shellQuote(`${input.agmsgScriptsDir}/send.sh`),
    shellQuote(input.team),
    String(input.issue),
    shellQuote(input.lead),
    shellQuote(body),
  ].join(" ");
}
