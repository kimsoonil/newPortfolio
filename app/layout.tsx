import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://kimsunil.netlify.app";

export const metadata: Metadata = {
  title: "김순일 | 프론트엔드 개발자 포트폴리오",
  description:
    "커머스·SCM·관리자 콘솔과 모바일 웹뷰를 개발해 온 7년차 프론트엔드 개발자 김순일의 포트폴리오입니다.",
  keywords: [
    "프론트엔드",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
    "개발자",
    "김순일",
    "커머스 프론트엔드",
  ],
  authors: [{ name: "김순일", url: "https://github.com/kimsoonil" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "김순일 포트폴리오",
    title: "김순일 | 프론트엔드 개발자 포트폴리오",
    description:
      "커머스·SCM·관리자 콘솔과 모바일 웹뷰를 개발해 온 7년차 프론트엔드 개발자 김순일의 포트폴리오입니다.",
    images: [
      {
        url: `${siteUrl}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "김순일 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김순일 | 프론트엔드 개발자 포트폴리오",
    description:
      "커머스·SCM·관리자 콘솔과 모바일 웹뷰를 개발해 온 7년차 프론트엔드 개발자 김순일의 포트폴리오입니다.",
    images: [`${siteUrl}/profile.jpg`],
    creator: "@kimsoonil",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "김순일",
  alternateName: "Kim Soonil",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: "프론트엔드 개발자",
  description:
    "커머스·SCM·관리자 콘솔과 모바일 웹뷰를 개발해 온 7년차 프론트엔드 개발자",
  email: "rlatnsdlf158@naver.com",
  sameAs: [
    "https://github.com/kimsoonil",
    "https://k-soonil.tistory.com/",
    "https://www.notion.so/Soonil-Kim-8b0de4d95bfe40db8e725e980cca5fdb",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Zustand",
    "Redux Toolkit",
    "Vitest",
    "React Testing Library",
    "Flutter",
    "GitHub Actions",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
