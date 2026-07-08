import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экскурсия в Северную Осетию из Кисловодска — Твой Компас",

  description:
    "Однодневная экскурсия в Северную Осетию с выездом из любой точки КМВ. Город мертвых Даргавс, Кармадонское и Куртатинское ущелья, Аланский монастырь.",
};

export default function OsetiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}