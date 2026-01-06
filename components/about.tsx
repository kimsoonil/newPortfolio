"use client";

import { motion } from "framer-motion";
import { Code, Users, Zap, Target, Heart, Lightbulb, GitBranch } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "코드 리뷰 문화",
    description: "다양한 개발자와 코드에 대해 의논하는 것을 좋아하며, 더 좋은 코드가 있으면 적극적으로 수용하고 리팩토링합니다. 서로의 코드를 공유하고 자신의 코드를 이야기하는 코드 리뷰 문화를 지향합니다.",
  },
  {
    icon: Zap,
    title: "AI 도구 활용",
    description: "Cursor 에디터를 활용하여 코드 작성 속도를 크게 향상시키고, CLI 환경에서도 AI 도구를 접목시켜 반복적인 작업을 자동화합니다. 확보된 시간을 코드 리뷰와 문서화 작업에 투자하여 코드 품질과 유지보수성을 높입니다.",
  },
  {
    icon: Users,
    title: "멘토링 & 리더십",
    description: "프론트엔드 챕터를 리딩하며 팀의 기술 스택 선정과 코드 컨벤션을 주도했습니다. 주니어 개발자들의 멘토링을 담당하며 코드 리뷰와 페어 프로그래밍을 통해 팀 전체 역량 향상에 기여했습니다.",
  },
  {
    icon: Target,
    title: "테스트 문화",
    description: "프로젝트 안정성과 유지보수성을 높이기 위해 VITest를 활용한 단위테스트와 React Testing Library를 활용한 통합테스트 코드 작성을 도입했습니다. 기능 개발 단계에서 발생할 수 있는 버그를 조기에 발견하고, 리팩토링 과정에서의 회귀 오류를 방지합니다.",
  },
  {
    icon: GitBranch,
    title: "체계적인 개발 문화",
    description: "데일리 스크럼을 통해 팀원들과 진행 상황을 공유하고, 스프린트 플래닝과 회고를 통해 팀의 강점은 더욱 강화하고 개선점은 신속하게 수정하는 프로세스를 정착시켰습니다. Jira를 활용한 투명한 업무 관리 시스템을 구축했습니다.",
  },
  {
    icon: Heart,
    title: "개발 철학",
    description: "다양한 개발자와 다양한 개발습관, 다양한 코드가 있다고 생각합니다. 동료들과 코드에 대해 의논하고, 다른 개발자가 사용한 코드를 써보고, 더 좋은 코드가 있으면 적극적으로 수용하며 제가 경험해봤던 코드들을 이야기하며 개발습관 등을 추천해줍니다.",
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
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-lg text-foreground/70">
              프론트엔드 챕터를 리딩하며 기술 표준 확립과 팀 역량 강화에 집중해온 리더입니다. 
              팀의 기술 스택 선정과 코드 컨벤션을 주도했고, 다양한 개발 문화를 포용하며 
              동료들과 건설적인 코드 리뷰를 통해 코드 품질을 일관되게 유지했습니다.
            </p>
            <p className="text-base text-foreground/60">
              주니어 개발자들의 멘토링과 페어 프로그래밍을 통해 팀 전체 역량 향상에 실질적으로 기여했습니다. 
              프로젝트 안정성을 위해 VITest와 React Testing Library 기반의 테스트 코드 작성 문화를 정착시켰으며, 
              프론트엔드 아키텍처 설계와 성능 최적화를 주도하여 사용자 경험을 개선했습니다.
            </p>
            <p className="text-base text-foreground/60">
              특히, Cursor 등 AI 도구를 개발 프로세스에 적극 도입하여 반복 작업을 자동화하고, 
              확보된 시간을 코드 리뷰 및 문서화에 재투자하며 생산성과 품질 두 마리 토끼를 모두 잡았습니다.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

