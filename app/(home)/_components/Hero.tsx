"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950/20 dark:via-slate-900/20 dark:to-slate-950/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/30 dark:border-primary-light/30 shadow-xl shadow-primary/20 dark:shadow-primary-light/20">
                <Image
                  src="/profile.jpg"
                  alt="kimsunil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              kimsunil
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-foreground/70 mb-4 max-w-2xl mx-auto"
            >
              프론트엔드 리더십 및 기술 혁신을 주도하는 개발자
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto"
            >
              프론트엔드 챕터를 리딩하며 기술 표준 확립과 팀 역량 강화에 집중합니다.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="https://github.com/kimsoonil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white hover:from-primary-dark hover:to-primary transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
            <motion.a
              href="https://k-soonil.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 dark:border-primary-light/30 hover:border-primary/50 dark:hover:border-primary-light/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all hover:shadow-md hover:shadow-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Blog
            </motion.a>
            <motion.a
              href="https://www.notion.so/Soonil-Kim-8b0de4d95bfe40db8e725e980cca5fdb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 dark:border-primary-light/30 hover:border-primary/50 dark:hover:border-primary-light/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all hover:shadow-md hover:shadow-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">📝</span>
              Notion
            </motion.a>
            <motion.a
              href="mailto:rlatnsdlf158@naver.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 dark:border-primary-light/30 hover:border-primary/50 dark:hover:border-primary-light/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all hover:shadow-md hover:shadow-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email
            </motion.a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={scrollToNext}
            className="mx-auto flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            whileHover={{ y: 5 }}
          >
            <span className="text-sm">더 알아보기</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

