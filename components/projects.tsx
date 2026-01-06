"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "민원똑똑",
    description:
      "AI를 활용한 대화형 민원 창구 서비스. 자연어 처리 기술을 통해 복잡한 민원 질문에도 정확하게 답변하고, 무설치 간편 인증과 가상 브라우저 보안 기술로 개인정보를 안전하게 보호합니다.",
    technologies: ["React", "TypeScript", "AI", "Natural Language Processing"],
    image: "/project-minwontalk.jpg",
    github: "https://github.com/kimsoonil/MinwonTalk",
    demo: "https://minwontalk.netlify.app/",
  },
  {
    title: "따박따박",
    description:
      "미국 주식 실시간 정보 제공 Flutter 모바일 앱. 실시간 미국 주가 정보 제공(주가·차트·뉴스·커뮤니티) 및 Email 및 SNS 연동 로그인·회원가입 개발. MobX 상태관리 도입으로 상태 구조 단순화 및 유지보수성 향상.",
    technologies: ["Flutter", "Dart", "MobX"],
    image: "/project-tabak.jpg",
    github: "",
    demo: "",
  },
  {
    title: "포지큐브 어드민 콘솔",
    description:
      "AI 장비 관리·훈련 기능 고도화 관리자 시스템. AI 장비 추가/수정/삭제, 위치 정보, 활성화 여부, 기기 정보 등 종합 관리 기능 개발. 클라이언트 단에서 AI 훈련을 수행할 수 있도록 UI/UX 재구성.",
    technologies: ["HTML", "SCSS", "JavaScript"],
    image: "/project-posicube.jpg",
    github: "",
    demo: "",
  },
  {
    title: "로비스토어",
    description:
      "온라인·전화 예약 통합 관리 서비스 개발. 예약 기능(온라인·전화), 캘린더 기반 예약 현황 표시 기능 구현. 직원 관리(등록/권한/휴가), 점포 관리 등 운영용 기능 개발. Electron 기반 클라이언트 앱 형태로 배포.",
    technologies: ["React", "SCSS", "FullCalendar", "Electron"],
    image: "/project-lobistore.jpg",
    github: "",
    demo: "",
  },
  {
    title: "로비T 어드민 콘솔",
    description:
      "콜센터 응답·AI 훈련 메시지 관리 시스템. 콜센터 자동응답 시스템의 응답 메시지·에러 메시지 관리 기능 개발. AI 응답 학습 데이터를 관리하고 훈련을 수행하는 기능 구현. 전역 상태 + 지역 상태를 나누어 구조화하여 상태 흐름 일관성 확보.",
    technologies: ["React", "SCSS", "Redux", "MUI"],
    image: "/project-lobit.jpg",
    github: "",
    demo: "",
  },
  {
    title: "대명리조트",
    description:
      "스키락카 예약 및 결제 시스템 리뉴얼. 기존 레거시 기반 프로젝트를 인수받아 전체 코드 리팩토링 진행. 코드량 약 50% 감소, 가독성과 유지보수성 대폭 향상. 예약·상품구매·카드 등록·간편 결제·SNS 로그인 등 핵심 기능 개발.",
    technologies: ["Java", "Spring", "JSP", "CSS", "Oracle"],
    image: "/project-daemyung.jpg",
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">PROJECTS</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            다양한 도메인에서의 프로젝트 경험을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-lg border border-indigo-200/50 dark:border-indigo-800/50 overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-600 transition-all bg-background hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-100 via-purple-100 to-cyan-100 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-cyan-950/30 flex items-center justify-center group-hover:from-indigo-200 group-hover:via-purple-200 group-hover:to-cyan-200 dark:group-hover:from-indigo-900/40 dark:group-hover:via-purple-900/40 dark:group-hover:to-cyan-900/40 transition-all">
                <span className="text-foreground/40 text-sm">프로젝트 이미지</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4" />
                      코드 보기
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      데모 보기
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

