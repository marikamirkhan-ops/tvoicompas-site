import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия на Бермамыт из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия на плато Бермамыт с выездом из любой точки КМВ. Панорамы Эльбруса, Схауатское ущелье, Малый и Большой Бермамыт.",
};

export default function BermamytLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}