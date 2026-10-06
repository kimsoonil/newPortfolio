import { Code, Users, TestTube2, Workflow } from "lucide-react";
import {
  Project,
  Experience,
  SkillCategory,
  Feature,
  NavItem,
} from "@/app/(home)/_types";

export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Career", href: "#career" },
  { name: "Contact", href: "#contact" },
];

export const FEATURES: Feature[] = [
  {
    icon: Workflow,
    title: "업무 흐름 구현",
    description:
      "로그인·상품 탐색부터 주문·배송·재고·반품·환불·정산까지 사용자와 운영자의 흐름을 연결합니다.",
  },
  {
    icon: Code,
    title: "공통 UI와 구조화",
    description:
      "모노레포, 공통 컴포넌트와 상태 관리 기준을 적용해 여러 화면에서 재사용할 수 있는 구조를 만듭니다.",
  },
  {
    icon: TestTube2,
    title: "테스트와 배포",
    description:
      "Vitest·React Testing Library로 변경 사항을 검증하고 GitHub Actions·AWS 배포 절차를 다뤘습니다.",
  },
  {
    icon: Users,
    title: "협업과 리딩 경험",
    description:
      "프론트엔드 챕터 리딩, 코드 리뷰와 문서화를 수행하고 기획·디자인·백엔드와 요구사항을 조율했습니다.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "주식회사 어메스 (AmassCo., Ltd.)",
    position: "선임연구원 · 프론트엔드 챕터 리딩",
    period: "2023.09 - 2026.08",
    description: [
      "파츠핏몰 자사몰·모바일 웹뷰와 B2B 커머스의 구매·주문·배송·반품·환불·정산 화면 개발",
      "SCM의 상품·차량·재고·주문·창고·계정 관리 화면과 멀티채널 데이터 정합성 검증 구현",
      "KeystoneJS·Java/JSP 기반 관리 화면을 React 구조로 전환하고 공통 컴포넌트 작성",
      "Turborepo·pnpm 기반 공통 UI, Vitest·React Testing Library 테스트와 GitHub Actions·AWS 배포 적용",
      "기술 스택·코드 컨벤션 논의, 코드 리뷰와 릴리스 관리 참여",
    ],
  },
  {
    company: "아이디스트 (IDist)",
    position: "연구원 · 프론트엔드 개발",
    period: "2022.08 - 2023.04",
    description: [
      "CCR 게임 커뮤니티 슈퍼클럽의 게시판·댓글·랭킹·알림과 반응형 UI 개발",
      "요구사항 정의와 계약 협의부터 참여하고 Redux Toolkit·Redux Saga 기반 상태 관리 구조 설계",
      "법인 변경으로 내모마켓과 별도 경력으로 등록됐으나 동일 조직과 구성원 아래 연속 근무",
    ],
  },
  {
    company: "주식회사 내모마켓",
    position: "연구원 · 프론트엔드 개발",
    period: "2022.04 - 2022.07",
    description: [
      "애플 기기 중고 거래 서비스의 로그인·상품 탐색·구매·배송·반품·교환·결제 기능 개발",
      "Flutter 기반 중고 의류 거래 앱 CLOZUP의 초기 기획과 목록·상세·거래 화면 구성",
      "법인 변경 이후 아이디스트에서 같은 조직과 구성원으로 연속 근무",
    ],
  },
  {
    company: "스냅태그 (Snaptag)",
    position: "연구원 · 프론트엔드 개발",
    period: "2021.11 - 2022.04",
    description: [
      "PDF 업로드 후 영역 지정·드래그·크기 조절·선택이 가능한 편집 UI 개발",
      "React-Konva·Zwibbler·react-cropper를 비교해 도형·이미지 처리 방식 선정",
      "웹툰·NFT 정보, 실시간 차트와 매수·매도·거래 내역 UI 개발",
    ],
  },
  {
    company: "포지큐브 (Posicube)",
    position: "연구원 · 프론트엔드 개발",
    period: "2019.04 - 2020.11",
    description: [
      "AI 장비 등록·상태·훈련·오류 로그를 관리하는 관리자 콘솔 개발",
      "온라인·전화 예약, 직원·권한·휴가·매장 관리 서비스와 Electron 앱 배포",
      "Flutter·MobX 기반 미국 주식 정보 앱의 실시간 주가·차트·뉴스·커뮤니티 개발",
    ],
  },
  {
    company: "CMESOFT",
    position: "연구원 · 웹 프론트엔드 개발",
    period: "2018.07 - 2019.03",
    description: [
      "대명리조트 스키락커 예약·상품 구매·카드 등록·간편결제·소셜 로그인 개발",
      "암호화폐 거래소의 실시간 시세·차트·호가·체결 내역과 주문 UI 개발",
      "리워드 서비스의 코인 적립·조회와 출석·돌림판·사다리 기능 개발",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Language",
    icon: "/language.svg",
    skills: [
      { name: "TypeScript", color: "bg-blue-500" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "HTML/CSS", color: "bg-orange-500" },
      { name: "Dart", color: "bg-cyan-500" },
    ],
  },
  {
    category: "Frontend",
    icon: "/frontend.svg",
    skills: [
      { name: "React", color: "bg-cyan-600" },
      { name: "Next.js", color: "bg-gray-900 dark:bg-gray-800" },
      { name: "Zustand", color: "bg-gray-700 dark:bg-gray-600" },
      { name: "Redux Toolkit", color: "bg-purple-600" },
      { name: "Redux-Saga", color: "bg-green-700" },
      { name: "Vitest", color: "bg-lime-600" },
      { name: "React Testing Library", color: "bg-red-500" },
      { name: "Flutter", color: "bg-blue-400" },
    ],
  },
  {
    category: "Delivery & Collaboration",
    icon: "/dev-ops.svg",
    skills: [
      { name: "GitHub Actions", color: "bg-gray-800 dark:bg-gray-700" },
      { name: "AWS", color: "bg-orange-500" },
      { name: "Turborepo", color: "bg-red-600" },
      { name: "pnpm", color: "bg-amber-600" },
      { name: "Git", color: "bg-orange-600" },
      { name: "Jira", color: "bg-blue-700" },
      { name: "Notion", color: "bg-gray-700" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "파츠핏몰",
    period: "2026.01 - 2026.07",
    role: "자사몰·모바일 웹뷰 프론트엔드 개발",
    description:
      "자동차 부품을 탐색하고 주문·배송까지 이어지는 자사몰과 모바일 웹뷰의 구매 흐름을 개발했습니다.",
    highlights: [
      "소셜 로그인, 상품, 장바구니, 주문, 배송과 차량 관리 화면 구현",
      "Turborepo·pnpm 모노레포와 공통 컴포넌트로 웹·웹뷰 UI 공유",
      "GitHub Actions·AWS 기반 배포 절차 적용",
    ],
    technologies: ["Next.js", "TypeScript", "Zustand", "Turborepo", "pnpm"],
    image: "/partsfit.png",
    demo: "https://partsfit.co.kr",
  },
  {
    title: "B2B 커머스",
    period: "2025.09 - 2025.12",
    role: "사업자몰·관리자 콘솔 프론트엔드 개발",
    description:
      "거래처별 계정과 주문 이후 업무를 한 콘솔에서 처리할 수 있도록 관리 화면을 구성했습니다.",
    highlights: [
      "거래처·계정·주문·반품·환불·정산 화면 개발",
      "데이터 그리드, 일괄 처리와 엑셀 다운로드 구현",
      "기능 테스트, 리팩터링과 릴리스 관리 참여",
    ],
    technologies: ["React", "TypeScript", "REST API", "Data Grid"],
  },
  {
    title: "SCM",
    period: "2023.09 - 2026.07",
    role: "부품 통합 관리 시스템 프론트엔드 개발",
    description:
      "여러 판매 채널의 상품·재고·주문 상태를 통합하고 데이터 불일치를 확인하는 운영 화면을 개발했습니다.",
    highlights: [
      "상품·차량·재고·주문·정산·창고·계정 관리 화면 구현",
      "멀티채널 주문·반품·취소 연동과 데이터 정합성 검증",
      "Vitest·React Testing Library 테스트와 코드 리뷰 수행",
    ],
    technologies: ["React", "TypeScript", "Zustand", "Vitest", "RTL"],
  },
  {
    title: "어드민 React 전환·PV 시각화",
    period: "2023.09 - 2023.12",
    role: "관리자 화면 전환과 차량 부품 시각화",
    description:
      "백엔드와 결합된 관리 화면을 React 구조로 분리하고 사고 부위와 관련 부품을 연결하는 탐색 UI를 구현했습니다.",
    highlights: [
      "페이지 구조와 API 관리 UI 재설계",
      "반복 화면을 위한 공통 컴포넌트 작성",
      "차량 이미지의 부위 선택 상태와 관련 부품 목록 연동",
    ],
    technologies: ["React", "JavaScript", "REST API"],
  },
  {
    title: "슈퍼클럽",
    period: "2022.08 - 2023.04",
    role: "게임 커뮤니티 프론트엔드 개발",
    description:
      "포트리스 개발사 CCR의 커뮤니티 플랫폼을 요구사항 정의와 계약 협의 단계부터 개발했습니다.",
    highlights: [
      "게시판·댓글·랭킹·알림 기능과 반응형 UI 구현",
      "Redux Toolkit·Redux Saga 기반 상태 관리와 폴더 구조 설계",
      "계약 범위의 기능을 완료해 후속 계약으로 연결",
    ],
    technologies: ["React", "Redux Toolkit", "Redux-Saga", "SCSS"],
  },
];
