"use client";

import { useState } from "react";
import type { ProjectEntry } from "../../lib/types";

export function PreviewIframe({ entry }: { entry: ProjectEntry }) {
  const defaultVariation = entry.selectedVariation ?? entry.variations[0] ?? null;
  const [variation, setVariation] = useState<string | null>(defaultVariation);

  if (entry.variations.length === 0) {
    return (
      <section
        style={{
          padding: "48px 24px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          textAlign: "center",
          color: "var(--text-muted)",
        }}
      >
        このプロジェクトにはまだバリエーションがありません。
      </section>
    );
  }

  const iframeSrc = variation
    ? `/runtime/preview.html#project=${encodeURIComponent(entry.slug)}&variation=${encodeURIComponent(variation)}`
    : null;

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {entry.variations.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setVariation(v)}
            style={{
              padding: "6px 14px",
              background: v === variation ? "var(--accent)" : "var(--surface)",
              color: v === variation ? "#fff" : "var(--text)",
              border: `1px solid ${v === variation ? "var(--accent)" : "var(--border)"}`,
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 500,
              transition: "background 120ms ease, color 120ms ease",
            }}
          >
            {v}
          </button>
        ))}
      </nav>

      {iframeSrc ? (
        <iframe
          key={variation}
          src={iframeSrc}
          title={`${entry.slug} / ${variation}`}
          style={{
            width: "100%",
            height: "calc(100vh - 220px)",
            minHeight: 480,
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: 12,
          }}
        />
      ) : null}
    </section>
  );
}
