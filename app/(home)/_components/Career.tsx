"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { EXPERIENCES } from "@/app/(home)/_constants";

export default function Career() {
  return (
    <section id="career" className="py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            CAREER
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            다양한 프로젝트와 회사에서의 경험을 소개합니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-start pt-2">
                  <div className="w-4 h-4 rounded-full bg-linear-to-br from-primary to-secondary border-4 border-background z-10 shadow-lg shadow-primary/30" />
                </div>

                <div className="flex-1 p-6 rounded-lg border border-primary/20 dark:border-primary/40 bg-linear-to-br from-slate-50/30 to-slate-100/30 dark:from-slate-900/10 dark:to-slate-800/10 hover:border-primary transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{experience.company}</h3>
                      <p className="text-lg text-foreground/70">{experience.position}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-foreground/70">
                        <span className="text-foreground flex-shrink-0 mt-0.5">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

