"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Users } from "lucide-react";
import Image from "next/image";

const projects = [
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">PROJECTS</h2>
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
              className="group rounded-lg border border-primary/20 dark:border-primary/40 overflow-hidden hover:border-primary transition-all bg-background hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/5"
            >
              <div className="h-48 bg-linear-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900/30 dark:via-slate-800/30 dark:to-slate-900/30 flex items-center justify-center group-hover:from-slate-200 group-hover:via-slate-100 group-hover:to-slate-200 dark:group-hover:from-slate-800/40 dark:group-hover:via-slate-700/40 dark:group-hover:to-slate-800/40 transition-all relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <span className="text-foreground/40 text-sm">프로젝트 이미지</span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-semibold leading-tight whitespace-pre-line">
                    {project.title}
                  </h3>
                  {project.teamSize && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      <Users className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{project.teamSize}명</span>
                    </div>
                  )}
                </div>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light border border-primary/20 dark:border-primary/40"
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
                      className="flex items-center gap-2 text-sm text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors font-medium"
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
                      className="flex items-center gap-2 text-sm text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors font-medium"
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

