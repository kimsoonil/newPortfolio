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
    description:
      "Cursor 등 AI 도구를 적극 도입하여 개발 생산성 2배 이상 향상",
  },
  {
    icon: Users,
    title: "멘토링 & 리더십",
    description:
      "주니어 개발자 성장을 지원하며 팀 역량 30% 향상 및 협업 강화",
  },
  {
    icon: Target,
    title: "테스트 문화",
    description:
      "VITest 기반 테스트 코드로 버그 발생률 40% 감소 및 코드 안정성 확보",
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
      "프론트엔드 개발 및 유지보수",
      "사용자 경험 개선을 위한 UI/UX 개선 작업",
      "성능 최적화 및 코드 품질 향상",
    ],
  },
  {
    company: "포지큐브 (Posicube)",
    position: "프론트엔드 개발자",
    period: "2019.04 - 2020.11",
    description: [
      "AI 장비 관리 시스템 프론트엔드 개발",
      "어드민 콘솔 UI/UX 개발 및 최적화",
      "AI 훈련 기능 관련 프론트엔드 개발",
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
      "복잡한 공공 행정 정보를 AI 자연어 처리(NLP)로 즉시 응답하는 서비스입니다. 기존의 복잡한 검색 방식 대신 대화형 인터페이스를 통해 정보 접근성을 개선하고, 가상 브라우저 보안 기술로 개인정보 노출 위험을 제로화했습니다.",
    technologies: ["React", "TypeScript", "AI", "Natural Language Processing"],
    image: "/minwontalk.png",
    github: "https://github.com/kimsoonil/MinwonTalk",
    demo: "https://minwontalk.netlify.app/",
    teamSize: 1,
  },
  {
    title: "효도 비서",
    description:
      "디지털 취약계층인 중장년층을 위한 AI 대시보드 서비스입니다. 복잡한 UI 대신 채팅 인터페이스와 음성 인식을 활용하여 기차 예매, 병원 예약 등 실생활 필수 업무를 자동화함으로써 사용자 이탈률을 획기적으로 낮췄습니다.",
    technologies: ["React", "TypeScript", "AI", "Chat Interface"],
    image: "/hyodo.png",
    github: "https://github.com/kimsoonil/hyodoSecretary",
    demo: "https://hyodosecretary.netlify.app/",
    teamSize: 1,
  },
  {
    title: "펫토리 (Petory)",
    description:
      "반려동물 생동 데이터 시각화 라이프 케어 솔루션입니다. Recharts를 활용하여 산책량, 식사량 등 방대한 데이터를 직관적인 그래프로 제공하며, 사용자 경험 중심의 UI/UX 설계로 일간 활성 사용자(DAU) 성장을 경험했습니다.",
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
      "NEIS Open API 기반 초등 학부모 정보 자동화 솔루션입니다. 여러 명의 자녀 정보를 수집하여 알림장 핵심 키워드(준비물, 숙제)를 AI로 추출하고 자동화된 리마인더를 제공함으로써 학부모 업무 효율을 2배 이상 개선했습니다.",
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
