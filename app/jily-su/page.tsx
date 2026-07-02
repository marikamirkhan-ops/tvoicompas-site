export default function JilySuPage() {
  return (
    <main className="min-h-screen bg-[#101820] text-[#F5EFE6]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
  <div className="absolute inset-0 bg-[url('/images/jilysu-main.jpg')] bg-cover bg-center opacity-60" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/80 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-[#101820]/40" />

  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
      Джилы-Су
    </p>

    <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
      Экскурсия на Джилы-Су
    </h1>

    <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F5EFE6]/75 md:text-xl">
      Водопады, панорамы Эльбруса и одна из самых красивых дорог Кавказа — в одной поездке.
    </p>

    <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#F5EFE6]/65">
  {["1 день", "Мини-группа", "Комфортный внедорожник"].map((item, index) => (
    <div key={item} className="flex items-center gap-3">
      <span>{item}</span>

      {index !== 2 && (
        <span className="text-[#D6B16A]/60">•</span>
      )}
    </div>
  ))}
</div>

    <div className="mt-10">
      <a
        href="https://wa.me/79298606885"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-[#D6B16A] px-8 py-4 text-lg font-semibold text-[#101820] transition hover:scale-105 hover:bg-[#E7C98C]"
      >
        Забронировать
      </a>
    </div>
  </div>
</section>
<section className="bg-[#101820] px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        СТОИМОСТЬ
      </p>

      <h2 className="text-3xl font-bold md:text-5xl">
        Стоимость поездки
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#D6B16A]">
          Групповая поездка
        </p>

        <div className="mt-8 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[#F5EFE6]/70">Кисловодск</span>
            <span className="text-2xl font-semibold">3 700 ₽</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[#F5EFE6]/70">Ессентуки</span>
            <span className="text-2xl font-semibold">4 000 ₽</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[#F5EFE6]/70">Пятигорск</span>
            <span className="text-2xl font-semibold">4 200 ₽</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[#F5EFE6]/70">Железноводск</span>
            <span className="text-2xl font-semibold">4 200 ₽</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
  <span className="text-[#F5EFE6]/70">Минеральные Воды</span>
  <span className="text-2xl font-semibold">4 700 ₽</span>
</div>
        </div>
      </div>

      <div className="rounded-[32px] border border-[#D6B16A]/20 bg-[#D6B16A]/10 p-8 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#D6B16A]">
          Индивидуальная поездка
        </p>

        <div className="mt-10">
          <p className="text-5xl font-bold leading-none">
            от 22 200 ₽
          </p>

          <p className="mt-4 text-lg text-[#F5EFE6]/70">
            за автомобиль
          </p>

          <p className="mt-8 max-w-md text-base leading-7 text-[#F5EFE6]/60">
            Стоимость зависит от города выезда и количества человек.
          </p>
        </div>
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