"use client";

import React, { useState } from "react";

interface Comment {
  id?: number;
  author?: string;
  content?: string;
  createdAt?: string;
  rating?: number;
}

interface CommentsSectionProps {
  comments?: Comment[];
}

export default function CommentsSection({
  comments = [],
}: CommentsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    } catch {
      return dateString;
    }
  };

  return (
    <div className="border-t border-gray-200 pt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-between w-full bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded transition-colors"
      >
        <h3 className="text-lg font-semibold text-noir">
          Commentaires ({comments.length})
        </h3>
        <span
          className={`material-icons transition-transform text-noir ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, idx) => (
              <div
                key={comment.id || idx}
                className="p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-noir text-sm">
                      {comment.author || "Utilisateur inconnu"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDate(comment.createdAt)}
                    </p>
                  </div>
                  {comment.rating && (
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`material-icons text-xs ${
                            i < (comment.rating || 0)
                              ? "text-[#FFA500]"
                              : "text-gray-300"
                          }`}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-700 leading-6">
                  {comment.content}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 py-4 text-center">
              Aucun commentaire pour le moment.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
