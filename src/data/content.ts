export const skillTabs = [
  {
    id: "backend",
    label: "Backend",
    summary: "대용량 트래픽과 안정성을 고려한 서버 개발 경험",
    items: [
      { name: "Java", level: "주요 언어", detail: "도메인 설계 및 API 개발" },
      { name: "Spring Boot", level: "핵심 프레임워크", detail: "REST API, 배치/스케줄링" },
      { name: "JPA/Hibernate", level: "ORM", detail: "성능 튜닝 및 쿼리 최적화" },
      { name: "Spring Security", level: "인증/인가", detail: "JWT, OAuth2 연동" },
      { name: "Kotlin", level: "보조 언어", detail: "서비스 로직 개선" },
      { name: "gRPC", level: "통신", detail: "내부 서비스 통신" }
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    summary: "API 명세 기반의 어드민/대시보드 구현",
    items: [
      { name: "React", level: "사용 경험", detail: "운영 도구 화면 구축" },
      { name: "TypeScript", level: "타입 안정성", detail: "API 스키마 연동" },
      { name: "Vite", level: "빌드", detail: "빠른 개발 환경 구성" },
      { name: "Tailwind CSS", level: "스타일", detail: "반응형 UI 구성" }
    ]
  },
  {
    id: "tools",
    label: "Tools & Others",
    summary: "운영/모니터링/협업을 위한 도구 스택",
    items: [
      { name: "PostgreSQL", level: "Database", detail: "스키마 설계 및 인덱싱" },
      { name: "Redis", level: "Cache", detail: "세션/캐시 전략" },
      { name: "Docker", level: "Container", detail: "서비스 패키징" },
      { name: "AWS", level: "Cloud", detail: "EC2, RDS, S3 운영" },
      { name: "GitHub Actions", level: "CI/CD", detail: "배포 자동화" },
      { name: "Grafana", level: "Observability", detail: "지표 시각화" }
    ]
  }
];

export const projects = [
  {
    title: "클라우드 정산 플랫폼",
    isMain: true,
    overview: "정산 처리 시간을 40% 단축한 결제/정산 파이프라인 구축",
    role: "백엔드 리드 (기여도 70%)",
    contribution: "정산 도메인 모델링, 비동기 처리, 장애 대응 체계 구축",
    tags: ["Spring Boot", "PostgreSQL", "Kafka", "Redis", "AWS"],
    link: "https://github.com/yourname/settlement-platform"
  },
  {
    title: "B2B 주문 관리 API",
    isMain: false,
    overview: "대규모 주문을 안정적으로 처리하는 멀티테넌시 API",
    role: "백엔드 개발 (기여도 60%)",
    contribution: "권한 모델 설계, 쿼리 최적화, SLA 모니터링",
    tags: ["Java", "Spring Security", "JPA", "PostgreSQL"],
    link: "https://github.com/yourname/order-api"
  },
  {
    title: "운영 모니터링 대시보드",
    isMain: false,
    overview: "실시간 장애 알림과 상태 모니터링 UI",
    role: "풀스택 (기여도 50%)",
    contribution: "API 게이트웨이 연동, 지표 시각화, 알림 룰 구성",
    tags: ["React", "TypeScript", "Grafana", "Prometheus"],
    link: "https://github.com/yourname/ops-dashboard"
  }
];

export const educationItems = [
  {
    title: "백엔드 부트캠프 수료",
    period: "2023.03 - 2023.09",
    description: "Spring Boot 기반의 실무 프로젝트 3회 수행 및 코드 리뷰 주도",
    tags: ["Spring Boot", "Clean Architecture", "TDD"]
  },
  {
    title: "컴퓨터공학 학사",
    period: "2017.03 - 2021.02",
    description: "데이터베이스, 운영체제, 네트워크 전공 과목 중심 학습",
    tags: ["Database", "OS", "Network"]
  },
  {
    title: "오픈소스 컨트리뷰션",
    period: "2022.01 - 현재",
    description: "모니터링 도구 개선 PR 및 문서화 참여",
    tags: ["Git", "Observability", "Community"]
  }
];
