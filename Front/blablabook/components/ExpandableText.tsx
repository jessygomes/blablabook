"use client";

import { useMemo, useState } from "react";

type Props = {
  text: string | null;
  clampLines?: 2 | 3 | 4 | 5 | 6;
  className?: string;
  minHeightClassName?: string;
};

export default function ExpandableText({
  text,
  clampLines = 4,
  className = "",
  minHeightClassName = "",
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const showToggle = useMemo(() => (text?.trim().length ?? 0) > 220, [text]);

  const clampMap: Record<number, string> = {
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
    6: "line-clamp-6",
  };

  const clampClass = expanded ? "" : (clampMap[clampLines] ?? "line-clamp-4");

  return (
    <div>
      <p className={`${className} ${minHeightClassName} ${clampClass}`}>
        {text}
      </p>

      {showToggle && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 text-sm text-black font-semibold hover:underline "
          >
            {expanded ? "Réduire" : "Voir plus"}
          </button>
        </div>
      )}
    </div>
  );
}
