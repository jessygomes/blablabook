import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Large 404 with book icon */}
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page introuvable
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition-colors shadow-sm"
          >
            Retour à l&apos;accueil
          </Link>
          <Link 
            href="/rechercher"
            className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Rechercher un livre
          </Link>
        </div>
      </div>
    </div>
  );
}