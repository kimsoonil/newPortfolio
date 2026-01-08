# 포트폴리오 웹사이트

7년차 프론트엔드 개발자를 위한 현대적인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 주요 기능

- ✅ 반응형 디자인 (모바일 우선)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 다크 모드 지원
- ✅ SEO 최적화
- ✅ 성능 최적화
- ✅ 접근성 고려
- ✅ Vitest 기반 단위 테스트

## 프로젝트 구조

```
portfolio/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── navigation.tsx  # 네비게이션 바
│   ├── hero.tsx        # 히어로 섹션
│   ├── about.tsx       # 소개 섹션
│   ├── skills.tsx      # 기술 스택 섹션
│   ├── projects.tsx    # 프로젝트 섹션
│   ├── career.tsx      # 경력 섹션
│   ├── contact.tsx     # 연락처 섹션
│   └── footer.tsx      # 푸터
├── lib/
│   └── utils.ts        # 유틸리티 함수
├── test/
│   ├── setup.ts        # 테스트 환경 설정
│   ├── utils.test.ts   # 유틸리티 함수 테스트
│   └── components/     # 컴포넌트 테스트
│       ├── career.test.tsx
│       ├── hero.test.tsx
│       ├── projects.test.tsx
│       └── skills.test.tsx
└── vitest.config.ts    # Vitest 설정
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 테스트

이 프로젝트는 [Vitest](https://vitest.dev/)와 [React Testing Library](https://testing-library.com/react)를 사용하여 테스트 코드를 작성했습니다.

### 테스트 실행

```bash
# 모든 테스트 실행
npm test

# Watch 모드로 테스트 실행
npm test -- --watch

# UI 모드로 테스트 실행
npm run test:ui
```

### 테스트 커버리지

```bash
# 커버리지 리포트 생성
npm run test:coverage
```

### 테스트 커버리지 현황

현재 프로젝트의 테스트 커버리지는 다음과 같습니다:

#### 유틸리티 함수
- ✅ `lib/utils.ts` - `cn` 함수 테스트 완료
  - 클래스 병합 테스트
  - Tailwind 클래스 충돌 해결 테스트
  - 조건부 클래스 처리 테스트

#### 컴포넌트 테스트
- ✅ `components/career.tsx` - 경력 섹션 테스트
  - 섹션 렌더링 테스트
  - 경력 데이터 표시 테스트
  - 날짜 포맷 테스트
  
- ✅ `components/hero.tsx` - 히어로 섹션 테스트
  - 소개 텍스트 렌더링 테스트
  - 소셜 링크 테스트
  - 스크롤 기능 테스트

- ✅ `components/projects.tsx` - 프로젝트 섹션 테스트
  - 프로젝트 목록 렌더링 테스트
  - GitHub 및 데모 링크 테스트
  - 기술 스택 표시 테스트

- ✅ `components/skills.tsx` - 스킬 섹션 테스트
  - 스킬 카테고리 렌더링 테스트
  - 기술 스택 표시 테스트

### 테스트 작성 가이드

새로운 컴포넌트나 기능을 추가할 때는 다음을 고려하세요:

1. **컴포넌트 렌더링**: 컴포넌트가 올바르게 렌더링되는지 확인
2. **사용자 인터랙션**: 버튼 클릭, 링크 클릭 등의 상호작용 테스트
3. **접근성**: ARIA 속성, 시맨틱 HTML 사용 확인
4. **데이터 표시**: 중요한 데이터가 올바르게 표시되는지 확인

테스트 파일은 `test/` 디렉토리에 작성하며, 컴포넌트 테스트는 `test/components/` 디렉토리에 위치합니다.

## 커스터마이징

### 개인 정보 수정

각 컴포넌트 파일에서 다음 정보를 수정하세요:

- **Hero 섹션** (`components/hero.tsx`): 소개 문구, 소셜 미디어 링크
- **About 섹션** (`components/about.tsx`): 자기소개 내용
- **Skills 섹션** (`components/skills.tsx`): 기술 스택 및 숙련도
- **Projects 섹션** (`components/projects.tsx`): 프로젝트 목록
- **Career 섹션** (`components/career.tsx`): 경력 정보
- **Contact 섹션** (`components/contact.tsx`): 연락처 정보

### 스타일 수정

- 전역 스타일: `app/globals.css`
- 테마 색상: CSS 변수를 통해 수정 가능
- Tailwind 설정: `tailwind.config.ts` (필요시)

## 배포

### Vercel (권장)

1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 자동 배포 완료

### 기타 플랫폼

Next.js는 다양한 플랫폼에서 배포 가능합니다:
- Netlify
- AWS Amplify
- Cloudflare Pages
- 기타 Node.js 호스팅 서비스

## 라이선스

MIT
