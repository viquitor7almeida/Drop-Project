import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "drop-eventos",
  description: "drop-home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{backgroundColor: "#1a1a1a "}} //cor de fundo
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Link href="">
         <Image
          src="/imagens/wpp-purple.png"
          alt="wpp"
          width={50}
          height={50}
          className="fixed bottom-4 right-4"
          ></Image>
        </Link>

        {children}
      </body>
    </html>
  );
}
