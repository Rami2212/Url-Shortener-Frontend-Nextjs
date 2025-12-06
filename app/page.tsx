"use client";

import { useState } from "react";
import type { ShortenResponseData } from "@/lib/types";
import { ShortenForm } from "./components/ShortenForm";
import { ShortUrlList } from "./components/ShortUrlList";

export default function HomePage() {
  const [items, setItems] = useState<ShortenResponseData[]>([]);

  const handleShortened = (item: ShortenResponseData) => {
    setItems((prev) => [item, ...prev]);
  };

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          Shorten your long URLs
        </h1>
        <p className="text-sm text-slate-400">
          Enter a long URL and generate a short one.
        </p>
      </section>

      <ShortenForm onShortened={handleShortened} />

      <ShortUrlList items={items} />
    </div>
  );
}
