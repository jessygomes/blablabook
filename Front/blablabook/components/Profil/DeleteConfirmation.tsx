"use client";

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
}

export default function DeleteConfirmation({
  isOpen,
  onClose,
  onConfirm,
  isDeleting,
}: DeleteConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-2 rounded-full">
            <span className="material-icons text-red-600 text-2xl">
              warning
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            Supprimer le compte
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            Cette action est <span className="font-bold text-red-600">irréversible</span>. 
            Toutes vos données seront définitivement supprimées :
          </p>

          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="material-icons text-red-500 text-base mt-0.5">
                close
              </span>
              <span>Votre profil et vos informations personnelles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-red-500 text-base mt-0.5">
                close
              </span>
              <span>Votre bibliothèque et vos livres</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons text-red-500 text-base mt-0.5">
                close
              </span>
              <span>Vos avis et commentaires</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors text-white flex items-center justify-center gap-2 ${
              isDeleting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl"
            }`}
          >
            <span className="material-icons text-base">
              {isDeleting ? "hourglass_empty" : "delete_forever"}
            </span>
            {isDeleting ? "Suppression..." : "Supprimer définitivement"}
          </button>
        </div>
      </div>
    </div>
  );
}
