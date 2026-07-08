import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия в Верхнюю Балкарию из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия в Верхнюю Балкарию с выездом из любой точки КМВ. Голубые озера, Черекская теснина, Язык Тролля, Шато Эркен и древние башни.",
};

export default function BalkariaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}