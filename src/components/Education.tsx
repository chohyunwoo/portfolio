import { certifications, educationItems } from "../data/content";

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
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">{item.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">자격증</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert.name}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
              >
                {cert.name}
                {cert.detail && (
                  <span className="text-xs font-normal text-slate-400 dark:text-slate-500">{cert.detail}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
