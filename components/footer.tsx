"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-indigo-200/50 dark:border-indigo-800/50 bg-gradient-to-r from-indigo-50/30 via-purple-50/30 to-cyan-50/30 dark:from-indigo-950/10 dark:via-purple-950/10 dark:to-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/kimsoonil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600/70 dark:text-indigo-400/70 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:rlatnsdlf158@naver.com"
              className="text-indigo-600/70 dark:text-indigo-400/70 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

