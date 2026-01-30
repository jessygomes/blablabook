import React from "react";

export default function page() {
  return (
    <section className="wrapper py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-noir mb-6">
          Politique de confidentialité
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-noir/90">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">
              Responsable du traitement
            </h2>
            <p>
              Blablabook est responsable du traitement des données personnelles
              collectées sur ce site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">
              Données collectées
            </h2>
            <p>
              Nous collectons notamment : nom d’utilisateur, adresse email,
              photo de profil, préférences de lecture, contenus publiés
              (commentaires, notes, critiques) et données techniques de
              navigation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Finalités</h2>
            <p>
              Les données sont utilisées pour : création et gestion du compte,
              personnalisation de l’expérience, modération des contenus,
              communication avec les utilisateurs et amélioration du service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Base légale</h2>
            <p>
              Le traitement est fondé sur l’exécution du contrat (fourniture du
              service), le consentement (communications optionnelles) et
              l’intérêt légitime (sécurité et amélioration du service).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">
              Durée de conservation
            </h2>
            <p>
              Les données sont conservées pendant la durée d’utilisation du
              compte, puis archivées conformément aux obligations légales.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Destinataires</h2>
            <p>
              Les données sont accessibles uniquement aux équipes autorisées et
              à nos prestataires techniques dans le cadre strict de leurs
              missions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Vos droits</h2>
            <p>
              Vous disposez des droits d’accès, rectification, suppression,
              limitation, opposition et portabilité de vos données. Pour exercer
              ces droits, contactez-nous à info.example@blablabook.fr.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Cookies</h2>
            <p>
              Des cookies techniques peuvent être utilisés pour assurer le bon
              fonctionnement du site et améliorer votre expérience.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Contact</h2>
            <p>
              Pour toute question relative à la confidentialité, vous pouvez
              nous écrire à info.example@blablabook.fr.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
