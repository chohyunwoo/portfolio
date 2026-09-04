const techGroups = [
  {
    title: "Backend Core",
    items: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "NestJS",
      "TypeORM",
      "Redis 세션",
      "RBAC"
    ]
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "PostgreSQL",
      "Redis"
    ]
  },
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Recharts",
      "Kakao Map API"
    ]
  },
  {
    title: "DevOps / Cloud",
    items: [
      "Docker",
      "CloudFlare",
      "GitHub Actions",
      "k6"
    ]
  },
  {
    title: "Collaboration & Tools",
    items: [
      "Git",
      "Postman",
      "Slack / Discord",
      "IntelliJ IDEA"
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr]">
        {/* Left: Description */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            기획부터 배포까지 혼자 끝내는 개발자 조현우
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            안녕하세요! 문제가 생기면 원인을 끝까지 추적해서 데이터로 검증하는 걸 좋아하는 신입 개발자입니다.
          </p>

           <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
           사용자 중심의 서비스를 설계하고 데이터를 안정적으로 관리하는 시스템 구축에 관심이 많습니다. 백엔드가 주력이지만 화면과 배포까지 직접 맡아 왔습니다.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Spring Framework 기반 백엔드 개발, GitHub Actions를 활용한 CI/CD 자동화 경험이 있으며, SpotScore 프로젝트에서는 서로 다른 두 공공데이터 API의 행정구역 코드 체계 불일치를 직접 진단하고 해결한 경험이 있습니다.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            CommerceCore 프로젝트에서는 브라우저 EventSource의 커스텀 헤더 미지원, TypeORM 컬럼 타입 오인식으로 인한 배포 크래시처럼 증상만으로는 답이 안 보이는 문제를 스펙과 원인까지 추적해 해결했고, 이 경험을 계기로 부팅 자체를 검증하는 e2e CI를 도입했습니다.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            화면도 직접 만들었습니다. SpotScore는 지도 배지 렌더링이 4.35초 동안 화면을 붙잡던 걸 마커 클러스터링으로 약 33fps까지 끌어올렸고, 초기 JS 번들은 gzip 기준 241KB에서 80KB로 깎았습니다.
          </p>
        </div>

        {/* Right: Tech Groups */}
        <div className="grid gap-4 sm:grid-cols-2">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-primary-500/60 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-lg dark:shadow-slate-950/40"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
