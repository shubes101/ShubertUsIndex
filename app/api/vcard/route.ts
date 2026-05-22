import { NextRequest } from "next/server";

// Gated vCard download. The contact details (including the phone number) live
// only here on the server — never in a static file or the client bundle — and
// are returned only after a Cloudflare Turnstile token verifies server-side.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// vCard 3.0, CRLF line endings per RFC 6350.
const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N;CHARSET=utf-8:Shubert;Patrick;;;",
  "FN;CHARSET=utf-8:Patrick Shubert",
  "ORG;CHARSET=utf-8:Ocrolus",
  "TITLE;CHARSET=utf-8:Data Science Lead",
  "EMAIL;INTERNET:pshubert@ocrolus.com",
  "TEL;CELL:215-645-2014",
  "REV:2026-05-22T00:00:00Z",
  "END:VCARD",
  "",
].join("\r\n");

// Cloudflare's documented "always passes" test secret — used only as a local
// dev fallback. In production the real secret MUST be set or downloads are
// refused (fail closed).
const TEST_SECRET = "1x0000000000000000000000000000000AA";

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface SiteverifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

export async function POST(req: NextRequest) {
  let token: unknown;
  try {
    token = (await req.json())?.token;
  } catch {
    return new Response("Bad request", { status: 400 });
  }
  if (typeof token !== "string" || !token) {
    return new Response("Missing verification token", { status: 400 });
  }

  const secret =
    process.env.TURNSTILE_SECRET_KEY ||
    (process.env.NODE_ENV !== "production" ? TEST_SECRET : undefined);
  if (!secret) {
    // Not configured in production — feature is inert until keys are set.
    return new Response("Verification not configured", { status: 503 });
  }

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  const ip = req.headers.get("CF-Connecting-IP") ?? req.ip;
  if (ip) body.append("remoteip", ip);

  let outcome: SiteverifyResponse;
  try {
    const verify = await fetch(SITEVERIFY_URL, { method: "POST", body });
    outcome = (await verify.json()) as SiteverifyResponse;
  } catch {
    return new Response("Verification unavailable", { status: 502 });
  }

  if (!outcome.success) {
    return new Response("Verification failed", { status: 403 });
  }

  return new Response(VCARD, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Patrick Shubert.vcf"',
      "Cache-Control": "no-store",
    },
  });
}
