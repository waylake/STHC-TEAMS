import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "삼일공업고등학교 | 풀스택 개발 프로젝트 전시",
  description: "삼일공업고등학교 학생들이 만든 창의적이고 혁신적인 풀스택 개발 프로젝트들을 만나보세요",
  keywords: ["삼일공업고등학교", "풀스택 개발", "학생 프로젝트", "웹 개발", "프로그래밍"],
  openGraph: {
    title: "삼일공업고등학교 | 풀스택 개발 프로젝트 전시",
    description: "삼일공업고등학교 학생들의 창의적인 풀스택 개발 프로젝트 전시관",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
