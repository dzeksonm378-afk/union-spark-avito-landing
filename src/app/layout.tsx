import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Продвижение бизнеса на Avito под ключ",
  description:
    "Системное продвижение бизнеса на Avito: объявления, аналитика, SEO, креативы, стратегия и работа с заявками.",
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
