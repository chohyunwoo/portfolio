import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 px-6 py-20 dark:bg-slate-900/60">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Projects</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">백엔드 프로젝트</h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            백엔드 API·배치 설계를 중심으로, 필요한 경우 프론트엔드까지 직접 구현했습니다. 실제 데이터를 다루며 마주친 문제와 해결 과정을 정리했습니다.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 dark:border-slate-800 dark:bg-slate-950"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.isMain && (
                      <span className="rounded-full bg-primary-600/10 px-3 py-1 text-xs font-semibold text-primary-600">Main Project</span>
                    )}
                    {project.status && (
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">{project.status}</span>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{project.overview}</p>
                <div className="mt-4 space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <p>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">역할:</span> {project.role}
                  </p>
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">기여:</span>
                    <ul className="mt-1.5 space-y-1.5 pl-1">
                      {project.contribution.map((item) => (
                        <li key={item} className="flex gap-2 leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={project.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500"
                  >
                    상세 문서 보기 →
                  </a>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400"
                    >
                      Live ↗
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400"
                    >
                      GitHub ↗
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Render 무료 티어 운영 — 첫 접속 시 30초~1분 소요될 수 있습니다
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
