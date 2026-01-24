export default function About() {
  return (
    <section id="about" className="bg-slate-100 px-6 py-20 dark:bg-slate-900/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            사용자 행동 데이터를 바탕으로 문제를 정의하고, 직관적인 화면 흐름을 설계하는 과정을 즐깁니다. 다양한 직무와 협업하며
            요구사항을 빠르게 프로토타입으로 구현하고, 개선 사항을 반복적으로 반영해 온 경험이 있습니다.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            최근에는 접근성, 성능 최적화, 디자인 시스템 구축에 집중하고 있으며, 서비스가 성장하는 과정을 함께 만들어가고 싶습니다.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Quick Facts</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary-600"></span>
              <span>서울 기반 프론트엔드 개발자</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary-600"></span>
              <span>디자인 시스템과 컴포넌트 문서화 경험</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary-600"></span>
              <span>협업 도구: Jira, Notion, Figma</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
