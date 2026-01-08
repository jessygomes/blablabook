"use client";

import { useState } from "react";

interface RatingComponentProps {
  userRating?: number | null; // current user rating (1-5)
  averageRating?: number | null; // average rating across all users (1-5)
  userId?: number | null;
  token: string | null;
  onRatingChange?: (rating: number) => void;
}

export default function RatingComponent({
  userRating = null,
  averageRating = null,
  userId,
  token,
  onRatingChange,
}: RatingComponentProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentUserRating, setCurrentUserRating] = useState<number | null>(
    userRating
  );

  const isConnected = !!token && !!userId;

  const handleRatingClick = async (rating: number) => {
    if (!isConnected) {
      return;
    }

    setCurrentUserRating(rating);
    onRatingChange?.(rating);

    // TODO: Call backend to save rating
    // await updateBookRating(bookId, rating, token);
  };

  const renderStars = (rating: number | null, interactive: boolean = false) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, idx) => {
          const starIndex = idx + 1;
          const isFilled =
            (hoverRating && starIndex <= hoverRating) ||
            (hoverRating === null && rating && starIndex <= rating);

          return (
            <button
              key={idx}
              disabled={!interactive || !isConnected}
              onMouseEnter={() => interactive && setHoverRating(starIndex)}
              onMouseLeave={() => interactive && setHoverRating(null)}
              onClick={() => interactive && handleRatingClick(starIndex)}
              className={`transition-colors ${
                interactive && isConnected ? "cursor-pointer" : ""
              } ${
                interactive && !isConnected
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              <span
                className={`material-icons text-2xl ${
                  isFilled ? "text-[#FFA500]" : "text-gray-300"
                }`}
              >
                {isFilled ? "star" : "star_border"}
              </span>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex gap-10">
      {/* Average Rating */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-noir uppercase tracking-wide">
          Note globale
        </h3>
        <div className="flex flex-col">
          {renderStars(averageRating, false)}
          <span className="text-xs text-gray-700">
            {averageRating ? `${averageRating.toFixed(1)}/5` : ""}
          </span>
        </div>
      </div>

      {/* User Rating */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-noir uppercase tracking-wide">
            Ma note
          </h3>
          {!isConnected && (
            <span className="text-xs text-gray-500">
              Connectez-vous pour noter
            </span>
          )}
        </div>
        {isConnected ? (
          <div className="flex items-center gap-4">
            {renderStars(currentUserRating, true)}
          </div>
        ) : (
          <div className="flex items-center gap-4 opacity-50">
            {renderStars(null, false)}
            <span className="text-sm text-gray-500">Non noté</span>
          </div>
        )}
      </div>
    </div>
  );
}
