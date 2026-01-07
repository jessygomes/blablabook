"use client";

import { useMemo, useState } from "react";

type Props = {
  text: string;
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

  const showToggle = useMemo(() => text.trim().length > 220, [text]);

  const clampClass = expanded ? "" : `line-clamp-${clampLines}`;

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