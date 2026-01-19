"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/20 dark:border-primary/40 bg-linear-to-r from-slate-50/30 via-slate-100/30 to-slate-50/30 dark:from-slate-950/10 dark:via-slate-900/10 dark:to-slate-950/10">
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
              className="text-primary/70 dark:text-primary-light/70 hover:text-primary dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:rlatnsdlf158@naver.com"
              className="text-primary/70 dark:text-primary-light/70 hover:text-primary dark:hover:text-primary transition-colors"
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

