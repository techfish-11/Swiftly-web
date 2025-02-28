import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swiftly | 次世代のDiscord Bot体験",
  description: "風のように軽快に、サーバーに新しいエクスペリエンスを。50以上の豊富な機能、そして完全無料。",
  keywords: "Discord Bot, Swiftly, サーバー管理, 荒らし対策, 音声読み上げ, 匿名投票",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
