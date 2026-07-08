import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия на Джилы-Су из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия на Джилы-Су с выездом из любой точки КМВ. Водопады, панорамы Эльбруса, одна из самых красивых дорог России, мини-группы и комфортные внедорожники.",
};

export default function JilySuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}