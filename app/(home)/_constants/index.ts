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
    title: "영웅합전서",
    description:
      "한국사 영웅을 소환·조합해 적의 침공을 방어하는 전략 디펜스 게임입니다. 전투와 성장 UI부터 계정·클라우드 저장, 서버 재화 검증, 운영 어드민과 모바일 앱 패키징까지 구현하며 웹 서비스를 앱 출시 준비 단계로 확장했습니다.",
    technologies: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Capacitor", "AdMob"],
    image: "/hero-chronicle.png",
    demo: "https://korean-history-merge-defense.slskdkfdl12.chatgpt.site/",
    role: "개인 프로젝트 · 게임 기획·프론트엔드·서버·어드민 개발",
    period: "2026.09.17 ~ 현재 · 개발·운영 중",
    highlights: [
      "게임: 랜덤 소환·다단계 영웅 조합·스테이지 전투·성장·도감 UI와 게임 규칙 구현",
      "서버: Supabase 인증·클라우드 저장 및 서버 권위형 재화 처리, 보상형 광고의 서버 검증 연동",
      "어드민: 관리자 권한 기반 사용자 검색, 계정 재화·거래 이력·구매 상태 조회 화면 구현",
      "앱: Capacitor 기반 iOS·Android 패키징과 네이티브 광고 연동, 제출용 빌드 및 스토어 자료 준비",
      "출시 현황: 웹 공개 운영 · Google Play·App Store 출시 준비 중 — 제출용 빌드·스토어 자료 준비",
      "개발 방식: Codex를 활용한 반복 구현과 자동화 테스트로 게임 규칙·보상 처리 회귀 검증",
    ],
  },
  {
    title: "민원똑똑",
    description:
      "정부 민원 사이트의 복잡한 검색 UI를 개선하는 아이디어 프로젝트입니다. 실제 크롤링 대신 더미 데이터로 AI 자연어 처리 기반 대화형 민원 응답 흐름을 구현하고 UX 개선 방향을 검증했습니다.",
    technologies: ["React", "TypeScript", "AI", "Natural Language Processing"],
    image: "/minwontalk.png",
    github: "https://github.com/kimsoonil/MinwonTalk",
    demo: "https://minwontalk.netlify.app/",
    role: "개인 프로젝트 · 1인 개발",
    period: "",
    highlights: [],
  },
  {
    title: "효도 비서",
    description:
      "디지털 취약계층이 겪는 복잡한 예약 및 행정 서비스의 불편함을 해결하는 아이디어 프로젝트입니다. 채팅 인터페이스와 더미 데이터를 통해 기차 예매, 병원 예약 등의 핵심 프로세스를 단순화한 UX 모델을 구현했습니다.",
    technologies: ["React", "TypeScript", "AI", "Chat Interface"],
    image: "/hyodo.png",
    github: "https://github.com/kimsoonil/hyodoSecretary",
    demo: "https://hyodosecretary.netlify.app/",
    role: "개인 프로젝트 · 1인 개발",
    period: "",
    highlights: [],
  },
  {
    title: "펫토리 (Petory)",
    description:
      "파편화된 반려동물 건강 및 산책 정보를 한눈에 관리하고자 하는 아이디어 프로젝트입니다. 더미 데이터를 활용해 활동량 시각화 대시보드와 생애 주기별 케어 프로세스를 구현하여 통합 관리 솔루션의 가능성을 보여줍니다.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
    ],
    image: "/petory.png",
    github: "https://github.com/kimsoonil/Petory",
    demo: "https://petory.netlify.app/",
    role: "개인 프로젝트 · 1인 개발",
    period: "",
    highlights: [],
  },
  {
    title: "가방똑똑 (BagKnock)",
    description:
      "학교 알림장·급식·시간표가 분산된 학부모의 불편함을 해결하는 아이디어 프로젝트입니다. NEIS Open API와 더미 데이터를 활용해 여러 자녀 정보 통합 및 준비물 자동 추출 기능의 동작 방식을 구현했습니다.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "NEIS Open API",
    ],
    image: "/bagknock.png",
    github: "https://github.com/kimsoonil/BagKnock",
    demo: "https://bagknock.netlify.app/",
    role: "개인 프로젝트 · 1인 개발",
    period: "",
    highlights: [],
  },
];
