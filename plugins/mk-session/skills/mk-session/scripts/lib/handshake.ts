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
};

/**
 * 子セッションの起動プロンプト（設計判断 D5）。
 *
 * ターミナルへの流し込みではなく、起動引数として渡す。子が 1 ターン目に
 * 自分で actas / monitor を有効化し、ready を返してから本題に入る。
 * 親 → 子の配送が生きているかは、このあと親が送るトークンへの返信で確かめる。
 */
export function buildKickoffPrompt(input: KickoffPromptInput): string {
  const task = input.task ?? `#${input.issue} を取得して着手して`;
  return [
    "最初に次の 4 つを順に実行して。終わるまで他の作業を始めないで。",
    `1. /agmsg actas ${input.issue}`,
    "2. /agmsg mode monitor",
    `3. ${input.agmsgScriptsDir}/send.sh ${input.team} ${input.issue} ${input.lead} "${input.readyToken} ready"`,
    `4. このあと ${input.lead} から疎通確認のメッセージが届く。本文に書かれた返信コマンドをそのまま実行して返信して`,
    "",
    `そのあと本題に入って: ${task}`,
  ].join("\n");
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
    `${input.agmsgScriptsDir}/send.sh ${input.team} ${input.issue} ${input.lead} "${input.token} ok"`,
  ].join("\n");
}
