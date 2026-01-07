import LastCritique from "@/components/LastReview/LastReview";

export default function Page() {
  return (
    <section className="bg-white min-h-screen">
      <LastCritique
        title="Critique du dernier film"
        content="Une analyse approfondie du scénario, de la réalisation et des performances..."
        author="Jean Dupont"
        date="10 janvier 2026"
      />
    </section>
  );
}