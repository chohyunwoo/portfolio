export default function Hero() {
  return (
    <section id="hero" className="px-6 pb-20 pt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Frontend Developer</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            안녕하세요, 사용자 경험에 집중하는 프론트엔드 개발자입니다.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            제품과 사용자의 목표를 연결하는 인터페이스를 만드는 것을 좋아합니다. 지금까지의 경험과 결과물을 소개합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-500"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
            >
              연락하기
            </a>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Experience</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">3+ years</p>
            <p className="mt-2">제품 중심의 웹 인터페이스 구축 경험</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Focus</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Design systems</p>
            <p className="mt-2">재사용 가능한 UI 컴포넌트 설계</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Availability</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Open to work</p>
            <p className="mt-2">원격 혹은 하이브리드 협업 선호</p>
          </div>
        </div>
      </div>
    </section>
  );
}
