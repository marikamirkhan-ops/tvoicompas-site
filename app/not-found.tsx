export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101820] px-6 text-[#F5EFE6]">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B16A]">
          404
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Маршрут не найден
        </h1>

        <p className="mt-5 text-base leading-7 text-[#F5EFE6]/70">
          Похоже, такой страницы нет. Вернитесь к списку экскурсий и выберите подходящее направление.
        </p>

        <a
          href="/#routes"
          className="mt-8 inline-flex rounded-full bg-[#D6B16A] px-8 py-4 font-semibold text-[#101820] transition hover:bg-[#E4C37E]"
        >
          Смотреть экскурсии
        </a>
      </div>
    </main>
  );
}