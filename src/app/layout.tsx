import { type Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/client/styles/globals.css";
import "@/client/styles/reset.css";
import { type ReactNode } from "react";
import { StoreProvider } from "@/client/redux/store";
import {initialState} from "@/shared/data"
const fontNunito = Nunito({
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
      <body className={fontNunito.variable}><StoreProvider initialState={initialState} >{children}</StoreProvider></body>
    </html>
  );
};

export default RootLayout;
