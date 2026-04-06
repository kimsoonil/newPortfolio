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

const siteUrl = "https://kimsunil-portfolio.netlify.app";

export const metadata: Metadata = {
  title: "김수닐 | 프론트엔드 개발자 포트폴리오",
  description:
    "6년 8개월간 커머스·AI·핀테크 등 6개 도메인에서 10개 이상의 서비스를 출시한 프론트엔드 개발자 김수닐의 포트폴리오입니다.",
  keywords: [
    "프론트엔드",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
    "개발자",
    "김수닐",
    "프론트엔드 챕터 리더",
  ],
  authors: [{ name: "김수닐", url: "https://github.com/kimsoonil" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "김수닐 포트폴리오",
    title: "김수닐 | 프론트엔드 개발자 포트폴리오",
    description:
      "6년 8개월간 커머스·AI·핀테크 등 6개 도메인에서 10개 이상의 서비스를 출시한 프론트엔드 개발자 김수닐의 포트폴리오입니다.",
    images: [
      {
        url: `${siteUrl}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "김수닐 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김수닐 | 프론트엔드 개발자 포트폴리오",
    description:
      "6년 8개월간 커머스·AI·핀테크 등 6개 도메인에서 10개 이상의 서비스를 출시한 프론트엔드 개발자 김수닐의 포트폴리오입니다.",
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
  name: "김수닐",
  alternateName: "Kim Soonil",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: "프론트엔드 챕터 리더",
  description:
    "6년 8개월간 커머스·AI·핀테크 등 6개 도메인에서 10개 이상의 서비스를 출시한 프론트엔드 개발자",
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
    "React Query",
    "Tailwind CSS",
    "Flutter",
    "GitHub Actions",
    "CI/CD",
  ],
  worksFor: {
    "@type": "Organization",
    name: "어메스 (Ames)",
  },
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
