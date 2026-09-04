const collaborationItems = [
  {
    title: "목적별 스킬로 반복 작업 자동화",
    description:
      "커밋 메시지·기술 블로그·UI 리뷰를 스킬로 패키징. 그중 ui-design-review는 스크린샷 분석부터 Figma MCP 와이어프레임 제작까지 자동화"
  },
  {
    title: "실무 개발 워크플로우",
    description:
      "이슈 작성 → 브랜치 생성 → 구현 → PR 생성까지 전 과정에 Claude Code CLI를 실사용. 설계 결정마다 대안 비교와 근거를 CLAUDE.md에 남겨 AI와 같은 컨텍스트를 공유하며 협업"
  },
  {
    title: "프롬프트 구조화",
    description:
      "반복 요청을 RGCCO 형식으로 템플릿화하고, ① 불확실한 부분은 멈춰서 질문할 것 ② 구현과 검증 로직을 함께 낼 것 ③ 확인된 것과 확인하지 못한 것을 구분해 서술할 것을 항상 포함"
  },
  {
    title: "AI 산출물은 검증 후 채택",
    description:
      "구현과 동시에 테스트·검증 로직을 함께 요구하고, 이력서와 포트폴리오에 적은 모든 수치는 EXPLAIN·k6·curl로 직접 재산출해 대조"
  }
];

const collaborationTools = [
  "Claude Code CLI (headless)",
  "Claude API",
  "GitHub Actions",
  "Figma MCP"
];

export default function AiCollaboration() {
  return (
    <section id="ai-collaboration" className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">AI Collaboration</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">AI 협업</h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            AI를 단순 보조 도구가 아니라 개발 프로세스의 일부로 설계하고 운영한 경험입니다.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {collaborationItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {collaborationTools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
