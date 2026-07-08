import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия в Архыз из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия в Архыз с выездом из любой точки КМВ. Перевал Гум-Башы, Шоанинский храм, канатная дорога, Аланское городище и горные панорамы Кавказа.",
};

export default function ArkhyzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}