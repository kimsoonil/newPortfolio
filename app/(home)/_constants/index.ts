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
    title: "ERP · 재고·주문·매출 통합관리",
    image: "/flow-ledger-spring.png",
    demo: "https://flow-ledger-erp.slskdkfdl12.chatgpt.site/",
    description: "React·TypeScript와 Java·Spring Boot·MyBatis·PostgreSQL로 상품·재고·다품목 주문·부분 반품·매출 통계를 구현했습니다. Spring Security 권한과 Docker·GitHub Actions 검증을 적용했습니다. 새 버전은 배포 준비 중이며 기존 배포본은 소유자 전용입니다.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "MyBatis", "PostgreSQL", "Spring Security", "Docker", "GitHub Actions"],
    role: "개인 프로젝트 · 자체 설계·개발", period: "신규 버전 구현·검증 완료 · 운영 배포 준비 중",
    highlights: ["더미 상품 1만 건·주문 180건·부분 반품 12건", "JUnit 18개·Vitest 2개·Playwright 2개 및 CI 4개 작업 통과"],
  },
  {
    title: "물류 모니터링 대시보드",
    description: "모의 물류 데이터를 Canvas로 시각화하고 차량 선택·상태 표시를 제공하는 개인 기술 검증 프로젝트입니다. 실물류 시스템과 연결되지 않습니다.",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Zustand", "Vitest"],
    image: "/gscrmd.png", demo: "https://seoul-logistics-dashboard.slskdkfdl12.chatgpt.site/dashboard/", github: "https://github.com/kimsoonil/gscrmd",
    role: "개인 프로젝트 · 1인 개발", period: "",
    highlights: ["Canvas 색상별 배치 렌더링, 좌표 변환과 거리 제곱 기반 차량 선택", "메인 스레드 청크 처리와 상태 배치 업데이트 · 성능 수치는 측정 후 공개"],
  },
  {
    title: "민원똑똑",
    description: "민원 검색과 대화형 안내 UX를 구현한 프로토타입입니다. 키워드 기반 모의 응답과 정적 민원 데이터를 사용하며 실제 AI·본인 인증·서류 발급 기능은 연결되지 않았습니다.",
    technologies: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Vitest"],
    image: "/minwontalk.png", github: "https://github.com/kimsoonil/MinwonTalk", demo: "https://minwontalk.netlify.app/",
    role: "개인 프로젝트 · 1인 개발", period: "", highlights: ["민원명·키워드 검색과 상황별 서류 패키지 안내", "모의 채팅 응답, 관련 민원 및 외부 안내 링크 표시"],
  },
  {
    title: "영웅합전서",
    description: "한국사 영웅을 모집·조합해 적을 방어하는 전략 게임입니다. 공개 저장소에서 게임 로직, 계정별 브라우저 저장, 로그인 연동 코드와 Android 패키징 구성을 확인했습니다. 앱스토어 출시 여부는 별도 확인이 필요합니다.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Capacitor"],
    demo: "https://korean-history-merge-defense.slskdkfdl12.chatgpt.site/",
    image: "/hero-chronicle.png", github: "https://github.com/kimsoonil/korean-history-merge-defense",

    role: "개인 프로젝트 · 게임·프론트엔드 개발", period: "개발 중 · 공개 웹",
    highlights: ["병력 모집·영웅 조합·전장·성장 UI와 게임 규칙 테스트", "Supabase 로그인 및 저장 관련 코드 · 운영 DB 적용 상태는 미검증", "Capacitor Android 구성 · 스토어 출시·광고 서버 검증 성과는 확인 전 미표기"],
  },
];
