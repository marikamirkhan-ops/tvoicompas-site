"use client";

import { useRef, useState } from "react";

const galleryImages = [
  "/images/medovye-1.webp",
  "/images/medovye-3.webp",
  "/images/medovye-5.webp",
  "/images/medovye-6.webp",
  "/images/medovye-7.webp",
  "/images/medovye-8.webp",
  "/images/medovye-2.webp",
  "/images/medovye-4.webp",
];

const program = [
  {
    title: "Выезд из КМВ",
    text: "Ориентировочный выезд — с 9:00 до 10:00. Забираем гостей от места проживания.",
  },
  {
    title: "Гора Кольцо",
    text: "Посетим известную природную арку и смотровую площадку с панорамными видами.",
  },
  {
    title: "Чайный домик",
    text: "Остановка для знакомства с местными продуктами, сладостями и горным чаем.",
  },
  {
    title: "Медовые Водопады",
    text: "Прогулка по живописному ущелью и осмотр водопадов комплекса.",
  },
  {
    title: "Ферма альпак или зиплайн",
    text: "Дополнительные развлечения по желанию: знакомство с альпаками или полёт над ущельем.",
  },
  {
    title: "Обед с национальной кухней",
    text: "Остановка в кафе, где можно попробовать блюда кавказской кухни.",
  },
  {
    title: "Суворовские термальные источники",
    text: "Один час отдыха в крытых и открытых бассейнах с термальной водой.",
  },
];

const faq = [
  {
    question: "Что входит в стоимость?",
    answer:
      "Трансфер по всему маршруту, сопровождение водителя-гида и все остановки по программе поездки.",
  },
  {
    question: "Что оплачивается отдельно?",
    answer:
      "Экосбор — 300 ₽, источники — 700 ₽ взрослым и 300 ₽ детям 5–12 лет, питание и личные расходы. По желанию: ферма альпак — 1 000 ₽, зиплайн — 3 000 ₽.",
  },
  {
    question: "Что взять с собой?",
    answer:
      "Документы, удобную обувь, купальные принадлежности, полотенце и резиновые тапочки.",
  },
  {
    question: "Можно ли поехать с детьми?",
    answer: "Да, маршрут подходит для поездок с детьми.",
  },
  {
    question: "Что будет при плохой погоде?",
    answer:
      "Если погода повлияет на безопасность или впечатления от поездки, мы заранее предложим перенос даты или альтернативный маршрут.",
  },
];

export default function MedovyeVodopadyPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#101820] text-[#F5EFE6]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 bg-[url('/images/medovye-1.webp')] bg-cover bg-center opacity-60 md:bg-[url('/images/medovye-main.webp')]" />
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
            Медовые Водопады
          </p>

          <h1 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight md:text-6xl">
            Медовые Водопады и Суворовские источники
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F5EFE6]/75 md:text-xl">
            Медовые Водопады и отдых в термальных бассейнах за одну поездку.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#F5EFE6]/65">
            {["5–6 часов", "Мини-группа до 7 человек", "Выезд в 9:00–10:00"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span>{item}</span>
                  {index !== 2 && <span className="text-[#D6B16A]/60">•</span>}
                </div>
              ),
            )}
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
                {["Кисловодск", "Ессентуки", "Пятигорск", "Железноводск", "Минеральные Воды"].map(
                  (city) => (
                    <div
                      key={city}
                      className="flex items-center justify-between border-b border-white/10 pb-4"
                    >
                      <span className="text-[#F5EFE6]/70">{city}</span>
                      <span className="text-2xl font-semibold">3 000 ₽</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#D6B16A]/20 bg-[#D6B16A]/10 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#D6B16A]">
                Индивидуальная поездка
              </p>
              <div className="mt-10">
                <p className="text-5xl font-bold leading-none">от 12 000 ₽</p>
                <p className="mt-4 text-lg text-[#F5EFE6]/70">за автомобиль</p>
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
            onScroll={(event) => {
              const container = event.currentTarget;
              const maxScroll = container.scrollWidth - container.clientWidth;
              if (maxScroll <= 0) return;
              setCurrentImage(
                Math.min(Math.round((container.scrollLeft / maxScroll) * 7), 7),
              );
            }}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide"
          >
            {galleryImages.map((image) => (
              <div
                key={image}
                className="group relative min-w-[88%] snap-center overflow-hidden rounded-[32px] md:min-w-[65%]"
              >
                <img
                  src={image}
                  alt="Медовые Водопады и Суворовские термальные источники"
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image}
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
        </div>
      </section>

      <section className="bg-[#101820] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
              ПРОГРАММА
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Программа поездки
            </h2>
          </div>

          <div className="space-y-12">
            {program.map((item) => (
              <div
                key={item.title}
                className="border-b border-white/10 pb-10 last:border-none"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <h3 className="text-xl font-semibold tracking-tight md:w-[35%]">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-7 text-[#F5EFE6]/70 md:w-[60%]">
                    {item.text}
                  </p>
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
            {faq.map((item) => (
              <details
                key={item.question}
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
            <br />в путешествие?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F5EFE6]/70">
            Напишите нам — поможем подобрать удобную дату, расскажем детали поездки и ответим на все вопросы.
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
