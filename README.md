# Portfolio

개인 이력서 & 포트폴리오 웹사이트를 위한 Vite + React + TypeScript + Tailwind CSS 기반 프로젝트입니다. AWS Amplify에 바로 배포할 수 있도록 기본 설정을 포함합니다.

## 로컬 실행

```bash
npm install
npm run dev
```

- 기본 개발 서버: `http://localhost:5173`

## 프로덕션 빌드

```bash
npm run build
npm run preview
```

## AWS Amplify 배포

1. GitHub에 이 레포지토리를 push합니다.
2. AWS Amplify 콘솔에서 **New app > Host web app**을 선택합니다.
3. GitHub 연결 후 저장소와 브랜치를 선택합니다.
4. 빌드 설정은 기본 값을 사용하고 아래 명령을 확인합니다.

```
Build command: npm run build
Output directory: dist
```

5. 저장 후 Deploy를 진행하면 SPA가 배포됩니다.

## 커스터마이징

- `src/data/content.ts`: 기술 스택 및 프로젝트 데이터 수정
- `src/components/*`: 섹션별 레이아웃/콘텐츠 수정
- `src/components/Header.tsx`: 다크모드 토글 및 네비게이션 수정

테스트
테스트 한 줄 추가
테스트 한 줄 추가
hooks test
hooks test1
hooks test2
