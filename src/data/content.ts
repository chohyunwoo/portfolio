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
    overview: "공공데이터 기반 창업 입지 추천 대시보드 — 서로 다른 행정구역 코드 체계 문제를 진단해 지역 매핑 성공률 98% 확보",
    role: "기획-설계-구현 (1인)",
    contribution: "SGIS·상권정보 코드 불일치 원인 규명 및 25개 자치구 전수 재매핑(매핑 성공률 40%→98%), 좌표계 변환 오류 해결, AHP 기반 가중치 설계, 데이터 수집·배치·REST API·대시보드 전체 단독 구현",
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