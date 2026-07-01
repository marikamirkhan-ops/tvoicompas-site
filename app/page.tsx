"use client";

import { useState } from "react";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#101820] text-[#F5EFE6]">
<header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#101820]/45 backdrop-blur-md">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
    <img
      src="/images/logo.png"
      alt="Твой Компас"
      className="h-14 w-auto"
    />

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
    <div className="border-t border-white/10 bg-[#101820]/95 px-6 py-6 backdrop-blur-xl md:hidden">
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

    <div className="grid gap-6 md:grid-cols-2">
      <div className="group relative overflow-hidden rounded-3xl">
        <img
          src="/images/jily-su.jpg"
          alt="Джилы-Су"
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 z-10 p-8">
          <h3 className="text-3xl font-bold">Джилы-Су</h3>

          <p className="mt-3 max-w-md text-[#F5EFE6]/80">
            Самая красивая дорога в России, водопады и панорамы Эльбруса.
          </p>

          <p className="mt-4 text-sm text-[#D6B16A]">
            8–9 часов · от 3 700 ₽
          </p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-3xl">
        <img
          src="/images/bermamut.jpg"
          alt="Бермамыт"
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 z-10 p-8">
          <h3 className="text-3xl font-bold">Бермамыт</h3>

          <p className="mt-3 max-w-md text-[#F5EFE6]/80">
            Кавказский гранд-каньон и лучшие виды на Эльбрус.
          </p>

          <p className="mt-4 text-sm text-[#D6B16A]">
            6–7 часов · от 3 700 ₽
          </p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-3xl">
        <img
          src="/images/dombay.jpg"
          alt="Домбай"
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 z-10 p-8">
          <h3 className="text-3xl font-bold">Домбай</h3>

          <p className="mt-3 max-w-md text-[#F5EFE6]/80">
            Жемчужина Северного Кавказа.
          </p>

          <p className="mt-4 text-sm text-[#D6B16A]">
            12–14 часов · от 4 200 ₽
          </p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-3xl">
        <img
          src="/images/elbrus.jpg"
          alt="Эльбрус"
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 z-10 p-8">
          <h3 className="text-3xl font-bold">Эльбрус</h3>

          <p className="mt-3 max-w-md text-[#F5EFE6]/80">
            Самая высокая вершина России и Европы.
          </p>

          <p className="mt-4 text-sm text-[#D6B16A]">
            12–14 часов · от 4 200 ₽
          </p>
        </div>
      </div>
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
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">{tour.title}</h3>

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
  id="quiz"
  className="bg-[#101820] px-6 py-24 text-[#F5EFE6]"
>
  <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14">
    <div className="max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        Подбор экскурсии
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-5xl">
        Не знаете, что выбрать?
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#F5EFE6]/75">
        Ответьте на несколько вопросов — и мы поможем подобрать идеальную экскурсию.
      </p>
    </div>

    <div className="mt-14 grid gap-10 md:grid-cols-2">
      <div>
        <p className="mb-4 text-lg font-semibold">
          Откуда выезжаете?
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "Кисловодск",
            "Ессентуки",
            "Пятигорск",
            "Железноводск",
            "Минеральные Воды",
          ].map((city) => (
            <button
              key={city}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:border-[#D6B16A] hover:bg-[#D6B16A]/10"
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-4 text-lg font-semibold">
          Что вам ближе?
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "Панорамные виды",
            "Водопады и реки",
            "Горные перевалы",
            "Спокойная поездка",
            "Красивые дороги",
            "История и древние места",
            "Максимум природы",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:border-[#D6B16A] hover:bg-[#D6B16A]/10"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-4 text-lg font-semibold">
          Формат поездки
        </p>

        <div className="flex flex-wrap gap-3">
          {["Групповая", "Индивидуальная"].map((type) => (
            <button
              key={type}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:border-[#D6B16A] hover:bg-[#D6B16A]/10"
            >
              {type}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-[#F5EFE6]/55">
          Группы до 6–7 человек
        </p>
      </div>

      <div>
        <p className="mb-4 text-lg font-semibold">
          Количество человек
        </p>

        <div className="flex flex-wrap gap-3">
          {["1", "2", "3", "4", "5", "6+"].map((count) => (
            <button
              key={count}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:border-[#D6B16A] hover:bg-[#D6B16A]/10"
            >
              {count}
            </button>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-14 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-lg font-semibold">
          Поможем подобрать лучший маршрут именно для вас
        </p>

        <p className="mt-2 text-[#F5EFE6]/65">
          Ответим в WhatsApp или Telegram в течение нескольких минут
        </p>
      </div>

      <a
        href="#contacts"
        className="rounded-full bg-[#D6B16A] px-8 py-4 font-semibold text-[#101820] transition hover:bg-[#E4C37E]"
      >
        Подобрать маршрут
      </a>
    </div>
  </div>
</section>
<section className="bg-[#0D141B] px-6 py-24 text-[#F5EFE6]">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        Почему выбирают нас
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-5xl">
        Путешествия, в которые хочется возвращаться
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-[#D6B16A]/40 hover:bg-white/[0.07] md:p-8"
        >
          <div className="text-3xl md:text-4xl">{item.icon}</div>

          <h3 className="mt-4 text-lg font-semibold leading-snug md:mt-6 md:text-2xl">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
<section
  id="how"
  className="bg-[#101820] px-6 py-24 text-[#F5EFE6]"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
        Как проходит поездка
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-5xl">
        Все просто и продумано
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          className="relative rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:p-8"
        >
          <div className="absolute right-6 top-6 text-sm text-[#D6B16A]/60">
            0{index + 1}
          </div>

          <div className="text-3xl md:text-4xl">{step.icon}</div>

          <h3 className="mt-4 text-base font-semibold leading-snug md:mt-6 md:text-xl">
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
        ["Что взять с собой?", "Рекомендуем взять теплую одежду, удобную обувь, наличные деньги, солнцезащитные очки и воду."],
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