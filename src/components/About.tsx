const techGroups = [
  {
    title: "Server",
    items: ["Java", "Spring Boot", "Spring Security", "JPA", "Batch"]
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Redis", "MongoDB", "Query Tuning"]
  },
  {
    title: "Architecture",
    items: ["MSA", "Event-driven", "Clean Architecture", "DDD"]
  },
  {
    title: "DevOps",
    items: ["AWS", "Docker", "GitHub Actions", "Monitoring"]
  }
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">About Me</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">백엔드 서버 개발자 김도현</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-300">
            Spring Boot 기반의 REST API를 설계하고 안정성과 확장성을 우선으로 구현합니다. 트래픽 변동과 장애 상황에서도 서비스가
            지속될 수 있도록 아키텍처와 배포 전략을 함께 설계합니다.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            성능 모니터링, 데이터 정합성, 협업을 위한 API 문서화까지 모두 책임지는 백엔드 개발자로 성장하고 있으며, 제품 목표에 맞는
            기술 선택과 개선을 주도합니다.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-lg shadow-slate-950/40 transition hover:-translate-y-1 hover:border-primary-500/60"
            >
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
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
