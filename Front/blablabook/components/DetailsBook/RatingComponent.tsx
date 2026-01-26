"use client";

import { useState, useEffect } from "react";
import {
  getBookAverageRating,
  getUserRateForBook,
  createRate,
  updateRate,
} from "@/lib/actions/rate.action";

interface RatingComponentProps {
  bookId: number;
  userRating?: number | null;
  userId?: number | null;
  token: string | null;
  onRatingChange?: (rating: number) => void;
}

export default function RatingComponent({
  bookId,
  userRating = null,
  userId,
  token,
  onRatingChange,
}: RatingComponentProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentUserRating, setCurrentUserRating] = useState<number | null>(
    userRating,
  );
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [isLoadingAverage, setIsLoadingAverage] = useState(true);
  const [isLoadingUserRating, setIsLoadingUserRating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const isConnected = !!token && !!userId;

  // Récupérer la note moyenne du livvre
  useEffect(() => {
    const fetchAverageRating = async () => {
      setIsLoadingAverage(true);
      const result = await getBookAverageRating(bookId);
      if (result.success && result.data) {
        setAverageRating(result.data.averageRating);
      }
      setIsLoadingAverage(false);
    };

    fetchAverageRating();
  }, [bookId]);

  // Récupérer la note du user
  useEffect(() => {
    if (!isConnected) return;

    const fetchUserRating = async () => {
      setIsLoadingUserRating(true);
      const result = await getUserRateForBook(bookId, token);
      if (result.success && result.data?.rating) {
        setCurrentUserRating(result.data.rating);
      }
      setIsLoadingUserRating(false);
    };

    fetchUserRating();
  }, [bookId, token, isConnected]);

  const handleRatingClick = async (rating: number) => {
    if (!isConnected || isSaving) {
      return;
    }

    setIsSaving(true);
    try {
      let result;

      // Si le user a déjà une note, on modifie, sinon on la crée
      if (currentUserRating) {
        result = await updateRate(bookId, rating, token);
      } else {
        result = await createRate(bookId, rating, token);
      }

      if (result.success) {
        setCurrentUserRating(rating);
        onRatingChange?.(rating);

        // Rafraîchir la note moyenne
        const averageResult = await getBookAverageRating(bookId);
        if (averageResult.success && averageResult.data) {
          setAverageRating(averageResult.data.averageRating);
        }
      }
    } catch (error) {
      console.error("Erreur lors de la notation:", error);
    } finally {
      setIsSaving(false);
    }
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
              disabled={!interactive || !isConnected || isSaving}
              onMouseEnter={() => interactive && setHoverRating(starIndex)}
              onMouseLeave={() => interactive && setHoverRating(null)}
              onClick={() => interactive && handleRatingClick(starIndex)}
              className={`transition-colors ${
                interactive && isConnected ? "cursor-pointer" : ""
              } ${
                interactive && !isConnected
                  ? "cursor-not-allowed opacity-50"
                  : ""
              } ${isSaving ? "opacity-50 cursor-wait" : ""}`}
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
      {/* Note globale */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-noir uppercase tracking-wide">
          Note globale
        </h3>
        <div className="flex flex-col">
          {isLoadingAverage ? (
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
          ) : (
            <>
              {renderStars(averageRating, false)}
              <span className="text-xs text-gray-700">
                {averageRating
                  ? `${averageRating.toFixed(1)}/5`
                  : "Aucune note"}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Note user */}
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
            {isLoadingUserRating ? (
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
            ) : (
              <>
                {renderStars(currentUserRating, true)}
                {isSaving && (
                  <span className="text-xs text-gray-500">
                    Enregistrement...
                  </span>
                )}
              </>
            )}
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
