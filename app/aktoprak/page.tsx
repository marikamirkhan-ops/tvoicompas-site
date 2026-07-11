"use client";

import { useRef, useState } from "react";

export default function JilySuPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  return (
    <main className="min-h-screen bg-[#101820] text-[#F5EFE6]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
  <div className="absolute inset-0 bg-[url('/images/jilysu-main.jpg')] bg-cover bg-center opacity-60" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/80 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-[#101820]/40" />

  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <a
      href="/#routes"
      className="mb-6 inline-flex text-sm font-medium text-[#F5EFE6]/65 transition hover:text-[#D6B16A]"
>
      ← Все экскурсии
    </a>
    
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
      Актопрак
    </p>

    <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-7xl">
      Экскурсия на перевал Актопрак
    </h1>

    <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F5EFE6]/75 md:text-xl">
      Озеро Гижгит, Чегемские водопады и парадром в одной поездке
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
        className="inline-flex rounded-full bg-[#D6B16A] px-8 py-4 text-base font-semibold text-[#101820] transition hover:bg-[#E7C98C]"
      >
        Забронировать
      </a>
    </div>
  </div>
</section>
<section className="bg-[#101820] px-6 py-14 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        СТОИМОСТЬ
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
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
            <span className="text-2xl font-semibold">4 200 ₽</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[#F5EFE6]/70">Ессентуки</span>
            <span className="text-2xl font-semibold">4 200 ₽</span>
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
            от 16 800 ₽
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
<section className="bg-[#101820] px-6 py-14 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        ГАЛЕРЕЯ
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
        Атмосфера маршрута
      </h2>
    </div>

    <div
  ref={galleryRef}
  onScroll={(e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const progress = container.scrollLeft / maxScroll;
    const index = Math.round(progress * 7);

    setCurrentImage(Math.min(index, 7));
  }}
  className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
>
      {[
        "/images/aktoprak-1.jpg",
        "/images/aktoprak-2.jpg",
        "/images/aktoprak-3.jpg",
        "/images/aktoprak-4.jpg",
        "/images/aktoprak-5.jpg",
        "/images/aktoprak-6.jpg",
        "/images/aktoprak-7.jpg",
        "/images/aktoprak-8.jpg",
      ].map((image, index) => (
        <div
          key={index}
          className="group relative min-w-[88%] snap-center overflow-hidden rounded-[32px] md:min-w-[65%]"
        >
          <img
            src={image}
            alt="Актопрак"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  </div>

  <div className="mt-6 flex items-center justify-center gap-2">
  {[
    "/images/aktoprak-1.jpg",
    "/images/aktoprak-2.jpg",
    "/images/aktoprak-3.jpg",
    "/images/aktoprak-4.jpg",
    "/images/aktoprak-5.jpg",
    "/images/aktoprak-6.jpg",
    "/images/aktoprak-7.jpg",
    "/images/aktoprak-8.jpg",
  ].map((_, index) => (
    <button
      key={index}
      onClick={() => {
        const container = galleryRef.current;
        if (!container) return;

        container.scrollTo({
          left: container.offsetWidth * index,
          behavior: "smooth",
        });

        setCurrentImage(index);
      }}
      className={`h-2 rounded-full transition-all duration-300 ${
        currentImage === index
          ? "w-8 bg-[#D6B16A]"
          : "w-2 bg-white/25 hover:bg-white/50"
      }`}
      aria-label={`Фото ${index + 1}`}
    />
  ))}
</div>
</section>
<section className="bg-[#101820] px-6 py-14 md:py-20">
  <div className="mx-auto max-w-5xl">
    <div className="mb-14">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        ПРОГРАММА
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
        Как проходит поездка
      </h2>
    </div>

    <div className="space-y-10">
      {[
        {
          title: "Выезд из Кисловодска",
          desc: "Отправляемся в путешествие около 6:00–7:00 утра. Забираем туристов по указанным адресам.",
        },

        {
          title: "Завтрак",
          desc: "Через полтора часа после выезда останавливаемся на плотный завтрак перед дорогой в горы.",
        },

        {
          title: "Озеро Гижгит",
          desc: "Посещаем одно из самых красивых горных озер Кавказа с бирюзовой водой и панорамными видами.",
        },

        {
          title: "Перевал Актопрак",
          desc: "Проезжаем по одной из самых красивых горных дорог Кавказа с панорамами ущелий и перевалов.",
        },

        {
          title: "Село Эл-Тюбю",
          desc: "Посещаем древнее балкарское селение и знаменитый «город мертвых».",
        },

        {
          title: "Парадром Чегем",
          desc: "По желанию можно выбрать один из экстремальных аттракционов:",
          extra: [
            "Полет на параплане",
            "Зип-лайн",
            "Прыжок с тарзанки (rope jumping)",
          ],
        },

        {
          title: "Чегемские водопады",
          desc: "Останавливаемся у знаменитых Чегемских водопадов среди отвесных скал и горных ущелий.",
        },

        {
          title: "Обед",
          desc: "Завершаем маршрут обедом у легендарного дяди Къурмана.",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="border-b border-white/10 pb-10 last:border-none"
        >
          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <div className="md:w-[35%]">

              <h3 className="text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
            </div>

            <div className="md:w-[60%]">
              <p className="text-base leading-7 text-[#F5EFE6]/70">
                {step.desc}
              </p>

              {step.extra && (
                <ul className="mt-4 space-y-2 text-[#F5EFE6]/70">
                  {step.extra.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#D6B16A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#101820] px-6 py-14 md:py-20">
  <div className="mx-auto max-w-5xl">
    <div className="mb-14">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        FAQ
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
        Частые вопросы
      </h2>
    </div>

    <div className="space-y-5">
      {[
        {
          question: "Что входит в стоимость?",
          answer:
            "Трансфер по всему маршруту, сопровождение водителя-гида и все остановки по программе поездки.",
        },

        {
          question: "Что оплачивается отдельно?",
          answer:
            "Питание, ЭКО сборы, и личные расходы.",
        },

        {
          question: "Что взять с собой?",
          answer:
            "Документы, удобную обувь, ветровку, головной убор, солнцезащитные очки и крем от загара.",
        },

        {
          question: "Можно ли поехать с детьми?",
          answer:
            "Да, маршрут подходит для поездок с детьми.",
        },

        {
          question: "Что будет при плохой погоде?",
          answer:
            "Если погодные условия могут повлиять на безопасность или впечатления от поездки, мы заранее предложим перенос даты или альтернативный маршрут.",
        },
      ].map((item, index) => (
        <details
          key={index}
          className="group rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
            {item.question}

            <span className="text-2xl text-[#D6B16A] transition group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#F5EFE6]/70">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#101820] px-6 pb-28 pt-10">
  <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-xl md:px-16">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
      ТВОЙ КОМПАС
    </p>

    <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
      Готовы отправиться
      <br />
      в путешествие?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F5EFE6]/70">
      Напишите нам — поможем подобрать удобную дату,
      расскажем детали поездки и ответим на все вопросы.
    </p>

    <div className="mt-10">
      <a
        href="https://wa.me/79298606885"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-[#D6B16A] px-8 py-4 text-base font-semibold text-[#101820] transition hover:bg-[#E7C98C]"
      >
        Забронировать
      </a>
    </div>
  </div>
</section>
    </main>
  );
}