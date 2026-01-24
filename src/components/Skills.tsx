import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Skills</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">기술 스택</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
            프로젝트에서 직접 사용해 본 기술을 중심으로 정리했습니다. 필요한 기술은 빠르게 학습하고 팀에 적용합니다.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-primary-600 hover:text-primary-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
