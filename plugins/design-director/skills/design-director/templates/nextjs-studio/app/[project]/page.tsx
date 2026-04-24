import { promises as fs } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Manifest, ProjectEntry } from "../../lib/types";
import { PreviewIframe } from "./preview-iframe";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ project: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { project: slug } = await params;
  const manifest = await readManifest(slug);
  if (!manifest) notFound();

  const entry: ProjectEntry = { ...manifest, slug };

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Link
          href="/"
          style={{ color: "var(--text-muted)", fontSize: 13 }}
        >
          ← ギャラリー
        </Link>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>{entry.title}</h1>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Tag>{entry.type}</Tag>
          <Tag>{entry.aesthetic}</Tag>
          <Tag>tokens: {entry.tokenSource}</Tag>
        </div>
      </header>

      <PreviewIframe entry={entry} />
    </main>
  );
}

async function readManifest(slug: string): Promise<Manifest | null> {
  const manifestPath = path.join(process.cwd(), "projects", slug, "manifest.json");
  try {
    const raw = await fs.readFile(manifestPath, "utf8");
    return JSON.parse(raw) as Manifest;
  } catch {
    return null;
  }
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        padding: "2px 10px",
        background: "var(--surface-muted)",
        border: "1px solid var(--border)",
        borderRadius: 999,
        fontSize: 12,
        color: "var(--text-muted)",
      }}
    >
      {children}
    </span>
  );
}
