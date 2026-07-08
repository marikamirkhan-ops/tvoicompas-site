import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия на перевал Актопрак из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия на перевал Актопрак с выездом из любой точки КМВ. Озеро Гижгит, Чегемские водопады, Эль-Тюбю и Чегемский парадром.",
};

export default function AktoprakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}