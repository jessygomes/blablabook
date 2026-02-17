import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-primary/40 via-white/30 to-second/40 border-t border-noir/10">
      <div className="wrapper py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold tracking-wide text-noir">
              Contacts
            </h3>
            <ul className="space-y-3 text-sm text-noir/80">
              <li className="flex items-start gap-3">
                <span className="material-icons text-[18px]! text-noir/70">
                  home
                </span>
                <span>
                  10 rue de Penthièvre
                  <br />
                  75008 Paris
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-[18px]! text-noir/70">
                  mail
                </span>
                <a
                  href="mailto:info.example@blablabook.fr"
                  className="hover:text-primary transition-colors"
                >
                  info.example@blablabook.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-[18px]! text-noir/70">
                  call
                </span>
                <a
                  href="tel:+33123456789"
                  className="hover:text-primary transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold tracking-wide text-noir">
              Pages du site
            </h3>
            <ul className="space-y-2 text-sm text-noir/80">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/dernieres-critiques"
                  className="hover:text-primary transition-colors"
                >
                  Dernières critiques
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold tracking-wide text-noir">
              Informations légales
            </h3>
            <ul className="space-y-2 text-sm text-noir/80">
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10 text-xs text-noir/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Blablabook. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
