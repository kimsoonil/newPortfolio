const groups = [
  ['프론트엔드', ['Vite', 'MUI DataGrid', 'React Query', 'React Hook Form', 'React Router']],
  ['백엔드', ['MyBatis', 'Spring Security', 'Flyway', 'Swagger']],
  ['실행·검증', ['Docker Compose', 'Testcontainers', 'GitHub Actions']],
] as const;

export default function CoreErpStack() {
  return <div className="coreerp-stack" aria-label="CoreERP 기술 스택">
    <p className="stack-label">주요 언어</p>
    <ul className="stack-languages" aria-label="주요 언어">
      {['TypeScript', 'Java 21', 'SQL'].map(name => <li key={name}>{name}</li>)}
    </ul>
    <p className="stack-foundation">React · Spring Boot · PostgreSQL</p>
    <details className="stack-details">
      <summary>세부 기술 보기<svg className="stack-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></summary>
      <dl>{groups.map(([title, items]) => <div key={title}><dt>{title}</dt><dd>{items.join(' · ')}</dd></div>)}</dl>
    </details>
  </div>;
}
