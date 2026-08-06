interface Project {
  title: string;
  isMain: boolean;
  overview: string;
  role: string;
  contribution: string;
  tags: string[];
  link: string;
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
    overview: "공공데이터 기반 창업 입지 추천 대시보드",
    role: "기획-설계-구현 (1인)",
    contribution: "데이터 수집(SGIS·상권정보), 배치, 가중치 스코어링, REST API, 대시보드 전체 단독 구현",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "WebClient", "PostgreSQL", "Flyway", "Spring Scheduled", "Springdoc OpenAPI", "React", "TypeScript", "Kakao Map API", "Recharts", "TanStack Query"],
    link: "https://github.com/chohyunwoo/SpotScore"
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
