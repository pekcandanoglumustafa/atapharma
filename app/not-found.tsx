import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center justify-center bg-forest-deep px-6 text-center text-paper">
      <div>
        <p className="eyebrow-gold mb-4 justify-center">404</p>
        <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-none">
          Sayfa bulunamadı
        </h1>
        <p className="mx-auto mt-5 max-w-md text-paper/70">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <Link href="/" className="btn-gold mt-8">
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}
