import type { ShortenResponse } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

export async function shortenUrl(longUrl: string): Promise<ShortenResponse> {
  const res = await fetch(`${API_BASE_URL}/api/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: longUrl }),
  });

  let json: ShortenResponse;
  try {
    json = (await res.json()) as ShortenResponse;
  } catch {
    json = {
      success: false,
      message: "Unexpected response from server",
    };
  }

  if (!res.ok) {
    return {
      success: false,
      message: json.message ?? `Request failed with status ${res.status}`,
    };
  }

  return json;
}
