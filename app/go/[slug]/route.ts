import { NextRequest, NextResponse } from "next/server"
import { getTool } from "@/data/tools"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const tool = getTool(slug)
  if (!tool) return NextResponse.json({ error: "tool not found" }, { status: 404 })

  // Append UTM for attribution if not already present
  const url = new URL(tool.affiliateUrl)
  if (!url.searchParams.has("utm_source")) {
    url.searchParams.set("utm_source", "iaparatienda")
    url.searchParams.set("utm_medium", "affiliate")
    url.searchParams.set("utm_campaign", slug)
  }
  return NextResponse.redirect(url.toString(), 302)
}
