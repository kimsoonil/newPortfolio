"use client";

import { motion } from "framer-motion";
import { Code, Users, Zap, Target } from "lucide-react";

const features = [
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

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">ABOUT</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            프론트엔드 챕터를 리딩하며 기술 표준 확립과 팀 역량 강화에 집중해온 리더입니다. 
            팀의 기술 스택 선정과 코드 컨벤션을 주도했고, 다양한 개발 문화를 포용하며 
            동료들과 건설적인 코드 리뷰를 통해 코드 품질을 일관되게 유지했습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-lg border border-indigo-200/50 dark:border-indigo-800/50 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10"
              >
                <Icon className="w-8 h-8 mb-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

