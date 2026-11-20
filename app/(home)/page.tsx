import Image from "next/image";
import { EXPERIENCES, PROJECTS } from "./_constants";

const descriptions = [
  "상품 등록부터 입출고, 주문, 반품, 매출 조회까지 한곳에서 처리하는 관리 도구입니다. 여러 품목을 한 번에 주문하고 일부만 반품할 수 있으며, 동시에 주문해도 재고가 맞도록 DB에서 처리합니다.",
  "지도 위에서 차량의 위치와 상태를 살펴보는 화면입니다. 모의 데이터를 사용하며, 많은 차량을 그릴 때의 렌더링과 클릭한 차량을 찾는 방식을 실험했습니다.",
  "필요한 민원과 서류를 검색하고 대화 형식으로 안내받는 프로토타입입니다. 정적 민원 데이터와 키워드별 모의 응답으로 화면 흐름을 구성했습니다.",
  "한국사 영웅을 모집하고 조합해 적을 막는 전략 게임입니다. 병력 배치, 영웅 성장, 전투 규칙과 함께 로그인 및 저장 기능을 만들었습니다.",
];
const notes = [
  "다품목 주문 · 부분 반품 · 기간별 매출 · 10만 건 상품 조회 / 소유자 전용",
  "Canvas 배치 렌더링 · 좌표 변환 · 차량 선택 / 실제 물류 연동 없음",
  "민원 검색 · 서류 패키지 · 모의 채팅 / AI·본인 인증·서류 발급 미연동",
  "영웅 조합 · 전장 · 성장 · Supabase 저장 / 웹에서 플레이 가능",
];
export default function Home() {
  return <main className="portfolio">
    <header className="site-header"><a href="#home" className="wordmark">김순일</a><nav aria-label="주 메뉴"><a href="#projects">프로젝트</a><a href="#career">경력</a><a href="#contact">연락처</a></nav></header>
    <section id="home" className="intro">
      <div><p className="eyebrow">프론트엔드 개발자</p><h1>안녕하세요.<br />김순일입니다.</h1><p className="intro-copy">커머스와 운영 관리 화면을 개발해 왔습니다.<br className="desktop-break" /> React와 TypeScript를 주로 사용합니다.</p><p className="intro-detail">주문·배송·재고·반품처럼 여러 단계가 이어지는 업무를 화면으로 옮기는 일을 해왔습니다. 최근에는 개인 프로젝트로 ERP를 만들며 재고 처리와 테스트까지 다루고 있습니다.</p><div className="text-links"><a href="https://github.com/kimsoonil" target="_blank" rel="noreferrer">GitHub</a><a href="https://k-soonil.tistory.com/" target="_blank" rel="noreferrer">기술 블로그</a><a href="mailto:rlatnsdlf158@naver.com">이메일</a></div></div>
      <Image src="/profile.jpg" alt="김순일" width={220} height={270} priority className="portrait" />
    </section>
    <section id="projects" className="section"><div className="section-heading"><h2>개인 프로젝트</h2><p>직접 만들고, 고쳐가고 있는 작업입니다.</p></div>
      <div className="project-list">{PROJECTS.map((p, i) => <article className="project" key={p.title}>
        <div className="project-image"><Image src={p.image!} alt={`${p.title} 화면`} width={960} height={600} sizes="(max-width: 760px) 100vw, 44vw" /></div>
        <div className="project-body"><p className="project-kind">{i === 0 ? "ERP · 기능 확장 중" : i === 2 ? "프로토타입" : i === 3 ? "웹 게임" : "기술 실험"}</p><h3>{p.title}</h3><p>{descriptions[i]}</p><p className="project-note">{notes[i]}</p><p className="stack">{p.technologies.join(" · ")}</p><div className="text-links">{p.github && <a href={p.github} target="_blank" rel="noreferrer">소스 코드</a>}{p.demo && <a href={i === 0 ? p.demo + "connected" : p.demo} target="_blank" rel="noreferrer">{i === 0 ? "관리 화면 (소유자 전용)" : i === 3 ? "게임 열기" : "화면 보기"}</a>}</div></div>
      </article>)}</div>
    </section>
    <section id="career" className="section"><div className="section-heading"><h2>경력</h2><p>회사에서 맡았던 일입니다. 회사 소스와 비공개 자료는 공개하지 않습니다.</p></div><div>{EXPERIENCES.map(e => <article className="career-row" key={e.company}><div><p className="period">{e.period}</p><h3>{e.company}</h3><p className="position">{e.position}</p></div><ul>{e.description.map(d => <li key={d}>{d}</li>)}</ul></article>)}</div></section>
    <section id="skills" className="section skills-section"><h2>사용 기술</h2><dl><div><dt>주로 사용하는 기술</dt><dd>React, TypeScript, Next.js, Zustand, TanStack Query</dd></div><div><dt>테스트와 배포</dt><dd>Vitest, React Testing Library, Playwright, GitHub Actions</dd></div><div><dt>프로젝트에서 다룬 기술</dt><dd>PostgreSQL, Supabase, Canvas API, Flutter, Electron</dd></div></dl></section>
    <footer id="contact" className="contact"><h2>연락처</h2><a className="email" href="mailto:rlatnsdlf158@naver.com">rlatnsdlf158@naver.com</a><div className="text-links"><a href="https://github.com/kimsoonil" target="_blank" rel="noreferrer">GitHub</a><a href="https://k-soonil.tistory.com/" target="_blank" rel="noreferrer">블로그</a><a href="https://www.notion.so/Soonil-Kim-8b0de4d95bfe40db8e725e980cca5fdb" target="_blank" rel="noreferrer">Notion</a></div><p className="copyright">김순일 · 프론트엔드 개발자</p></footer>
  </main>;
}
