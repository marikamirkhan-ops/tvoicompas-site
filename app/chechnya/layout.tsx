import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия в Грозный из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия в Грозный с выездом из любой точки КМВ. Грозный-Сити, мечети «Сердце Чечни», «Гордость мусульман» и «Сердце матери», города Грозный, Шали и Аргун.",
};

export default function ChechnyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}