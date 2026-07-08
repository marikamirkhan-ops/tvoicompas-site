import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия на Эльбрус из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия на Эльбрус с выездом из любой точки КМВ. Озеро Гижгит, поляна Азау, канатная дорога, Поляна нарзанов и ущелье Адыр-Суу.",
};

export default function ElbrusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}