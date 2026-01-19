"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Users } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/app/(home)/_constants";

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            PROJECTS
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            다양한 도메인에서의 프로젝트 경험을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
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

