import Image from "next/image";
import CoreErpStack from "./_components/CoreErpStack";
import SectionNavigation from "./_components/SectionNavigation";
import Link from "next/link";
import { CASE_STUDIES } from "./_constants/case-studies";
import { EXPERIENCES, PROJECTS } from "./_constants";

const descriptions = [
  "구매 발주·부분 입고·창고별 재고·판매 예약·출고·취소를 연결했습니다. Java·MyBatis·PostgreSQL 트랜잭션으로 수량을 맞추고, MUI 업무 화면과 4개 역할 권한·감사 로그를 구현했습니다. 일별 집계 배치의 중복 실행과 실패 재처리도 검증했습니다.",
  "지도 위에서 차량의 위치와 상태를 살펴보는 화면입니다. 모의 데이터를 사용하며, 많은 차량을 그릴 때의 렌더링과 클릭한 차량을 찾는 방식을 실험했습니다.",
  "필요한 민원과 서류를 검색하고 대화 형식으로 안내받는 프로토타입입니다. 정적 민원 데이터와 키워드별 모의 응답으로 화면 흐름을 구성했습니다.",
  "한국사 영웅을 모집하고 조합해 적을 막는 전략 게임입니다. 병력 배치, 영웅 성장, 전투 규칙과 함께 로그인 및 저장 기능을 만들었습니다.",
];
const notes = [
  "합성 상품 1만 개 · 테스트 117개 · CI 5개 작업 통과 / 운영 배포 전 · Docker 로컬 실행",
  "Canvas 배치 렌더링 · 좌표 변환 · 차량 선택 / 실제 물류 연동 없음",
  "민원 검색 · 서류 패키지 · 모의 채팅 / AI·본인 인증·서류 발급 미연동",
  "영웅 조합 · 전장 · 성장 · Supabase 저장 / 웹에서 플레이 가능",
];
export default function Home() {
  return <main className="portfolio" id="main-content"><a href="#projects" className="skip-link">프로젝트로 바로 이동</a>
    <header className="site-header"><a href="#home" className="wordmark">김순일</a><SectionNavigation /></header>
    <section id="home" className="intro">
      <div><p className="eyebrow">프론트엔드 개발자</p><h1>커머스와 운영 도구를 만드는<br />김순일입니다.</h1><p className="intro-copy">React · TypeScript · Next.js</p><p className="intro-detail">주문·배송·재고·반품처럼 여러 단계가 이어지는 업무를 화면으로 옮기는 일을 해왔습니다. 최근에는 개인 프로젝트 CoreERP에서 Java·SQL로 발주·입고·출고 흐름을 구현하고 재고 정합성과 장애 롤백을 검증했습니다.</p><div className="text-links"><a href="#projects">프로젝트 살펴보기</a><a href="https://github.com/kimsoonil" target="_blank" rel="noreferrer">GitHub</a><a href="https://k-soonil.tistory.com/" target="_blank" rel="noreferrer">기술 블로그</a><a href="mailto:rlatnsdlf158@naver.com">이메일</a></div></div>
      <Image src="/profile.jpg" alt="김순일" width={220} height={270} priority className="portrait" />
    </section>
    <section id="work" className="section work-overview"><div className="section-heading"><h2>업무에서 다룬 문제</h2><p>커머스·SCM·관리자 콘솔에서 맡았던 개발과 협업 경험입니다.</p></div><div className="work-columns"><div><h3>구매와 운영 흐름</h3><p>자사몰·B2B 커머스의 구매, 배송, 반품·환불·정산 화면과 SCM의 상품·재고·창고·계정 관리를 개발했습니다.</p></div><div><h3>화면 전환과 공통화</h3><p>KeystoneJS·Java/JSP 관리 화면을 React로 전환하고, Turborepo·pnpm 환경에서 공통 UI와 테스트를 다뤘습니다.</p></div><div><h3>개발 기준과 협업</h3><p>프론트엔드 챕터 리딩을 맡아 기술 스택·코드 컨벤션을 논의하고 코드 리뷰와 릴리스 관리에 참여했습니다.</p></div></div><a className="inline-link" href="#career">회사별 담당 업무 보기</a></section>
    <section id="projects" className="section"><div className="section-heading"><h2>개인 프로젝트</h2><p>실행 화면뿐 아니라 문제를 해결한 과정과 검증 내용을 함께 정리했습니다.</p></div>
      <div className="project-list">{PROJECTS.map((p, i) => <article className="project" key={p.title}>
        <Link className={i === 0 ? "project-image project-image--coreerp" : "project-image"} href={`/projects/${CASE_STUDIES[i].slug}`} aria-label={`${p.title} 상세 보기`}><Image src={p.image!} alt={`${p.title} 화면`} width={960} height={600} sizes="(max-width: 760px) 100vw, 44vw" /></Link>
        <div className="project-body"><p className="project-kind">{i === 0 ? "ERP·SCM · CoreERP MVP" : i === 2 ? "프로토타입" : i === 3 ? "웹 게임" : "기술 실험"}</p><h3><Link href={`/projects/${CASE_STUDIES[i].slug}`}>{p.title}</Link></h3><p>{descriptions[i]}</p><p className="project-note">{notes[i]}</p>{i === 0 ? <CoreErpStack/> : <p className="stack">{p.technologies.join(" · ")}</p>}<div className="project-actions"><Link className="case-link" href={`/projects/${CASE_STUDIES[i].slug}`}>상세 사례 보기</Link><div className="text-links">{p.github && <a href={p.github} target="_blank" rel="noreferrer">{i === 0 ? "공개 GitHub" : "소스 코드"}</a>}{p.demo && <a href={i === 0 ? p.demo + "connected" : p.demo} target="_blank" rel="noreferrer">{i === 0 ? "기존 배포본 (소유자 전용)" : i === 3 ? "게임 열기" : i === 1 ? "대시보드 열기" : "화면 보기"}</a>}</div></div></div>
      </article>)}</div>
    </section>
    <section id="career" className="section"><div className="section-heading"><h2>경력</h2><p>회사에서 맡았던 일입니다. 회사 소스와 비공개 자료는 공개하지 않습니다.</p></div><div>{EXPERIENCES.map(e => <article className="career-row" key={e.company}><div><p className="period">{e.period}</p><h3>{e.company}</h3><p className="position">{e.position}</p></div><ul>{e.description.map(d => <li key={d}>{d}</li>)}</ul></article>)}</div></section>
    <section id="skills" className="section skills-section"><h2>사용 기술</h2><dl><div><dt>주로 사용하는 기술</dt><dd>React, TypeScript, Next.js, Zustand, TanStack Query</dd></div><div><dt>테스트와 배포</dt><dd>Vitest, React Testing Library, Playwright, GitHub Actions</dd></div><div><dt>프로젝트에서 다룬 기술</dt><dd>Java, Spring Boot, MyBatis, SQL, PostgreSQL, Spring Security, Docker, Supabase, Canvas API, Flutter, Electron</dd></div></dl></section>
    <footer id="contact" className="contact"><h2>연락처</h2><a className="email" href="mailto:rlatnsdlf158@naver.com">rlatnsdlf158@naver.com</a><div className="text-links"><a href="https://github.com/kimsoonil" target="_blank" rel="noreferrer">GitHub</a><a href="https://k-soonil.tistory.com/" target="_blank" rel="noreferrer">블로그</a><a href="https://www.notion.so/Soonil-Kim-8b0de4d95bfe40db8e725e980cca5fdb" target="_blank" rel="noreferrer">Notion</a></div><p className="copyright">김순일 · 프론트엔드 개발자</p></footer>
  </main>;
}
