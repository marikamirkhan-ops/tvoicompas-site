import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия в Домбай из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия в Домбай с выездом из любой точки КМВ. Перевал Гум-Башы, Сырные пещеры, канатная дорога, древний храм и горные панорамы Кавказа.",
};

export default function DombayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}