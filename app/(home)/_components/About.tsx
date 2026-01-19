"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/app/(home)/_constants";

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ABOUT
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            프론트엔드 챕터를 리딩하며 기술 표준 확립과 팀 역량 강화에 집중해온 리더입니다. 팀의
            기술 스택 선정과 코드 컨벤션을 주도했고, 다양한 개발 문화를 포용하며 동료들과 건설적인
            코드 리뷰를 통해 코드 품질을 일관되게 유지했습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-lg border border-primary/20 dark:border-primary/40 hover:border-primary transition-all bg-linear-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/20 dark:to-slate-800/20 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/5"
              >
                <Icon className="w-8 h-8 mb-4 text-primary dark:text-primary-light" />
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

