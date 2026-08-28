interface Project {
  title: string;
  isMain: boolean;
  status?: string;
  image?: string;
  overview: string;
  role: string;
  contribution: string[];
  tags: string[];
  link: string;
  liveUrl: string;
  notionUrl: string;
  swaggerUrl: string;
}

interface EducationItem {
  title: string;
  period: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "SpotScore",
    isMain: true,
    image: "/spotscore.png",
    overview: "공공데이터 기반 창업 입지 추천 대시보드 — 점수 자체보다 어떤 지표를 어떤 비중으로 조합했는지 근거를 함께 보여주는 데 집중",
    role: "기획-설계-구현 (1인)",
    contribution: [
      "SGIS·상권정보 코드 불일치 원인 규명 및 25개 자치구 전수 재매핑(상권정보 API 매핑 성공률 40%→98%, 지역 커버리지 353개→426개)",
      "극소 표본이 스케일을 왜곡하던 정규화 문제를 min-max→퍼센타일 랭크로 개선",
      "지도 렌더링 병목을 마커 클러스터링으로 해결(4.35초 블로킹→약 33fps)",
      "AHP 기반 가중치를 설정 테이블로 분리해 코드 변경 없이 값 교체 가능하도록 설계",
      "3번째 데이터 소스(KOSIS) 통합 시 SGIS와의 통계 정의 차이(추계인구 vs 주민등록인구)를 발견해 분리 계산해 KOSIS 연령 데이터 매핑률을 99.8%(425/426)까지 개선"
    ],
    tags: ["Java", "Spring Boot", "Spring Data JPA", "WebClient", "PostgreSQL", "Flyway", "Spring Scheduled", "Springdoc OpenAPI", "React", "TypeScript", "Kakao Map API", "Recharts", "TanStack Query", "Groq API"],
    link: "https://github.com/chohyunwoo/SpotScore",
    liveUrl: "https://spotscore.pages.dev/",
    notionUrl: "https://app.notion.com/p/3bceaf19306980dab9e2ebebebb45034",
    swaggerUrl: "https://spotscore-backend.onrender.com/swagger-ui/index.html"
  },
  {
    title: "CommerceCore",
    isMain: false,
    status: "진행 중",
    image: "/commercecore.png",
    overview: "동시성 제어와 실시간 재고 관리에 집중한 이커머스 백엔드 — 재고 초과판매가 실제로 막히는지 k6로 직접 검증",
    role: "기획-설계-구현 (1인)",
    contribution: [
      "SELECT FOR UPDATE 기반 비관적 락으로 재고 확인·차감을 원자 처리(k6 동시요청 10건 검증: 성공 1건·실패 9건·최종 재고 0)",
      "DB 커넥션 풀→쿼리 실행계획→라우트별 비교 순으로 병목을 진단해 처리량 +60%·p95 응답시간 -38% 개선",
      "정적 토큰 인증의 구조적 한계(탈취 시 무기한 유효·회수 불가)를 발견해 로그인 세션+역할(RBAC) 기반 인증으로 전환",
      "브라우저에서 DINOv2(q8)로 이미지 임베딩을 계산하고 서버는 코사인 유사도만 수행해 외부 API 비용 없이 이미지 기반 상품 검색을 구현. 특징 추출 모델 6종을 카테고리 분리도로 비교해 선택(CLIP 0.037 vs DINOv2 0.145)",
      "TypeORM 배포 크래시를 계기로 GitHub Actions e2e CI 도입"
    ],
    tags: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Redis", "SSE", "k6", "TossPayments", "RBAC", "DINOv2 (q8, transformers.js)", "Supabase Storage", "GitHub Actions", "Docker Compose", "React", "Vite"],
    link: "https://github.com/chohyunwoo/CommerceCore",
    liveUrl: "https://commercecore.pages.dev/",
    notionUrl: "https://app.notion.com/p/3bceaf19306980dab9e2ebebebb45034",
    swaggerUrl: "https://commerce-core-backend.onrender.com/docs"
  },
];

export const educationItems: EducationItem[] = [
  {
    title: "프로그래머스 데브코스: 클라우드 기반 백엔드 엔지니어링",
    period: "2024.12.18 - 2025.06.04",
    description: "인프라스트럭쳐 아키텍처 구축",
    tags: ["Spring Boot", "Clean Architecture", "TDD"]
  },
  {
    title: "AI Native 커리어 캠프",
    period: "2026.07.22 - 2026.11.17",
    description: "현직자 멘토링 기반 포트폴리오 설계부터 매월 프로젝트 완성까지, AI 활용 개발 역량을 실전 프로젝트로 검증하는 커리어 캠프",
    tags: ["AI-Native Development", "Prompt Engineering", "Portfolio Project", "Mentoring"]
  }
];