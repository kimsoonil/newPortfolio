import { Code, Users, Zap, Target } from "lucide-react";
import {
  Project,
  Experience,
  SkillCategory,
  Feature,
  NavItem,
} from "@/app/(home)/_types";

/**
 * 네비게이션 아이템 상수
 */
export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Career", href: "#career" },
  { name: "Contact", href: "#contact" },
];

/**
 * 핵심 역량(About) 상수
 */
export const FEATURES: Feature[] = [
  {
    icon: Code,
    title: "코드 리뷰 문화",
    description: "건설적인 리뷰를 통한 코드 품질 유지 및 리뷰 루프 50% 단축",
  },
  {
    icon: Zap,
    title: "AI 도구 활용",
    description: "Cursor AI 도입으로 주간 티켓 처리량 35% 증가, 코드 리뷰 루프 50% 단축",
  },
  {
    icon: Users,
    title: "멘토링 & 리더십",
    description: "주니어 멘토링·페어 프로그래밍 주도 및 채용 기술 인터뷰 10건 이상 진행",
  },
  {
    icon: Target,
    title: "테스트 문화",
    description: "Vitest·RTL 기반 단위·통합 테스트 도입으로 기능 개발 단계 회귀 오류 방지 체계 구축",
  },
];

/**
 * 현재 년월을 YYYY.MM 형식으로 반환하는 헬퍼 (Career에서 사용)
 */
