"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

/**
 * 현재 년월을 YYYY.MM 형식으로 반환하는 함수
 */
const getCurrentYearMonth = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}.${month}`;
};

const experiences = [
  {
    company: "어메스 (Ames)",
    position: "프론트엔드 챕터 리더",
    period: `2023.09~ ${getCurrentYearMonth()}`,
    description: [
      "프론트엔드 챕터 리딩 및 팀의 기술 스택 선정과 코드 컨벤션 주도",
      "주니어 개발자 멘토링 및 페어 프로그래밍을 통한 팀 역량 향상",
      "VITest와 React Testing Library 기반의 테스트 코드 작성 문화 정착",
      "프론트엔드 아키텍처 설계와 성능 최적화를 주도하여 사용자 경험 개선",
      "Cursor 등 AI 도구를 개발 프로세스에 적극 도입하여 생산성 향상",
      "Daily Scrum, 회고 등 체계적인 애자일 문화 정착 및 Jira를 활용한 투명한 업무 관리 시스템 구축",
      "채용 프로세스 참여 및 기술 인터뷰 진행",
    ],
  },
  {
    company: "아이디어스 (Ideas)",
    position: "프론트엔드 개발자",
    period: "2022.04 - 2023.04",
    description: [
      "프론트엔드 개발 및 유지보수",
      "사용자 경험 개선을 위한 UI/UX 개선 작업",
      "성능 최적화 및 코드 품질 향상",
    ],
  },
  {
    company: "스냅태그 (Snaptag)",
    position: "프론트엔드 개발자",
    period: "2021.11 - 2022.04",
    description: [
      "프론트엔드 개발 및 유지보수",
      "사용자 경험 개선을 위한 UI/UX 개선 작업",
      "성능 최적화 및 코드 품질 향상",
    ],
  },
  {
    company: "포지큐브 (Posicube)",
    position: "프론트엔드 개발자",
    period: "2019.04 - 2020.11",
    description: [
      "AI 장비 관리 시스템 프론트엔드 개발",
      "어드민 콘솔 UI/UX 개발 및 최적화",
      "AI 훈련 기능 관련 프론트엔드 개발",
    ],
  },
  {
    company: "CMESOFT",
    position: "프론트엔드 개발자",
    period: "2018.07 - 2019.03",
    description: [
      "웹에이전시 및 코인거래소 외주 프로젝트 개발",
      "대명리조트 스키락카 예약 및 결제 시스템 리뉴얼",
      "코인 거래소 실시간 시세/호가/거래 기능 개발 및 성능 개선",
      "다수의 중소 거래소 외주 프로젝트를 병행하며 공통 모듈 구조화",
    ],
  },
];

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">CAREER</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            다양한 프로젝트와 회사에서의 경험을 소개합니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
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
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-background z-10 shadow-lg shadow-indigo-500/50" />
                </div>

                <div className="flex-1 p-6 rounded-lg border border-indigo-200/50 dark:border-indigo-800/50 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 dark:from-indigo-950/10 dark:to-purple-950/10 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 transition-all">
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
                        <span className="text-foreground mt-1.5">•</span>
                        <span>{item}</span>
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

