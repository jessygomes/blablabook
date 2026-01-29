"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { getUploadUrl } from '@/lib/utils';


interface Comment {
  id?: number;
  user?: {
    id: number;
    username: string;
  };
  title?: string;
  content?: string;
  createdAt?: string;
  rating?: number;
}

interface CommentsSectionProps {
  comments?: Comment[];
  bookId: number;
  token: string | null;
  userId: number | null;
}

export default function CommentsSection({
                                          comments = [],
                                          bookId,
                                          token,
                                          userId,
                                        }: CommentsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  const closeModal = () => {
    setIsModalOpen(false);
    setTitle("");
    setContent("");
    setErrorMsg(null);
  };

  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      setSubmitting(true);
      setErrorMsg(null);

      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookId,
          title: title.trim(),
          content: content.trim(),
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Erreur ${res.status}`);
      }

      closeModal();
      router.refresh();
    } catch (e: any) {
      setErrorMsg(e?.message ?? "Erreur lors de l’envoi du commentaire.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const canComment = Boolean(token && userId);

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
          <div className="flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              disabled={!canComment}
              className="gap-1 text-center rounded-md bg-[#A7A0C9] w-full px-3 py-2 text-sm font-medium text-white hover:bg-[#8f88b8] disabled:opacity-50"
              title={!canComment ? "Connecte-toi pour commenter" : undefined}
            >
              Ajouter un commentaire
            </button>
          </div>

          {comments.length > 0 ? (
            [...comments]
              .sort((a, b) => {
                const da =
                  a.createdAt ?? a.date
                    ? new Date(a.createdAt ?? a.date!).getTime()
                    : 0;
                const db =
                  b.createdAt ?? b.date
                    ? new Date(b.createdAt ?? b.date!).getTime()
                    : 0;
                return db - da;
              })
              .map((comment, idx) => (
                <div
                  key={comment.id ?? `c-${idx}`}
                  className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                      {comment.user?.profilePicture ? (
                        <Image
                          src={getUploadUrl(comment.user.profilePicture)}
                          alt={comment.user.username}
                          fill
                          className="rounded-full object-cover border"
                          loading="lazy"
                        />
                      ) : (
                        <span className="material-icons">account_circle</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm text-gray-900 truncate">
                          {comment.title ?? "Titre du commentaire"}
                        </h4>

                        <p className="mt-0.5 text-xs italic text-gray-500">
                          Publié le {formatDate(comment.createdAt ?? comment.date)}{" "}
                          {comment.user?.username ? `par ${comment.user.username}` : ""}
                        </p>
                      </div>

                      <button
                        type="button"
                        title="Signaler"
                        className="shrink-0 text-gray-400 hover:text-gray-600 transition"
                      >
                        <span className="material-icons text-lg">report</span>
                      </button>
                    </div>

                    <p className="mt-2 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-sm text-gray-500 py-4 text-center">
              Aucun commentaire pour le moment.
            </p>
          )}
        </div>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
        >
          <button
            className="absolute inset-0 bg-black/40"
            onClick={closeModal}
            aria-label="Fermer la fenêtre"
          />

          <div className="relative z-10 w-full max-w-lg rounded-xl bg-white p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold text-black">
                Ajouter un commentaire
              </h4>

              <button
                onClick={closeModal}
                className="rounded-md p-1 hover:bg-gray-100"
                aria-label="Fermer"
              >
                <span className="material-icons text-black">close</span>
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre"
                className="w-full rounded-md border border-black px-3 py-2 text-sm text-black placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#A7A0C9]"
              />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Écris ton commentaire..."
                rows={5}
                className="w-full resize-none rounded-md border border-black px-3 py-2 text-sm text-black placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#A7A0C9]"
              />

              {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

              <button
                onClick={handleSubmit}
                disabled={submitting || !content.trim()}
                className="rounded-md bg-[#A7A0C9] w-full px-3 py-2 text-sm font-medium text-white hover:bg-[#8f88b8]"
              >
                {submitting ? "Publication..." : "Publier"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}