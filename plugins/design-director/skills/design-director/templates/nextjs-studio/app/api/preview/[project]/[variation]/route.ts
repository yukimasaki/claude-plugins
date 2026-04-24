import { NextResponse } from "next/server";
import { loadProjectPreview } from "../../../../../lib/load-project";

export const dynamic = "force-dynamic";

type Params = {
  params: Promise<{ project: string; variation: string }>;
};

export async function GET(_req: Request, { params }: Params) {
  const { project, variation } = await params;
  const result = await loadProjectPreview(project, variation);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 404 });
  }
  return NextResponse.json(result.payload);
}
