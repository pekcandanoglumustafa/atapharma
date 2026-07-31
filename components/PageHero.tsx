export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep pb-16 pt-36 text-paper md:pb-24 md:pt-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, rgba(47,107,79,0.5) 0%, rgba(14,42,29,0) 70%)",
        }}
      />
      <div className="wrap relative">
        <p className="eyebrow-gold mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.03] tracking-[-0.02em]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
