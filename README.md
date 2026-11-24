# 김순일 포트폴리오

커머스·SCM·관리자 콘솔 개발 경험과 네 개인 프로젝트의 설계·검증 과정을 정리한 웹사이트입니다.

[사이트 열기](https://kimsunil.netlify.app/) · [프로젝트](https://kimsunil.netlify.app/#projects)

## 화면과 탐색

- 업무 경험 요약, 개인 프로젝트 4개, 회사별 경력과 연락처
- 스크롤 위치를 표시하는 고정 메뉴, 키보드 바로가기와 포커스 표시
- 프로젝트 이미지·제목·상세 버튼에서 사례 페이지로 이동
- 상세 사례의 목차, 목록 복귀, 다음 프로젝트 이동
- PC·모바일 반응형과 인쇄 스타일

현재 화면은 밝은 배경과 텍스트 중심입니다. 별도 다크 모드와 등장 애니메이션은 제공하지 않습니다.

## 프로젝트 구성

- [CoreERP](https://github.com/kimsoonil/CoreERP): 발주·부분 입고·창고별 재고·판매 예약·출고·취소. 공개 GitHub, 구현 화면 4종, JUnit 52개·Vitest 61개·Playwright 4개 및 CI 5개 작업 결과를 연결합니다. MVP와 일별 집계 배치 구현·검증 완료이며 운영 배포 전입니다. Docker 로컬 실행 방법은 CoreERP README에 있습니다.
- 물류 대시보드: 모의 차량 데이터의 Canvas 시각화와 비동기 갱신 처리. 공개 데모 연결.
- 민원똑똑: 정적 민원 검색·모의 채팅 프로토타입. 실제 AI·인증·발급 미연동.
- 영웅합전서: 한국사 영웅 조합 디펜스 웹 게임.

회사 소스와 비공개 자료는 포함하지 않습니다.

## 주요 소스

- `app/(home)/page.tsx`: 메인 화면
- `app/(home)/_components/SectionNavigation.tsx`: 현재 구간 표시
- `app/(home)/_constants/index.ts`: 경력·프로젝트 메타데이터
- `app/(home)/_constants/case-studies.ts`: 상세 사례
- `app/projects/[slug]/page.tsx`: 프로젝트 상세 정적 페이지
- `app/globals.css`: 공통·반응형·인쇄 스타일
- `public/evidence/`: 공개 가능한 개인 프로젝트 검증 결과

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS를 사용합니다. 저장소에는 이전 화면의 컴포넌트와 테스트도 남아 있어 현재 메인 화면 테스트와 구분해야 합니다.

## 실행

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
corepack pnpm build
corepack pnpm exec vitest run
```

## 검증

2026-11-20 현재 UI 변경의 프로덕션 빌드와 상세 페이지 4개 경로를 확인했습니다. 브라우저에서 PC·모바일 배치, 메뉴 현재 위치, 프로젝트 진입과 상세 목차 이동을 점검했습니다. 이전 컴포넌트 테스트만으로 현재 화면 전체의 검증을 대신하지 않습니다.

기존 Netlify 사이트는 GitHub 기본 브랜치 변경으로 배포합니다.

2026-11-24 CoreERP의 최신 검증 결과를 메인 카드와 상세 사례에 반영했습니다. Java 52개·Vitest 61개·Playwright 4개로 총 117개이며, React 전체 소스 라인 커버리지는 96.62%(372/385), 분기는 91.17%입니다. 실제 부트스트랩·App 라우팅·세션·문서 생성·모달 오류와 배치 재처리를 포함한 검사 내용, 남은 검증 범위, CI와 측정 문서 링크를 제공합니다. CI의 React 라인 하한은 95%, 구문·분기·함수 하한은 각각 80%입니다.

기존 `/projects/flow-ledger` URL은 북마크 호환을 위해 유지합니다. CoreERP는 운영 배포 전이며, 실행 방법과 공개 소스를 GitHub로 연결합니다. 일별 집계와 업무 화면은 합성 데이터로 검증한 실제 구현 화면입니다. 포트폴리오 자체의 테스트 16개와 빌드를 별도로 실행합니다.
