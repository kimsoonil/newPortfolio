import result from "../../../public/evidence/coreerp-soak-comparison.json";
const docs="https://github.com/kimsoonil/CoreERP/blob/main/docs/";
const n=(v:number)=>v.toLocaleString("ko-KR");
export default function CoreErpOptimization(){
  const b=result.before, a=result.after;
  return <section className="case-walkthrough" aria-labelledby="optimization-title">
    <h2 id="optimization-title">지연 증가 분석과 같은 조건의 재측정</h2>
    <p>이전 요청 원본을 업무별로 나누고 SQL 실행계획을 대조했습니다. 빈 재고 검색의 불필요한 문자열 검사·JOIN을 제거하고, 취소 이력을 제외하는 확정 출고 부분 인덱스를 추가했습니다. 검색 결과·페이지 총건수·재고 정합성은 유지했습니다.</p>
    <div className="walkthrough-table"><table><caption>15분·8세션·조회 6개/쓰기 2개 · 같은 대기 시간·새 임시 DB</caption><thead><tr><th>지표</th><th>이전</th><th>개선 후</th></tr></thead><tbody>
      <tr><th scope="row">전체 응답 수</th><td>{n(b.all.requests)}건</td><td>{n(a.all.requests)}건</td></tr>
      <tr><th scope="row">전체 p50</th><td>{b.all.p50Ms}ms</td><td>{a.all.p50Ms}ms</td></tr>
      <tr><th scope="row">전체 p95</th><td>{b.all.p95Ms}ms</td><td>{a.all.p95Ms}ms</td></tr>
      <tr><th scope="row">재고 조회 · 마지막 1분 p95</th><td>{b.operations.inventory.lastFullMinute.p95Ms}ms</td><td>{a.operations.inventory.lastFullMinute.p95Ms}ms</td></tr>
      <tr><th scope="row">매출 조회 · 마지막 1분 p95</th><td>{b.operations.salesReport.lastFullMinute.p95Ms}ms</td><td>{a.operations.salesReport.lastFullMinute.p95Ms}ms</td></tr>
      <tr><th scope="row">주문 예약 · 전체 p95</th><td>{b.operations.reserve.overall.p95Ms}ms</td><td>{a.operations.reserve.overall.p95Ms}ms</td></tr>
      <tr><th scope="row">출고 · 전체 p95</th><td>{b.operations.ship.overall.p95Ms}ms</td><td>{a.operations.ship.overall.p95Ms}ms</td></tr>
      <tr><th scope="row">출고 취소 · 전체 p95</th><td>{b.operations.cancelShipment.overall.p95Ms}ms</td><td>{a.operations.cancelShipment.overall.p95Ms}ms</td></tr>
    </tbody></table></div>
    <p>완료된 요청 수는 응답 후 다음 요청을 보내는 방식이라 달라집니다. 쓰기 작업도 같은 인덱스를 유지하는 비용을 포함해 검사했고, 개선 후에도 예상 밖 오류 0·최종 현재고 100,000·예약 0·재고 불변식 위반 0을 확인했습니다.</p>
    <p>전체 p95는 28.85% 줄었지만 p50와 쓰기 p95는 증가했습니다. 완료 업무 사이클도 8,618→8,404개로 줄었습니다. 부분 인덱스의 추가 WAL 쓰기는 별도 실험에서 관측했으며, HTTP 회귀 전체의 원인은 분리하지 못했습니다. 개선 후 분별 p95도 7.35→8.46ms로 늘어, 지연 증가가 완전히 사라졌다는 결론은 내리지 않습니다.</p>
    <p className="measurement-note">각 버전 1회씩 순서대로 실행한 로컬 관측값입니다. 원래 실행의 JVM·OS·플랜 전환 기여도를 모두 분리한 결과는 아닙니다. 진단 SQL의 개선 배수를 운영 처리량으로 해석하지 않습니다. ERP는 운영 배포 전입니다.</p>
    <div className="text-links"><a href={docs+"soak-optimization.md"} target="_blank" rel="noreferrer">원인 근거·SQL·측정 조건</a><a href={docs+"evidence/soak-comparison.json"} target="_blank" rel="noreferrer">업무별 전후 비교 원본</a><a href={docs+"evidence/soak-after/recovery-soak.json"} target="_blank" rel="noreferrer">개선 후 전체 검증 결과</a></div>
  </section>;
}
