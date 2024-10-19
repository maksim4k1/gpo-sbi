import "../styles/globals.css";
import "../styles/reset.css";
import { type Metadata } from "next";
import { Nunito } from "next/font/google";
import { type ReactNode } from "react";

export const fontNunito = Nunito({
  weight: ["400", "600", "900"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "СБИ",
  description:
    "Сервис для ведения отчётности трекеров в ходе реализационных программ ТУСУР.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={fontNunito.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
