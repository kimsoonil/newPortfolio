import Image from "next/image";

const base = "https://github.com/kimsoonil/CoreERP/blob/main/docs/";
export default function CoreErpWalkthrough() {
  return <section className="case-walkthrough" aria-labelledby="walkthrough-title">
    <h2 id="walkthrough-title">발주부터 매출 집계까지</h2>
    <p>로컬 실제 API와 PostgreSQL에서 합성 상품으로 검증한 흐름입니다. 상품 판매가 1,000원, 발주 10개, 판매 3개를 기준으로 확인했습니다. 운영 배포 전이며 아래 자료로 구현과 검증 내용을 살펴볼 수 있습니다.</p>
    <div className="walkthrough-table"><table><caption>같은 창고·상품의 업무 단계별 예상값</caption><thead><tr><th>업무 단계</th><th>현재고 / 예약 / 가용</th><th>해당 상품 매출</th></tr></thead><tbody>
      <tr><th scope="row">발주 10개 작성·승인</th><td>0 / 0 / 0</td><td>0원</td></tr>
      <tr><th scope="row">4개·6개 나누어 입고</th><td>10 / 0 / 10</td><td>0원</td></tr>
      <tr><th scope="row">판매 주문 3개 예약</th><td>10 / 3 / 7</td><td>0원</td></tr>
      <tr><th scope="row">출고 확정</th><td>7 / 0 / 7</td><td>3,000원</td></tr>
      <tr><th scope="row">출고 취소</th><td>10 / 0 / 10</td><td>0원</td></tr>
    </tbody></table></div>
    <p>매출은 시연 전 기준값과 비교해 +3,000원·출고 +1건, 취소 후 원복을 검사했습니다. 일별 배치는 마감된 KST 어제의 원본과 대조하고 중복 실행 시 기존 결과가 보존되는지 별도로 확인합니다. 당일 거래를 닫힌 날짜 배치에 넣지는 않습니다.</p>
    <div className="case-screen-grid">
      {([
        ["demo-purchase", "발주서 작성 · 새 상품 10개"],
        ["demo-partial-receipt", "1차 입고 4개 · 부분 입고 상태"],
        ["demo-confirmed-sales", "출고 후 상품 매출 · 3개, 3,000원"],
      ] as const).map(([file, label]) => <figure key={file}><a href={`/coreerp-${file}.png`} target="_blank" rel="noreferrer" aria-label={`${label} 원본 열기`}><Image src={`/coreerp-${file}.png`} alt={label} width={1280} height={1400}/></a><figcaption>{label} · 원본 열기</figcaption></figure>)}
    </div>
    <div className="text-links"><a href={base+"demo-walkthrough.md"} target="_blank" rel="noreferrer">5분 시연·로컬 재현 방법</a><a href={base+"sql-concurrency.md"} target="_blank" rel="noreferrer">SQL·잠금·중복 처리 설계</a><a href={base+"operations.md"} target="_blank" rel="noreferrer">장애 대응·운영 전 남은 점</a></div>
  </section>;
}
