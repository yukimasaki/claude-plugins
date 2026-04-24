/**
 * design-director が生成する成果物のメタデータ。
 * `.design-studio/projects/{slug}/manifest.json` に保存される。
 *
 * decisions.md Q2-6 の 7 フィールドに加え、ディスク上で識別する slug/dir を
 * list-projects 側で補う（manifest.json 自体には slug を書かないが、読み込み後に
 * ディレクトリ名を slug として注入する）。
 */
export type Manifest = {
  title: string;
  createdAt: string;
  aesthetic: string;
  type: string;
  variations: string[];
  selectedVariation: string | null;
  tokenSource: "existing" | "new" | "custom";
};

/** manifest.json + ディスク上の slug（ディレクトリ名）を合わせた実体。 */
export type ProjectEntry = Manifest & {
  slug: string;
};
