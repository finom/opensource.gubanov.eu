"use client";

import { type ReactNode, useState } from "react";
import { type Tag, tags } from "@/data/tags";

export function Filters({ used, children }: { used: Tag[]; children: ReactNode }) {
  const [filter, setFilter] = useState<Tag | "all">("all");
  const options = [["all", "All"] as const, ...used.map((tag) => [tag, tags[tag]] as const)];

  return (
    <div data-filter={filter}>
      <div className="filters">
        Show:
        {options.map(([tag, label]) => (
          <button
            key={tag}
            type="button"
            className="filter-tag"
            aria-pressed={filter === tag}
            onClick={() => setFilter(tag)}
          >
            {tag === "highlight" ? "♥ " : ""}
            {label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}

// A tile stays when its tags include the filter; a section stays when one of its tiles does.
export const filterCss = (Object.keys(tags) as Tag[])
  .map(
    (tag) =>
      `[data-filter="${tag}"] .tile:not([data-tags~="${tag}"]),` +
      `[data-filter="${tag}"] section:not(:has(.tile[data-tags~="${tag}"])){display:none}`,
  )
  .join("\n");
