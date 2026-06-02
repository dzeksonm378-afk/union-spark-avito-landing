import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Gate Agency | Digital Marketing",
  description: "Ведение и продвижение бизнес-аккаунтов Avito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
