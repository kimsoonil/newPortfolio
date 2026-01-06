"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-cyan-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">SKILLS</h2>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            다양한 프로젝트를 통해 쌓아온 기술 역량입니다.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-indigo-200/50 dark:border-indigo-800/50"
          >
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image
                        src={category.icon}
                        alt={category.category}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className={`${skill.color} text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

