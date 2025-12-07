"use client";

import { FormEvent, useState } from "react";
import { shortenUrl } from "@/lib/api";
import type { ShortenResponseData } from "@/lib/types";

interface ShortenFormProps {
  onShortened: (item: ShortenResponseData) => void;
}

export function ShortenForm({ onShortened }: ShortenFormProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      setLoading(true);
      const res = await shortenUrl(url.trim());

      if (!res.success || !res.data) {
        setError(res.message ?? "Failed to shorten URL.");
        return;
      }

      onShortened(res.data);
      setUrl("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md"
    >
      <div className="space-y-1.5">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-slate-100"
        >
          Enter a long URL
        </label>
        <input
          id="url"
          type="url"
          placeholder="https://example.com/very/long/url..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500"
        />
        <p className="text-xs text-slate-500">
          Generate a shorter link.
        </p>
      </div>

      {error && (
        <div className="rounded-md border border-red-500/60 bg-red-950/60 px-3 py-2 text-xs text-red-100">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 transition-colors"
      >
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
    </form>
  );
}
