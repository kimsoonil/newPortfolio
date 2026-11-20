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

- ERP: 다품목 주문·부분 반품·매출·대용량 조회. 관리 화면은 소유자 전용이며 상세 사례는 공개합니다.
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
