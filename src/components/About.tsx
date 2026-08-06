const techGroups = [
  {
    title: "Backend Core",
    items: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "WebClient",
      "Spring Scheduled",
      "Springdoc OpenAPI"
    ]
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "PostgreSQL",
      "Flyway"
    ]
  },
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "Kakao Map API"
    ]
  },
  {
    title: "DevOps / Cloud",
    items: [
      "Docker",
      "AWS",
      "NKS"
    ]
  },
  {
    title: "Collaboration & Tools",
    items: [
      "Git / GitHub",
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
            백엔드 서버 개발자 조현우
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            안녕하세요! 저는 열정적인 참여를 바탕으로 실무에 투입되고 싶은 백엔드 신입 개발자입니다.
          </p>

           <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
           사용자 중심의 서비스를 설계하고 데이터를 안정적으로 관리하는 백엔드 시스템 구축에 관심이 많은 개발자입니다.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Spring Framework 기반 백엔드 개발, GitHub Actions를 활용한 CI/CD 자동화, 그리고 AWS 기반 서버 구축 경험이 있으며, 지속적인 학습을 통해 새로운 기술에 도전하고 있습니다.
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
