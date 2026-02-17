import React from "react";

export default function page() {
  return (
    <section className="wrapper py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-noir mb-6">
          Mentions légales
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-noir/90">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Éditeur du site</h2>
            <p>
              Blablabook – Plateforme de partage et d’échange autour des livres.
            </p>
            <p>
              Adresse : 10 rue de Penthièvre, 75008 Paris, France.
              <br />
              Email : info.example@blablabook.fr
              <br />
              Téléphone : +33 1 23 45 67 89
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">
              Directeur de la publication
            </h2>
            <p>Le directeur de la publication est l’éditeur du site.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Hébergement</h2>
            <p>
              Ce site est hébergé par :
              <br />
              Hébergeur : [Nom de l’hébergeur]
              <br />
              Adresse : [Adresse de l’hébergeur]
              <br />
              Téléphone : [Téléphone de l’hébergeur]
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des contenus présents sur ce site (textes, images,
              logos, graphismes, vidéos, etc.) est protégé par le droit de la
              propriété intellectuelle. Toute reproduction, représentation,
              modification, publication ou adaptation, totale ou partielle, est
              interdite sauf autorisation écrite préalable.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">Responsabilité</h2>
            <p>
              L’éditeur s’efforce d’assurer l’exactitude des informations
              diffusées sur le site. Toutefois, il ne saurait être tenu
              responsable des omissions, inexactitudes ou carences dans la mise
              à jour.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-noir">
              Données personnelles
            </h2>
            <p>
              Les traitements de données personnelles sont détaillés dans la
              page « Politique de confidentialité ».
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
