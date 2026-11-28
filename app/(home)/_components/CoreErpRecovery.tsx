import result from "../../../public/evidence/coreerp-recovery-soak.json";
const docs = "https://github.com/kimsoonil/CoreERP/blob/main/docs/";
const number = (n: number) => n.toLocaleString("ko-KR");
export default function CoreErpRecovery() {
  const s = result.soak;
  return <section className="case-walkthrough" aria-labelledby="recovery-title">
    <h2 id="recovery-title">WAL 복구와 15분 지속 부하</h2>
    <p>논리 백업 복원에 이어 물리 기본 백업·WAL로 거래 중간 지점을 복구하고, API와 PostgreSQL 프로세스를 모두 종료한 뒤 다시 기동했습니다. 별도 임시 환경의 실험이며 운영 배포 전입니다.</p>
    <div className="walkthrough-table"><table><caption>새 임시 클러스터에서 확인한 결과</caption><thead><tr><th>검사</th><th>실제 검증 결과</th></tr></thead><tbody>
      <tr><th scope="row">WAL 시점 복구</th><td>거래 A 출고 후의 이름 있는 WAL 지점으로 복구. A 보존·이후 B 제외, 재고 17개·25개 테이블 지문·매출 API 일치.</td></tr>
      <tr><th scope="row">서비스 프로세스 전체 장애</th><td>PostgreSQL immediate 종료와 Java API 강제 종료 후 재시작. 커밋 거래 보존·진행 중 출고 롤백, 세션 만료·재로그인과 동일 키 출고 재시도 확인.</td></tr>
      <tr><th scope="row">15분 혼합 부하</th><td>독립 세션 {s.sessions}개 · 조회 6개/쓰기 2개 작업 · {number(s.requests)}건 · 예상 밖 오류 0 · 전체 p95 {s.p95Ms}ms.</td></tr>
      <tr><th scope="row">업무 수량 정합성</th><td>주문 예약·출고·취소 {number(s.completedReserveShipCancelCycles)}사이클. 종료 후 현재고 100,000·예약 0, 전체 재고 불변식 위반 0개.</td></tr>
    </tbody></table></div>
    <details className="recovery-minute-details"><summary>분별 부하 결과 보기</summary><div className="walkthrough-table"><table><caption>분 단위 응답 수와 지연 · 마지막 완료 대기 구간은 별도 원본 참고</caption><thead><tr><th>구간</th><th>응답 수</th><th>p95</th><th>p99</th></tr></thead><tbody>{s.perMinute.filter(r => r.minute <= s.configuredMinutes).map(r=><tr key={r.minute}><th scope="row">{r.minute}분</th><td>{number(r.requests)}</td><td>{r.p95Ms}ms</td><td>{r.p99Ms}ms</td></tr>)}</tbody></table></div></details>
    <p>분별 p95는 1분차 9.00ms에서 15분차 11.69ms로 증가했습니다. 거래·감사 데이터 증가와 같은 호스트의 영향을 이번 실험에서 분리하지 않았으며, 원인 분석은 후속 과제입니다.</p>
    <p className="measurement-note">같은 호스트의 PostgreSQL 18.7·Java 21·DB 풀 12개, 응답 후 대기하는 closed-loop 부하입니다. 복구는 이름 있는 WAL 목표 지점과 서비스 프로세스 장애를 검증했습니다. 물리 서버 전원 차단·다중 노드 failover·원격 백업·24시간 부하·운영 RTO/RPO 보장은 포함하지 않습니다. RSS 표본만으로 메모리 누수 여부를 단정하지 않습니다.</p>
    <div className="text-links"><a href={docs+"recovery-soak.md"} target="_blank" rel="noreferrer">복구·지속 부하 절차와 한계</a><a href={docs+"evidence/recovery-soak.json"} target="_blank" rel="noreferrer">분별 결과·자원 표본 JSON</a><a href={docs+"evidence/recovery-soak-samples.csv.gz"} target="_blank" rel="noreferrer">요청별 원본 CSV(gzip)</a></div>
  </section>;
}