const getCurrentYearMonth = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}.${month}`;
};

/**
 * 경력 사항(Career) 상수
 */
export const EXPERIENCES: Experience[] = [
  {
    company: "어메스 (Ames)",
    position: "프론트엔드 챕터 리더",
    period: `2023.09~ ${getCurrentYearMonth()}`,
    description: [
      "프론트엔드 챕터 리딩 및 기술 스택 선정과 코드 컨벤션 주도",
      "신규 페이지 개발 속도 2배 향상 및 티켓 처리량 35% 증가 달성",
      "코드 리뷰 루프 50% 단축을 위한 자동화 스크립트 및 가이드 배포",
      "VITest와 React Testing Library 기반의 테스트 코드 작성 문화 정착",
      "AI 도구(Cursor)를 적극 도입하여 팀 전반의 개발 생산성 극대화",
      "Daily Scrum, Jira를 활용한 투명한 업무 관리 시스템 구축",
    ],
  },
  {
    company: "아이디스트 (IDist)",
    position: "프론트엔드 개발 팀장",
    period: "2022.04 - 2023.04",
    description: [
      "외주 프로젝트 요구사항 정의 및 외주 계약 협의 후 개발 총괄",
      "공통 모듈 구조화 및 컴포넌트 재사용으로 기존 대비 코드량 50% 감소",
      "프론트엔드 팀 리드 및 일정 관리로 100% 프로젝트 기한 준수",
      "채용 프로세스 참여 및 10건 이상의 기술 인터뷰 진행 및 피드백 제공",
      "성능 최적화 및 렌더링 성능 40% 개선 (Lighthouse 기준)",
    ],
  },
  {
    company: "스냅태그 (Snaptag)",
    position: "프론트엔드 개발자",
    period: "2021.11 - 2022.04",
    description: [
      "PDF 업로드 후 드래그·사이즈조절·선택 도구로 영역 지정하는 스냅태그 적용 웹 프로그램 개발",
      "react-konva·zwibbler·react-cropper 라이브러리 비교·테스트 후 최적 솔루션 선정 적용",
      "편집 도구 성능·렌더링 속도 개선으로 사용자 조작성 향상",
      "Redux-saga 기반 비동기 처리 구조 개선으로 안정성 강화",
      "NFT 실시간 거래 플랫폼(랩툰) 데이터 시각화 UI 및 실시간 차트 반응성 강화",
    ],
  },
  {
    company: "포지큐브 (Posicube)",
    position: "프론트엔드 개발자",
    period: "2019.04 - 2020.11",
    description: [
      "기존 'AI 정보 단순 조회'만 가능하던 콘솔에서 AI 훈련·에러 로그·기기 정보 관리 기능까지 확장",
      "클라이언트 단에서 AI 훈련 수행 가능하도록 UI/UX 재구성, 운영 효율 향상",
      "온라인·전화 예약 통합 관리 서비스(로비스토어) 개발 — 애자일 기반 스프린트, 요구사항 정의부터 리팩토링까지 참여",
      "Electron 기반 클라이언트 앱 배포 경험",
      "Flutter/MobX 기반 미국 주식 실시간 정보 앱(따박따박) 개발 — SNS 5종 로그인, 실시간 차트 구현",
    ],
  },
  {
    company: "CMESOFT",
    position: "프론트엔드 개발자",
    period: "2018.07 - 2019.03",
    description: [
      "웹에이전시 및 코인거래소 외주 프로젝트 개발",
      "대명리조트 스키락카 예약 및 결제 시스템 리뉴얼",
      "코인 거래소 실시간 시세/호가/거래 기능 개발 및 성능 개선",
      "다수의 중소 거래소 외주 프로젝트를 병행하며 공통 모듈 구조화",
    ],
  },
];

/**
 * 기술 스택(Skills) 상수
 */
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
      { name: "Next.js / React", color: "bg-gray-900 dark:bg-gray-800" },
      { name: "TypeScript", color: "bg-blue-500" },
      { name: "Zustand", color: "bg-gray-700 dark:bg-gray-600" },
      { name: "React Query", color: "bg-red-500" },
      { name: "Apollo Client", color: "bg-purple-700" },
      { name: "Tailwind CSS", color: "bg-cyan-400" },
      { name: "Emotion", color: "bg-pink-600" },
      { name: "Vite", color: "bg-purple-500" },
      { name: "Flutter", color: "bg-blue-400" },
    ],
  },
  {
    category: "DevOps",
    icon: "/dev-ops.svg",
    skills: [
      { name: "Docker", color: "bg-blue-500" },
      { name: "Vercel", color: "bg-gray-900 dark:bg-gray-800" },
      { name: "GitHub Actions", color: "bg-gray-800 dark:bg-gray-700" },
      { name: "CI/CD", color: "bg-green-600" },
      { name: "AWS", color: "bg-orange-500" },
      { name: "Git", color: "bg-orange-600" },
    ],
  },
];

/**
 * 프로젝트(Projects) 상수
 */
export const PROJECTS: Project[] = [
  {
    title: "파츠핏 (Partsfit) 쇼핑몰",
    description:
      "자동차 튜닝 부품 이커머스 서비스의 신규 서비스 기획부터 출시까지 프론트엔드 개발을 총괄했습니다. 5,000종 이상의 상품 데이터 처리를 위한 검색 필터 고도화 및 SEO 최적화를 통해 사이트 유입률을 200% 이상 증대시켰습니다.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "SEO Support",
    ],
    image: "/partsfit.png",
    demo: "https://partsfit.co.kr",
  },
  {
    title: "민원똑똑",
    description:
      "정부 민원 사이트의 복잡한 검색 UI를 개선하는 아이디어 프로젝트입니다. 실제 크롤링 대신 더미 데이터로 AI 자연어 처리 기반 대화형 민원 응답 흐름을 구현하고 UX 개선 방향을 검증했습니다.",
    technologies: ["React", "TypeScript", "AI", "Natural Language Processing"],
    image: "/minwontalk.png",
    github: "https://github.com/kimsoonil/MinwonTalk",
    demo: "https://minwontalk.netlify.app/",
    teamSize: 1,
  },
  {
    title: "효도 비서",
    description:
      "디지털 취약계층이 겪는 복잡한 예약 및 행정 서비스의 불편함을 해결하는 아이디어 프로젝트입니다. 채팅 인터페이스와 더미 데이터를 통해 기차 예매, 병원 예약 등의 핵심 프로세스를 단순화한 UX 모델을 구현했습니다.",
    technologies: ["React", "TypeScript", "AI", "Chat Interface"],
    image: "/hyodo.png",
    github: "https://github.com/kimsoonil/hyodoSecretary",
    demo: "https://hyodosecretary.netlify.app/",
    teamSize: 1,
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
    teamSize: 1,
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
    teamSize: 1,
  },
];
