const collaborationItems = [
  {
    title: "반복 작업 자동화 (스킬 라이브러리)",
    description:
      "커밋 메시지 작성, 기술 블로그 작성, UI 리뷰 등 반복 작업마다 목적별 스킬로 패키징해 적용"
  },
  {
    title: "UI 디자인 리뷰 자동화",
    description:
      "스크린샷·URL 기반으로 UI 구조를 분석하고 개선안을 도출한 뒤, Figma MCP로 As-Is/To-Be 와이어프레임을 직접 제작하고 구현용 프롬프트까지 생성하는 ui-design-review 스킬을 구축해 실제 UI 개선 리뷰에 적용"
  },
  {
    title: "문서 검색 도구 (RAG)",
    description:
      "설계 결정과 트러블슈팅 기록을 정리한 노션 문서를 RAG로 구축해, 과거에 어떤 근거로 어떤 결정을 내렸는지 빠르게 검색·재사용하는 개인용 도구로 실사용 중"
  },
  {
    title: "실무 개발 워크플로우",
    description:
      "이슈 작성 → 브랜치 생성 → 구현 → PR 생성까지 전 과정에 Claude Code CLI를 실사용, 설계 결정마다 대안 비교·근거를 CLAUDE.md에 남겨 AI와 같은 컨텍스트를 공유하며 협업"
  },
  {
    title: "AI 산출물은 검증 후 채택",
    description:
      "불확실한 부분은 넘기지 않고 확인·질문하게 하고, 구현과 동시에 테스트/검증 로직을 함께 요구. 이력서에 적은 모든 수치는 EXPLAIN·k6·curl로 직접 재산출해 대조한 값입니다"
  }
];

const collaborationTools = [
  "Claude Code CLI (headless)",
  "Claude API",
  "GitHub Actions",
  "Slack Webhook",
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
