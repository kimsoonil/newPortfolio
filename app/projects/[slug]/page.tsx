import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '@/app/(home)/_constants/case-studies';
export function generateStaticParams() { return CASE_STUDIES.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const item=CASE_STUDIES.find(x=>x.slug===slug);
 return {title: `${item?.title ?? '프로젝트'} | 김순일`, description:item?.summary};
}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const c=CASE_STUDIES.find(x=>x.slug===slug); if(!c) notFound();
 return <main className="portfolio case-page"><header className="site-header"><Link className="wordmark" href="/">김순일</Link><Link href="/#projects">프로젝트 목록</Link></header><article>
 <div className="case-intro"><p className="eyebrow">개인 프로젝트 · {c.category}</p><h1>{c.title}</h1><p className="intro-copy">{c.summary}</p><p className="stack">{c.stack}</p><div className="text-links"><a href={c.demo} target="_blank" rel="noreferrer">{slug==='flow-ledger'?'관리 화면 · 소유자 전용':'서비스 열기'}</a>{c.github&&<a href={c.github} target="_blank" rel="noreferrer">소스 코드</a>}<a href={c.evidence} target="_blank" rel="noreferrer">{c.evidenceLabel}</a></div></div>
 <Image className="case-cover" src={c.image} alt={`${c.title} 화면`} width={1200} height={750} priority />
 <div className="case-content"><section><h2>만든 배경</h2><p>{c.context}</p></section><section><h2>해결할 문제</h2><p>{c.problem}</p></section><section><h2>구현과 판단</h2>{c.decisions.map(([title,body])=><div className="decision" key={title}><h3>{title}</h3><p>{body}</p></div>)}</section><section><h2>검증한 내용</h2><ul>{c.verification.map(v=><li key={v}>{v}</li>)}</ul><p className="measurement-note">검증 기준: 2026년 11월 20일. 테스트 통과는 실제 서비스의 모든 상황이나 성능을 보장하는 수치가 아닙니다.</p></section><section><h2>현재 범위와 남은 점</h2><p>{c.limit}</p></section></div>
 </article><footer className="contact"><Link href="/#projects">다른 프로젝트 보기</Link><p className="copyright">김순일 · 프론트엔드 개발자</p></footer></main>;
}
