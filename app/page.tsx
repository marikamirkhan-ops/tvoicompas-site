"use client";

import { useState } from "react";
export default function Home() {
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

    <div className="absolute left-0 top-20 z-[70] w-full border-t border-white/10 bg-[#101820]/95 px-6 py-6 backdrop-blur-xl md:hidden">
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

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Превращаем мечты в маршруты
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F5EFE6]/80 md:text-xl">
            Мини-группы, комфортные внедорожники, выезд из любой точки КМВ.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="rounded-full bg-[#D6B16A] px-8 py-4 text-center font-semibold text-[#101820] transition hover:bg-[#E4C37E]" href="#quiz">
              Подобрать экскурсию
            </a>

            <a className="rounded-full border border-[#F5EFE6]/40 px-8 py-4 text-center font-semibold text-[#F5EFE6] transition hover:bg-[#F5EFE6]/10" href="#contacts">
              Связаться с нами
            </a>
          </div>

          <p className="mt-5 text-sm text-[#F5EFE6]/65">
            Ответим в WhatsApp или Telegram в течение нескольких минут
          </p>

          <div className="mt-14 grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-2xl">🚙</p>
              <p className="mt-3 text-sm text-[#F5EFE6]/80">Забираем из любой точки КМВ</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-2xl">👥</p>
              <p className="mt-3 text-sm text-[#F5EFE6]/80">Мини-группы 6–7 человек</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-2xl">🛡</p>
              <p className="mt-3 text-sm text-[#F5EFE6]/80">Комфортно и безопасно</p>
            </div>
          </div>
        </div>
      </section>
      <section
  id="routes"
  className="bg-[#101820] px-6 py-24 text-[#F5EFE6]"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 flex items-end justify-between">
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
          Популярные маршруты
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Самые популярные экскурсии
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
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
      className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <h3 className="text-xl font-semibold">
        {tour.title}
      </h3>

      <div className="mt-4 space-y-1">
        <p className="text-lg font-medium text-[#D6B16A]">
          {tour.price}
        </p>

        <p className="text-sm text-[#F5EFE6]/60">
          {tour.duration}
        </p>
      </div>

      <a
        href={tour.href}
        className="mt-5 inline-flex text-sm font-medium text-[#F5EFE6]/80 transition hover:text-[#D6B16A]"
      >
        Подробнее →
      </a>
    </div>
  ))}
