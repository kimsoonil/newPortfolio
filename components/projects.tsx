"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Users, Calendar } from "lucide-react";
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
    title: "파츠핏 (PartsFit)",
    description:
      "차량 중고부품 이커머스 솔루션. 소유자명과 차량번호만 입력하면 맞춤 부품을 빠르게 찾을 수 있는 서비스입니다. 전용 부품과 호환 부품을 구분하여 제공하며, 다양한 차량 브랜드의 부품을 한 곳에서 구매할 수 있습니다.",
    technologies: ["카페24", "GA", "SEO", "E-commerce"],
    image: "/partsfit.png",
    github: "",
    demo: "https://partsfit.co.kr/",
    teamSize: 4,
    period: "2025.03 ~ 2025.05",
    role: "GA 작업 및 SEO 최적화, 카페24 쇼핑몰 구축",
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
              <div className="relative h-48 bg-gradient-to-br from-indigo-100 via-purple-100 to-cyan-100 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-cyan-950/30 overflow-hidden group-hover:from-indigo-200 group-hover:via-purple-200 group-hover:to-cyan-200 dark:group-hover:from-indigo-900/40 dark:group-hover:via-purple-900/40 dark:group-hover:to-cyan-900/40 transition-all">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-foreground/40 text-sm">프로젝트 이미지</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  {project.teamSize && (
                    <div className="flex items-center gap-1.5 text-sm text-foreground/60">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize}명</span>
                    </div>
                  )}
                </div>
                {project.period && (
                  <div className="flex items-center gap-1.5 text-sm text-foreground/60 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                )}
                {project.role && (
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3 font-medium">
                    역할: {project.role}
                  </p>
                )}
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

