import { educationItems } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Education & Activities</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">교육 및 대외활동</h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            실무에 적용한 경험과 함께 성장 과정을 정리했습니다.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {educationItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.period}</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