</div>
</div>
</section>
<section className="bg-[#0D141B] px-6 py-24 text-[#F5EFE6]">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        Все экскурсии
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Выберите свое направление
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: "Джилы-Су",
          image: "/images/jily-su.jpg",
          desc: "Самая красивая дорога в России.",
          price: "от 3 700 ₽",
          time: "8–9 часов",
        },
        {
          title: "Бермамыт",
          image: "/images/bermamut.jpg",
          desc: "Лучшие виды на Эльбрус.",
          price: "от 3 700 ₽",
          time: "6–7 часов",
        },
        {
          title: "Домбай",
          image: "/images/dombay.jpg",
          desc: "Жемчужина Северного Кавказа.",
          price: "от 4 200 ₽",
          time: "12–14 часов",
        },
        {
          title: "Эльбрус",
          image: "/images/elbrus.jpg",
          desc: "Самая высокая вершина Европы.",
          price: "от 4 200 ₽",
          time: "12–14 часов",
        },
        {
          title: "Актопрак",
          image: "/images/aktoprak.jpg",
          desc: "Красочные виды и горные перевалы.",
          price: "от 4 200 ₽",
          time: "12–14 часов",
        },
        {
          title: "Архыз",
          image: "/images/arkhyz.jpg",
          desc: "Древние храмы и горные озера.",
          price: "от 4 700 ₽",
          time: "12–14 часов",
        },
        {
          title: "Верхняя Балкария",
          image: "/images/balkaria.jpg",
          desc: "Древняя колыбель Балкарии.",
          price: "от 5 000 ₽",
          time: "12–14 часов",
        },
        {
          title: "Северная Осетия",
          image: "/images/osetia.jpg",
          desc: "Ущелья, храмы и город мертвых.",
          price: "от 5 500 ₽",
          time: "12–14 часов",
        },
        {
          title: "Чечня",
          image: "/images/chechnya.jpg",
          desc: "Три города за один день.",
          price: "от 6 000 ₽",
          time: "12–14 часов",
        },
      ].map((tour) => (
        <div
          key={tour.title}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              className="h-44 w-full object-cover transition duration-700 group-hover:scale-105 md:h-64"
            />
          </div>

          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold md:text-2xl">{tour.title}</h3>

              <span className="text-sm text-[#D6B16A]">
                {tour.time}
              </span>
            </div>

            <p className="mt-4 text-[#F5EFE6]/75">
              {tour.desc}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-lg font-semibold text-[#D6B16A]">
                {tour.price}
              </p>

              <button className="rounded-full border border-[#D6B16A]/40 px-5 py-2 text-sm font-medium text-[#F5EFE6] transition hover:bg-[#D6B16A] hover:text-[#101820]">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section
  className="bg-[#101820] px-6 py-24 text-[#F5EFE6]"
>
  <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
    <div className="mb-10 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        ЗАЯВКА
      </p>

      <h2 className="text-3xl font-bold leading-tight md:text-5xl">
        Подберем экскурсию под вас
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#F5EFE6]/70 md:text-lg">
        Оставьте заявку — мы поможем подобрать маршрут,
        расскажем детали поездки и ответим на все вопросы.
      </p>
    </div>

    <form onSubmit={handleFormSubmit} className="grid gap-5 md:grid-cols-2">
      <input
  type="text"
  placeholder="Ваше имя *"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#F5EFE6] outline-none placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
/>

      <input
  type="tel"
  placeholder="Телефон *"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#F5EFE6] outline-none placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
/>

      <input
  type="text"
  placeholder="Где вас забрать?"
  value={formData.pickup}
  onChange={(e) =>
    setFormData({ ...formData, pickup: e.target.value })
  }
  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#F5EFE6] outline-none placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
/>

      <input
  type="text"
  placeholder="Направление"
  value={formData.direction}
  onChange={(e) =>
    setFormData({ ...formData, direction: e.target.value })
  }
  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#F5EFE6] outline-none placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
/>

      <input
  type="text"
  placeholder="Желаемые даты"
  value={formData.dates}
  onChange={(e) =>
    setFormData({ ...formData, dates: e.target.value })
  }
  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#F5EFE6] outline-none placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A]"
/>
  <select
  value={formData.format}
  onChange={(e) =>
    setFormData({ ...formData, format: e.target.value })
  }
  className={`rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-[#D6B16A] ${
    formData.format
      ? "text-[#F5EFE6]"
      : "text-[#F5EFE6]/40"
  }`}
>
  <option value="">Формат экскурсии</option>

  <option value="Групповая">Групповая</option>

  <option value="Индивидуальная">
    Индивидуальная
  </option>

  <option value="Подскажите лучший вариант">
    Подскажите лучший вариант
  </option>
</select>

      <input
  type="number"
  placeholder="Количество человек"
  value={formData.people}
  onChange={(e) =>
    setFormData({ ...formData, people: e.target.value })
  }
  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#F5EFE6] outline-none placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A] md:col-span-2"
/>

      <textarea
  placeholder="Комментарий"
  rows={5}
  value={formData.comment}
  onChange={(e) =>
    setFormData({ ...formData, comment: e.target.value })
  }
  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#F5EFE6] outline-none placeholder:text-[#F5EFE6]/40 focus:border-[#D6B16A] md:col-span-2"
/>

      <button
        type="submit"
        className="rounded-2xl bg-[#D6B16A] px-8 py-5 text-lg font-semibold text-[#101820] transition hover:scale-[1.02] hover:bg-[#E7C98C] md:col-span-2"
      >
        Оставить заявку
      </button>
    </form>
  </div>
</section>
<section className="bg-[#0D141B] px-6 py-20 text-[#F5EFE6]">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        Почему выбирают нас
      </p>

      <h2 className="text-3xl font-bold leading-tight md:text-5xl">
        Путешествия, в которые хочется возвращаться
      </h2>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
          className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:border-[#D6B16A]/40 hover:bg-white/[0.07] md:p-6"
        >
          <div className="text-2xl md:text-4xl">{item.icon}</div>

          <h3 className="mt-3 text-base font-semibold leading-snug md:mt-5 md:text-xl">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  id="how"
  className="bg-[#101820] px-6 py-20 text-[#F5EFE6]"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        Как проходит поездка
      </p>

      <h2 className="text-3xl font-bold leading-tight md:text-5xl">
        Все просто и продумано
      </h2>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
          className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6"
        >
          <div className="absolute right-5 top-5 text-xs text-[#D6B16A]/60">
            0{index + 1}
          </div>

          <div className="text-2xl md:text-4xl">{step.icon}</div>

          <h3 className="mt-3 text-sm font-semibold leading-snug md:mt-5 md:text-lg">
            {step.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
<section
  id="faq"
  className="bg-[#0D141B] px-6 py-24 text-[#F5EFE6]"
>
  <div className="mx-auto max-w-5xl">
    <div className="mb-16 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        FAQ
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-5xl">
        Частые вопросы
      </h2>
    </div>

    <div className="space-y-4">
      {[
        ["Что входит в стоимость?", "В стоимость входит трансфер, сопровождение водителя-гида и посещение всех основных локаций маршрута."],
        ["Что не входит в стоимость?", "Питание, экосборы, канатные дороги и личные расходы оплачиваются отдельно."],
        ["Можно ли поехать с детьми?", "Да, большинство маршрутов подходят для поездок с детьми. Перед бронированием мы поможем подобрать наиболее комфортный вариант."],
        ["Что взять с собой?", "Рекомендуем взять с собой теплую одежду, удобную обувь, документы, наличные деньги, солнцезащитные очки и воду."],
        ["Насколько безопасны поездки?", "Мы работаем только с опытными водителями-гидами и проверенными маршрутами. Безопасность туристов для нас всегда в приоритете."],
        ["Что будет, если испортится погода?", "Если погодные условия будут небезопасными для поездки, мы заранее свяжемся с вами и предложим перенос даты или альтернативный маршрут."],
        ["Как забронировать экскурсию?", "Оставьте заявку на сайте или напишите нам в WhatsApp / Telegram — мы быстро свяжемся с вами и подтвердим бронь."],
        ["За сколько дней лучше бронировать поездку?", "В сезон рекомендуем бронировать экскурсии заранее, особенно популярные направления и индивидуальные поездки."],
      ].map(([question, answer]) => (
        <details
          key={question}
          className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold">
            {question}
            <span className="text-[#D6B16A] transition group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-5 leading-8 text-[#F5EFE6]/75">
            {answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
<section
  id="contacts"
  className="relative overflow-hidden bg-[#101820] px-6 py-24 text-[#F5EFE6]"
>
  <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-25" />
  <div className="absolute inset-0 bg-[#101820]/80" />

  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
          Контакты
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Готовы отправиться в путешествие?
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#F5EFE6]/75">
          Поможем подобрать маршрут, расскажем детали поездки и ответим на любые вопросы.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            className="rounded-full border border-[#F5EFE6]/40 px-8 py-4 text-center font-semibold text-[#F5EFE6] transition hover:bg-[#F5EFE6]/10"
          >
            Написать в Telegram
          </a>
        </div>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-[#F5EFE6]/50">Телефон / WhatsApp</p>
            <p className="mt-2 text-2xl font-semibold">
              +7 (929) 860-68-85
            </p>
          </div>

          <div>
            <p className="text-sm text-[#F5EFE6]/50">Telegram</p>
            <p className="mt-2 text-2xl font-semibold">
              @tvoicompas26
            </p>
          </div>

          <div>
            <p className="text-sm text-[#F5EFE6]/50">Instagram</p>
            <p className="mt-2 text-2xl font-semibold">
              tvoi_compass
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer className="mt-20 border-t border-white/10 pt-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Твой Компас"
            className="h-12 w-auto"
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
  <a
  href="https://wa.me/79298606885"
  target="_blank"
  className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl shadow-2xl transition hover:scale-110"
>
  💬
</a>
</main>
  );
}