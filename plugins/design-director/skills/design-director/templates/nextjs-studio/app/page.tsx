import type { CSSProperties } from "react";
import Link from "next/link";
import { listProjects } from "../lib/list-projects";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const projects = await listProjects();

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>design-studio</h1>
        <p style={styles.subtitle}>
          design-director が生成したプロトタイプのギャラリー（{projects.length} 件）
        </p>
      </header>

      {projects.length === 0 ? (
        <section style={styles.empty}>
          <p style={styles.emptyText}>まだプロジェクトがありません。</p>
          <p style={styles.emptyHint}>
            Claude Code から <code style={styles.code}>/design-director</code> を
            呼び出してプロトタイプを作成してください。
          </p>
        </section>
      ) : (
        <section style={styles.grid}>
          {projects.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} style={styles.card}>
              <div style={styles.cardTitle}>{p.title}</div>
              <div style={styles.cardMeta}>
                <span style={styles.tag}>{p.type}</span>
                <span style={styles.tag}>{p.aesthetic}</span>
              </div>
              <div style={styles.cardDate}>{formatDate(p.createdAt)}</div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const styles: Record<string, CSSProperties> = {
  main: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "48px 24px",
  },
  header: {
    marginBottom: 32,
  },
  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
  },
  subtitle: {
    margin: "8px 0 0",
    color: "var(--text-muted)",
    fontSize: 14,
  },
  empty: {
    padding: "64px 24px",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    textAlign: "center",
  },
  emptyText: {
    margin: 0,
    fontSize: 15,
    fontWeight: 500,
  },
  emptyHint: {
    margin: "8px 0 0",
    color: "var(--text-muted)",
    fontSize: 13,
  },
  code: {
    padding: "2px 6px",
    background: "var(--surface-muted)",
    border: "1px solid var(--border)",
    borderRadius: 4,
    fontFamily: "ui-monospace, monospace",
    fontSize: 12,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 16,
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    transition: "border-color 120ms ease",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 600,
  },
  cardMeta: {
    display: "flex",
    gap: 8,
  },
  tag: {
    padding: "2px 8px",
    background: "var(--surface-muted)",
    border: "1px solid var(--border)",
    borderRadius: 999,
    fontSize: 11,
    color: "var(--text-muted)",
  },
  cardDate: {
    marginTop: "auto",
    color: "var(--text-muted)",
    fontSize: 12,
    fontVariantNumeric: "tabular-nums",
  },
};
