import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 px-6 py-20 dark:bg-slate-900/60">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Projects</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">프로젝트</h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            문제 해결 과정과 결과물을 강조할 수 있도록 간단한 요약과 주요 기술을 정리했습니다.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500"
                >
                  상세 보기 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
