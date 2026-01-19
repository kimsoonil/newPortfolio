import { Code, Users, Zap, Target } from "lucide-react";
import { Project, Experience, SkillCategory, Feature, NavItem } from "@/app/(home)/_types";

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
    description: "동료들과 건설적인 코드 리뷰를 통해 코드 품질을 일관되게 유지",
  },
  {
    icon: Zap,
    title: "AI 도구 활용",
    description: "Cursor 등 AI 도구를 개발 프로세스에 적극 도입하여 생산성 향상",
  },
  {
    icon: Users,
    title: "멘토링 & 리더십",
    description: "주니어 개발자들의 멘토링과 페어 프로그래밍을 통한 팀 역량 향상",
  },
  {
    icon: Target,
    title: "테스트 문화",
    description: "VITest와 React Testing Library 기반의 테스트 코드 작성 문화 정착",
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
      "프론트엔드 챕터 리딩 및 팀의 기술 스택 선정과 코드 컨벤션 주도",
      "주니어 개발자 멘토링 및 페어 프로그래밍을 통한 팀 역량 향상",
      "VITest와 React Testing Library 기반의 테스트 코드 작성 문화 정착",
      "프론트엔드 아키텍처 설계와 성능 최적화를 주도하여 사용자 경험 개선",
      "Cursor 등 AI 도구를 개발 프로세스에 적극 도입하여 생산성 향상",
      "Daily Scrum, 회고 등 체계적인 애자일 문화 정착 및 Jira를 활용한 투명한 업무 관리 시스템 구축",
    ],
  },
  {
    company: "아이디어스 (Ideas)",
    position: "프론트엔드 개발 팀장",
    period: "2022.04 - 2023.04",
    description: [
      "외주 개발 계약 체결 후 현장에서 프로젝트 요구사항 정의 및 외주 계약 협의 후 개발 착수",
      "프론트엔드 개발팀장으로 첫 진행 및 일정 관리로 계약 성사에 기여",
      "공통창업 진행내용 및 프론트엔드 개발 전반 관리",
      "다양한 아이디어 회의 진행 후 프로젝트 개발",
      "채용 프로세스 참여 및 기술 인터뷰 진행",
      "성능 최적화 및 코드 품질 향상",
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
      { name: "Zustand", color: "bg-gray-700 dark:bg-gray-600" },
      { name: "Recoil", color: "bg-blue-500" },
      { name: "React Query", color: "bg-red-500" },
      { name: "TanStack Query", color: "bg-red-600" },
      { name: "Apollo Client", color: "bg-purple-700" },
      { name: "React Hook Form", color: "bg-gray-900 dark:bg-gray-800" },
      { name: "Sass", color: "bg-pink-500" },
      { name: "Tailwind CSS", color: "bg-cyan-400" },
      { name: "Emotion", color: "bg-pink-600" },
      { name: "Vite", color: "bg-purple-500" },
      { name: "Vue.js", color: "bg-green-500" },
      { name: "React Native", color: "bg-blue-600" },
      { name: "Flutter", color: "bg-blue-400" },
    ],
  },
  {
    category: "DevOps",
    icon: "/dev-ops.svg",
    skills: [
      { name: "Docker", color: "bg-blue-500" },
      { name: "Vercel", color: "bg-gray-900 dark:bg-gray-800" },
      { name: "Git", color: "bg-orange-600" },
      { name: "AWS", color: "bg-orange-500" },
    ],
  },
];

/**
 * 프로젝트(Projects) 상수
 */
export const PROJECTS: Project[] = [
  {
    title: "민원똑똑",
    description:
      "AI를 활용한 대화형 민원 창구 서비스. 자연어 처리 기술을 통해 복잡한 민원 질문에도 정확하게 답변하고, 무설치 간편 인증과 가상 브라우저 보안 기술로 개인정보를 안전하게 보호합니다.",
    technologies: ["React", "TypeScript", "AI", "Natural Language Processing"],
    image: "/minwontalk.png",
    github: "https://github.com/kimsoonil/MinwonTalk",
    demo: "https://minwontalk.netlify.app/",
    teamSize: 1,
  },
  {
    title: "효도 비서",
    description:
      "어르신들을 위한 특별한 디지털 어시스턴트 서비스. 복잡한 앱 설치나 조작 없이, 간단한 채팅만으로 모든 일을 처리할 수 있습니다. 기차/버스 예매, 병원 진료 예약, 장보기 서비스, 맛집/식당 예약, 행정 업무 지원 등 일상생활에 필요한 모든 서비스를 한 곳에서 이용할 수 있습니다.",
    technologies: ["React", "TypeScript", "AI", "Chat Interface"],
    image: "/hyodo.png",
    github: "https://github.com/kimsoonil/hyodoSecretary",
    demo: "https://hyodosecretary.netlify.app/",
    teamSize: 1,
  },
  {
    title: "고성능 물류 데이터 시각화 솔루션\n(Global Supply Chain)",
    description:
      "브라우저 성능 한계를 극복한 고성능 물류 데이터 시각화 솔루션. React의 선언적 렌더링과 Canvas API를 결합한 하이브리드 구조로 10,000개 이상의 실시간 물류 노드를 60FPS로 안정적으로 렌더링합니다. 비동기 청크 처리와 Zustand 선택적 구독을 통해 대용량 데이터 처리 시에도 UI 스레드 블로킹을 방지합니다.",
    technologies: ["React", "TypeScript", "Canvas API", "Zustand", "Performance Optimization"],
    image: "/gscrmd.png",
    github: "https://github.com/kimsoonil/gscrmd",
    demo: "https://gscrmd.netlify.app/",
    teamSize: 1,
  },
];

