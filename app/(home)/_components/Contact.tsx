"use client";

import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            CONTACT
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            프로젝트나 협업에 관심이 있으시다면 언제든지 연락주세요.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:rlatnsdlf158@naver.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-lg border border-primary/20 dark:border-primary/40 bg-linear-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/20 dark:to-slate-800/20 hover:border-primary transition-all group"
            >
              <div className="flex items-center gap-4 mb-2">
                <Mail className="w-6 h-6 text-primary dark:text-primary-light group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">이메일</h3>
              </div>
              <p className="text-primary/80 dark:text-primary-light/80 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">
                rlatnsdlf158@naver.com
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/kimsoonil"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg border border-foreground/10 bg-foreground/5 hover:border-foreground/20 hover:bg-foreground/10 transition-all group"
            >
              <div className="flex items-center gap-4 mb-2">
                <Github className="w-6 h-6 text-primary dark:text-primary-light group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">GitHub</h3>
              </div>
              <p className="text-primary/80 dark:text-primary-light/80 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">
                github.com/kimsoonil
              </p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

