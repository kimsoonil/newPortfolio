const docs = "https://github.com/kimsoonil/CoreERP/blob/main/docs/";
export default function CoreErpOperations() {
  return <section className="case-walkthrough" aria-labelledby="operations-title">
    <h2 id="operations-title">로컬 운영 검증</h2>
    <p>2026년 11월 28일, 별도 임시 PostgreSQL과 합성 데이터로 백업·복원, 거래 중 연결 장애와 HTTP 부하를 검증했습니다. ERP는 운영 배포 전입니다.</p>
    <div className="walkthrough-table"><table><caption>실제로 실행한 검사와 관측 결과</caption><thead><tr><th>검사</th><th>조건과 결과</th></tr></thead><tbody>
      <tr><th scope="row">백업·새 DB 복원</th><td>25개 테이블의 행 수·전체 행 지문, 시퀀스 일치. 복원 API 로그인·상품 총건수·매출 일치.</td></tr>
      <tr><th scope="row">출고 중 DB 연결 단절</th><td>첫 요청 500 후 문서·재고 전체 롤백. 동일 요청 키 재시도 200, 현재고 10 → 7·예약 3 → 0, 재요청도 같은 출고 ID.</td></tr>
      <tr><th scope="row">30초 조회 부하</th><td>동시 작업 12개 · 50,317건 모두 200 · p95 12.06ms. 상품·재고 페이지 API, 20회 워밍업 제외.</td></tr>
      <tr><th scope="row">재고 주문 경합</th><td>재고 25개에 주문 100건, 동시 작업 16개. 성공 25건·예상 재고 부족 409 응답 75건, 초과 예약 없음.</td></tr>
      <tr><th scope="row">중복 출고 경합</th><td>동일 주문에 서로 다른 키로 40건 요청, 동시 작업 12개. 출고 문서 1개·현재고와 예약 단일 차감.</td></tr>
    </tbody></table></div>
    <p className="measurement-note">Apple M4 · macOS · PostgreSQL 18.7 · Java 21 · DB 풀 12개. 클라이언트·API·DB가 같은 호스트이고 로그인 세션은 하나입니다. 짧은 로컬 실행 결과이며 실제 사용자 수·운영 처리량·RTO/RPO를 보장하지 않습니다. WAL 시점 복구, 외부 백업, 서버 전체 중단·failover와 장시간 부하는 남은 검증입니다.</p>
    <div className="text-links"><a href={docs+"local-operations.md"} target="_blank" rel="noreferrer">조건·절차·재현 방법</a><a href={docs+"evidence/local-operations.json"} target="_blank" rel="noreferrer">원본 결과·응답 지연 표본</a><a href="https://github.com/kimsoonil/CoreERP/blob/main/tools/operations-check.mjs" target="_blank" rel="noreferrer">검증 실행 코드</a></div>
  </section>;
}
