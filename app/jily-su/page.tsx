export default function JilySuPage() {
  return (
    <main className="min-h-screen bg-[#101820] text-[#F5EFE6]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[url('/images/jilysu-main.jpg')] bg-cover bg-center opacity-60" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/80 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
              ТВОЙ КОМПАС
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Экскурсия
              <br />
              на Джилы-Су
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#F5EFE6]/75 md:text-xl">
              Водопады, панорамы Эльбруса, горные дороги и самые красивые
              виды Северного Кавказа — в одной поездке.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/79298606885"
                target="_blank"
                className="rounded-full bg-[#D6B16A] px-8 py-4 text-lg font-semibold text-[#101820] transition hover:scale-105"
              >
                Забронировать
              </a>

              <a
                href="#program"
                className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold transition hover:border-[#D6B16A] hover:text-[#D6B16A]"
              >
                Программа поездки
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#101820] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        ГАЛЕРЕЯ
      </p>

      <h2 className="text-3xl font-bold md:text-5xl">
        Атмосфера маршрута
      </h2>
    </div>

    <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
      {[
        "/images/jilysu-1.jpg",
        "/images/jilysu-2.jpg",
        "/images/jilysu-3.jpg",
        "/images/jilysu-4.jpg",
        "/images/jilysu-5.jpg",
        "/images/jilysu-6.jpg",
        "/images/jilysu-7.jpg",
        "/images/jilysu-8.jpg",
      ].map((image, index) => (
        <div
          key={index}
          className="group relative min-w-[88%] snap-center overflow-hidden rounded-[32px] md:min-w-[65%]"
        >
          <img
            src={image}
            alt="Джилы-Су"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      ))}
    </div>

    <div className="mt-8 flex justify-center gap-3">
      <div className="h-2.5 w-2.5 rounded-full bg-[#D6B16A]" />
      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
    </div>
  </div>
</section>
    </main>
  );
}