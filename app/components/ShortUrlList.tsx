"use client";

import type { ShortenResponseData } from "@/lib/types";
import { ShortUrlCard } from "./ShortUrlCard";

interface ShortUrlListProps {
  items: ShortenResponseData[];
}

export function ShortUrlList({ items }: ShortUrlListProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="mt-6 space-y-3">
      {items.map((item) => (
        <ShortUrlCard key={item.short_code + item.original_url} item={item} />
      ))}
    </div>
  );
}
