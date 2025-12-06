"use client";

import { useState } from "react";
import { copyToClipboard } from "@/lib/utils";
import type { ShortenResponseData } from "@/lib/types";

interface ShortUrlCardProps {
  item: ShortenResponseData;
}

export function ShortUrlCard({ item }: ShortUrlCardProps) {
  const [copied, setCopied] = useState(false);

  const shortUrl = item.short_url;

  const handleCopy = async () => {
    const ok = await copyToClipboard(shortUrl);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-4 shadow-sm">
      <div className="mb-2 text-xs font-medium text-slate-400">Short URL</div>
      <div className="flex items-center justify-between gap-3">
        <a
          href={shortUrl}
          target="_blank"
          rel="noreferrer"
          className="truncate text-sm font-semibold text-emerald-400 hover:underline"
        >
          {shortUrl}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md border border-emerald-500/60 px-3 py-1 text-xs font-medium text-emerald-100 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="mt-3 text-[11px] text-slate-500">
        <span className="font-semibold text-slate-400">Original:</span>{" "}
        <span className="break-all">{item.original_url}</span>
      </div>
    </div>
  );
}
