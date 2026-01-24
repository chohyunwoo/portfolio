import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 px-6 py-20 dark:bg-slate-900/60">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Projects</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">백엔드 프로젝트</h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            실제 운영 환경에서 경험한 문제와 해결 방법을 중심으로 정리했습니다. 안정성과 확장성을 최우선으로 고려했습니다.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  {project.isMain && (
                    <span className="rounded-full bg-primary-600/10 px-3 py-1 text-xs font-semibold text-primary-600">Main Project</span>
                  )}
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{project.overview}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <p>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">역할:</span> {project.role}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">기여:</span> {project.contribution}
                  </p>
                </div>
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
