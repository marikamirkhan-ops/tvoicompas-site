"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 600);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  pickup: "",
  direction: "",
  dates: "",
  format: "",
  people: "",
  comment: "",
});

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const message = `
Здравствуйте! Хочу оставить заявку на экскурсию.

Имя: ${formData.name}
Телефон: ${formData.phone}
Где забрать: ${formData.pickup}
Направление: ${formData.direction}
Желаемые даты: ${formData.dates}
Формат экскурсии: ${formData.format}
Количество человек: ${formData.people}
Комментарий: ${formData.comment}
`;

  const url = `https://wa.me/79298606885?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
  return (
    <main className="min-h-screen bg-[#101820] text-[#F5EFE6]">
<header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#101820]/45 backdrop-blur-md">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    <a href="#" aria-label="Наверх">
  <img
    src="/images/logo-round.png"
    alt="Твой Компас"
    className="h-14 w-14 rounded-full object-cover"
  />
</a>

    <nav className="hidden items-center gap-8 text-sm font-medium text-[#F5EFE6]/80 md:flex">
      <a href="#routes" className="hover:text-[#D6B16A]">
        Направления
      </a>

      <a href="#how" className="hover:text-[#D6B16A]">
        Как проходит поездка
      </a>

      <a href="#faq" className="hover:text-[#D6B16A]">
        FAQ
      </a>

      <a href="#contacts" className="hover:text-[#D6B16A]">
        Контакты
      </a>
    </nav>

    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-3xl text-[#F5EFE6] md:hidden"
    >
      ☰
    </button>
  </div>

{isMenuOpen && (
  <>
    <div
      className="fixed inset-0 z-[60] bg-black/40 md:hidden"
      onClick={() => setIsMenuOpen(false)}
    />

    <div className="absolute left-0 top-16 z-[70] w-full border-t border-white/10 bg-[#101820]/95 px-6 py-6 backdrop-blur-xl md:hidden">
      <div className="flex flex-col gap-5 text-lg text-[#F5EFE6]">
        <a onClick={() => setIsMenuOpen(false)} href="#routes">
          Направления
        </a>

        <a onClick={() => setIsMenuOpen(false)} href="#how">
          Как проходит поездка
        </a>

        <a onClick={() => setIsMenuOpen(false)} href="#faq">
          FAQ
        </a>

        <a onClick={() => setIsMenuOpen(false)} href="#contacts">
          Контакты
        </a>
      </div>
    </div>
  </>
)}
</header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
  <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-60" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/80 to-transparent" />

  <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-[#101820]/40" />

  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
      Твой Компас
    </p>

    <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-7xl">
      Превращаем мечты в маршруты
    </h1>

    <p className="mt-6 max-w-2xl text-base leading-7 text-[#F5EFE6]/75 md:text-xl md:leading-8">
      Мини-группы, комфортные внедорожники, выезд из любой точки КМВ.
    </p>

    <div className="mt-9">
      <a
        href="#contacts"
        className="inline-flex rounded-full bg-[#D6B16A] px-8 py-4 text-center font-semibold text-[#101820] transition hover:bg-[#E4C37E]"
      >
        Забронировать
      </a>
    </div>

    <p className="mt-5 max-w-sm text-sm leading-6 text-[#F5EFE6]/60">
      Ответим в WhatsApp или Telegram в течение нескольких минут
    </p>
  </div>
</section>
<section id="routes" className="scroll-mt-24 bg-[#101820] px-6 py-14 text-[#F5EFE6] md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-9">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B16A] md:text-sm">
        Популярные маршруты
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
        Самые популярные экскурсии
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {[
        {
          title: "Джилы-Су",
          price: "от 3 700 ₽",
          duration: "8–9 часов",
          href: "/jily-su",
        },
        {
          title: "Домбай",
          price: "от 4 200 ₽",
          duration: "12–13 часов",
          href: "/dombay",
        },
        {
          title: "Бермамыт",
          price: "от 3 700 ₽",
          duration: "8–9 часов",
          href: "/bermamyt",
        },
        {
          title: "Эльбрус",
          price: "от 4 200 ₽",
          duration: "12–13 часов",
          href: "/elbrus",
        },
      ].map((tour, index) => (
        <div
          key={index}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:rounded-[28px] md:p-5"
        >
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {tour.title}
          </h3>

          <div className="mt-3 space-y-1">
            <p className="text-base font-medium text-[#D6B16A] md:text-lg">
              {tour.price}
            </p>

            <p className="text-sm text-[#F5EFE6]/60">
              {tour.duration}
            </p>
          </div>

          <Link
            href={tour.href}
            className="mt-5 inline-flex text-sm font-medium text-[#F5EFE6]/75 transition hover:text-[#D6B16A]"
>
            Подробнее →
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#0D141B] px-6 py-14 text-[#F5EFE6] md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B16A] md:text-sm">
        Все экскурсии
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
        Выберите свое направление
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-[#F5EFE6]/70">
        Однодневные экскурсии по самым красивым местам Северного Кавказа.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: "Джилы-Су",
          image: "/images/jily-su.jpg",
          desc: "Самая красивая дорога в России.",
          price: "от 3 700 ₽",
          time: "8–9 часов",
          href: "/jily-su",
        },
        {
          title: "Бермамыт",
          image: "/images/bermamut.jpg",
          desc: "Лучшие виды на Эльбрус.",
          price: "от 3 700 ₽",
          time: "6–7 часов",
          href: "/bermamyt",
        },
        {
          title: "Домбай",
          image: "/images/dombay.jpg",
          desc: "Жемчужина Северного Кавказа.",
          price: "от 4 200 ₽",
          time: "12–14 часов",
          href: "/dombay",
        },
        {
          title: "Эльбрус",
          image: "/images/elbrus.jpg",
          desc: "Самая высокая вершина Европы.",
          price: "от 4 200 ₽",
          time: "12–14 часов",
          href: "/elbrus",
        },
        {
          title: "Актопрак",
          image: "/images/aktoprak.jpg",
          desc: "Красочные виды и горные перевалы.",
          price: "от 4 200 ₽",
          time: "12–14 часов",
          href: "/aktoprak",
        },
        {
          title: "Архыз",
          image: "/images/arkhyz.jpg",
          desc: "Древние храмы и горные озера.",
          price: "от 4 700 ₽",
          time: "12–14 часов",
          href: "/arkhyz",
        },
        {
          title: "Верхняя Балкария",
          image: "/images/balkaria.jpg",
          desc: "Древняя колыбель Балкарии.",
          price: "от 5 000 ₽",
          time: "12–14 часов",
          href: "/balkaria",
        },
        {
          title: "Северная Осетия",
          image: "/images/osetia.jpg",
          desc: "Ущелья, храмы и город мертвых.",
          price: "от 5 500 ₽",
          time: "12–14 часов",
          href: "/osetia",
        },
        {
          title: "Чечня",
          image: "/images/chechnya.jpg",
          desc: "Три города за один день.",
          price: "от 6 000 ₽",
          time: "12–14 часов",
          href: "/chechnya",
        },
      ].map((tour) => (
        <div
          key={tour.title}
          className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
        >
          <div className="overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              className="h-44 w-full object-cover transition duration-700 group-hover:scale-105 md:h-64"
            />
          </div>

          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {tour.title}
              </h3>

              <span className="shrink-0 text-sm text-[#D6B16A]">
                {tour.time}
              </span>
            </div>

            <p className="mt-4 leading-7 text-[#F5EFE6]/70">
              {tour.desc}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-lg font-semibold text-[#D6B16A]">
                {tour.price}
              </p>

              <Link
              href={tour.href}
              className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-[#F5EFE6]/85 transition-all duration-300 hover:border-[#D6B16A] hover:bg-[#D6B16A] hover:text-[#101820]"
>
              Подробнее
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section
  id="booking"
  className="bg-[#101820] px-6 py-14 text-[#F5EFE6] md:py-20"
>
  <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:rounded-[32px] md:p-12">
    <div className="mb-8 text-center md:mb-10">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B16A] md:text-sm">
        Заявка
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        Подберем экскурсию под вас
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#F5EFE6]/70">
        Оставьте заявку — мы поможем выбрать маршрут, расскажем детали и ответим на вопросы.
      </p>
    </div>

    <form onSubmit={handleFormSubmit} className="grid gap-4 md:grid-cols-2">
      <input
        type="text"
        placeholder="Ваше имя *"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[#F5EFE6] outline-none transition placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
      />

      <input
        type="tel"
        placeholder="Телефон *"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[#F5EFE6] outline-none transition placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
      />

      <input
        type="text"
        placeholder="Где вас забрать?"
        value={formData.pickup}
        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[#F5EFE6] outline-none transition placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
      />

      <input
        type="text"
        placeholder="Направление"
        value={formData.direction}
        onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[#F5EFE6] outline-none transition placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
      />

      <input
        type="text"
        placeholder="Желаемые даты"
        value={formData.dates}
        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[#F5EFE6] outline-none transition placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
      />

      <select
        value={formData.format}
        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
        className={`rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition focus:border-[#D6B16A] ${
          formData.format ? "text-[#F5EFE6]" : "text-[#F5EFE6]/40"
        }`}
      >
        <option value="">Формат экскурсии</option>
        <option value="Групповая">Групповая</option>
        <option value="Индивидуальная">Индивидуальная</option>
        <option value="Подскажите лучший вариант">
          Подскажите лучший вариант
        </option>
      </select>

      <input
        type="number"
        placeholder="Количество человек"
        value={formData.people}
        onChange={(e) => setFormData({ ...formData, people: e.target.value })}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[#F5EFE6] outline-none transition placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A] md:col-span-2"
      />

      <textarea
        placeholder="Комментарий"
        rows={4}
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[#F5EFE6] outline-none transition placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A] md:col-span-2"
      />

      <button
        type="submit"
        className="rounded-2xl bg-[#D6B16A] px-8 py-4 text-base font-semibold text-[#101820] transition-all duration-300 hover:bg-[#E7C98C] md:col-span-2"
      >
        Оставить заявку
      </button>
    </form>
  </div>
</section>
<section className="bg-[#0D141B] px-6 py-14 text-[#F5EFE6] md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B16A] md:text-sm">
        Почему выбирают нас
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        Путешествия, в которые хочется возвращаться
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {[
        {
          icon: "🚙",
          title: "Комфортные внедорожники",
        },
        {
          icon: "👥",
          title: "Небольшие группы",
        },
        {
          icon: "📍",
          title: "Выезд из любой точки КМВ",
        },
        {
          icon: "🧭",
          title: "Опытные водители-гиды",
        },
        {
          icon: "🛡",
          title: "Безопасные маршруты",
        },
        {
          icon: "☕",
          title: "Продуманные остановки",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:rounded-[28px] md:p-5"
        >
          <div className="text-2xl md:text-3xl">{item.icon}</div>

          <h3 className="mt-3 text-sm font-semibold leading-snug tracking-tight text-[#F5EFE6]/90 md:text-lg">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  id="how"
  className="scroll-mt-24 bg-[#101820] px-6 py-14 text-[#F5EFE6] md:py-20"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B16A] md:text-sm">
        Как проходит поездка
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        Все просто и продумано
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-[#F5EFE6]/70">
        От заявки до возвращения обратно — мы сопровождаем вас на каждом этапе поездки.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 md:gap-4">
      {[
        {
          icon: "📝",
          title: "Оставляете заявку",
        },
        {
          icon: "💬",
          title: "Мы связываемся с вами",
        },
        {
          icon: "✅",
          title: "Бронируем место и подтверждаем поездку",
        },
        {
          icon: "🚙",
          title: "Забираем вас по указанному адресу",
        },
        {
          icon: "🏔",
          title: "Отправляемся в путешествие",
        },
        {
          icon: "📍",
          title: "Посещаем лучшие локации маршрута",
        },
        {
          icon: "🏠",
          title: "Возвращаем обратно",
        },
      ].map((step, index) => (
        <div
          key={step.title}
          className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:rounded-[28px] md:p-5"
        >
          <div className="absolute right-4 top-4 text-[11px] tracking-[0.2em] text-[#D6B16A]/45">
            0{index + 1}
          </div>

          <div className="text-2xl md:text-3xl">{step.icon}</div>

          <h3 className="mt-3 pr-6 text-sm font-semibold leading-snug tracking-tight text-[#F5EFE6]/90 md:text-base">
            {step.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
<section
  id="faq"
  className="scroll-mt-24 bg-[#0D141B] px-6 py-14 text-[#F5EFE6] md:py-20"
>
  <div className="mx-auto max-w-5xl">
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B16A] md:text-sm">
        FAQ
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        Частые вопросы
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-[#F5EFE6]/70">
        Собрали ответы на самые популярные вопросы о поездках и бронировании.
      </p>
    </div>

    <div className="space-y-3 md:space-y-4">
      {[
        [
          "Что входит в стоимость?",
          "В стоимость входит трансфер, сопровождение водителя-гида и посещение всех основных локаций маршрута.",
        ],
        [
          "Что не входит в стоимость?",
          "Питание, экосборы, канатные дороги и личные расходы оплачиваются отдельно.",
        ],
        [
          "Можно ли поехать с детьми?",
          "Да, большинство маршрутов подходят для поездок с детьми. Перед бронированием мы поможем подобрать наиболее комфортный вариант.",
        ],
        [
          "Что взять с собой?",
          "Рекомендуем взять с собой теплую одежду, удобную обувь, документы, наличные деньги, солнцезащитные очки и воду.",
        ],
        [
          "Насколько безопасны поездки?",
          "Мы работаем только с опытными водителями-гидами и проверенными маршрутами. Безопасность туристов для нас всегда в приоритете.",
        ],
        [
          "Что будет, если испортится погода?",
          "Если погодные условия будут небезопасными для поездки, мы заранее свяжемся с вами и предложим перенос даты или альтернативный маршрут.",
        ],
        [
          "Как забронировать экскурсию?",
          "Оставьте заявку на сайте или напишите нам в WhatsApp / Telegram — мы быстро свяжемся с вами и подтвердим бронь.",
        ],
        [
          "За сколько дней лучше бронировать поездку?",
          "В сезон рекомендуем бронировать экскурсии заранее, особенно популярные направления и индивидуальные поездки.",
        ],
      ].map(([question, answer]) => (
        <details
          key={question}
          className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:rounded-[28px] md:p-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold tracking-tight text-[#F5EFE6]/90 md:text-xl">
            {question}

            <span className="shrink-0 text-[#D6B16A] transition duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-4 max-w-3xl leading-7 text-[#F5EFE6]/70 md:mt-5">
            {answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
<section
  id="contacts"
  className="scroll-mt-24 relative overflow-hidden bg-[#101820] px-6 py-14 text-[#F5EFE6] md:py-20"
>
  <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-20" />
  <div className="absolute inset-0 bg-[#101820]/85" />

  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B16A] md:text-sm">
          Контакты
        </p>

        <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Готовы отправиться в путешествие?
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#F5EFE6]/70">
          Напишите нам — поможем выбрать маршрут и расскажем все детали поездки.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/79298606885"
            target="_blank"
            className="rounded-full bg-[#D6B16A] px-8 py-4 text-center font-semibold text-[#101820] transition hover:bg-[#E4C37E]"
          >
            Написать в WhatsApp
          </a>

          <a
            href="https://t.me/tvoicompas26"
            target="_blank"
            className="rounded-full border border-white/15 px-8 py-4 text-center font-semibold text-[#F5EFE6]/85 transition hover:border-white/25 hover:bg-white/10"
          >
            Написать в Telegram
          </a>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:rounded-[32px] md:p-8">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-[#F5EFE6]/45">Телефон / WhatsApp</p>
            <p className="mt-2 text-xl font-semibold md:text-2xl">
              +7 (929) 860-68-85
            </p>
          </div>

          <div>
            <p className="text-sm text-[#F5EFE6]/45">Telegram</p>
            <p className="mt-2 text-xl font-semibold md:text-2xl">
              @tvoicompas26
            </p>
          </div>

          <div>
            <p className="text-sm text-[#F5EFE6]/45">Instagram</p>
            <p className="mt-2 text-xl font-semibold md:text-2xl">
              tvoi_compass
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer className="mt-14 border-t border-white/10 pt-8 md:mt-20">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo-round.png"
            alt="Твой Компас"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold">Твой Компас</p>

            <p className="text-sm text-[#F5EFE6]/50">
              Превращаем мечты в маршруты
            </p>
          </div>
        </div>

        <p className="text-sm text-[#F5EFE6]/45">
          © 2026 Твой Компас. Все права защищены.
        </p>
      </div>
    </footer>
  </div>
</section>
{showScrollTop && (
  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    aria-label="Наверх"
    className="fixed bottom-24 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#101820]/70 text-lg text-white/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:text-[#D6B16A]"
  >
    ⌃
  </button>
)}
  <a
  href="https://wa.me/79298606885"
  target="_blank"
  className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl shadow-2xl transition hover:scale-110"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  fill="currentColor"
  className="h-6 w-6"
>
  <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.2-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.17 3 .14.2 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.62.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.2-.55-.34z"/>
  <path d="M16.03 3C8.85 3 3 8.82 3 15.99c0 2.54.74 5.01 2.13 7.13L3 29l6.07-2.01a13 13 0 0 0 6.96 2.02h.01C23.2 29.01 29 23.18 29 16.01 29 8.82 23.18 3 16.03 3zm0 23.67h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.6 1.19 1.17-3.51-.25-.41a10.63 10.63 0 1 1 8.48 4.44z"/>
</svg>
</a>
</main>
  );
}