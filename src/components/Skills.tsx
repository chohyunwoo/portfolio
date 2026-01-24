import { useMemo, useState } from "react";
import { skillTabs } from "../data/content";

const iconMap: Record<string, string> = {
  Java: "M4 7h16v3H4zM4 14h10v3H4z",
  "Spring Boot": "M12 3l8 4v6c0 5-4 8-8 12-4-4-8-7-8-12V7l8-4z",
  "JPA/Hibernate": "M5 5h14v4H5zM5 13h14v6H5z",
  "Spring Security": "M12 3l7 4v5c0 4.4-3 7.7-7 11-4-3.3-7-6.6-7-11V7l7-4z",
  Kotlin: "M5 4h4v6l6-6h5l-7 7 7 9h-5l-6-8v8H5z",
  gRPC: "M4 7h16v2H4zm0 6h16v2H4z",
  React: "M12 4c2.8 0 5 3.6 5 8s-2.2 8-5 8-5-3.6-5-8 2.2-8 5-8z",
  TypeScript: "M5 5h14v14H5z",
  Vite: "M12 4l6 4-6 12-6-12z",
  "Tailwind CSS": "M4 12c2-4 6-4 8 0 2 4 6 4 8 0",
  PostgreSQL: "M12 4c4 0 7 2 7 4v8c0 2-3 4-7 4s-7-2-7-4V8c0-2 3-4 7-4z",
  Redis: "M5 7l7-3 7 3-7 3-7-3zm0 5l7 3 7-3-7-3-7 3zm0 5l7 3 7-3-7-3-7 3z",
  Docker: "M4 12h5v4H4zm6-5h4v4h-4zm0 5h4v4h-4zm5 0h4v4h-4z",
  AWS: "M6 8h12v8H6z",
  "GitHub Actions": "M12 4l6 4-6 4-6-4 6-4zm-6 8l6 4 6-4",
  Grafana: "M12 4c4 2 6 6 4 10s-6 6-10 4-6-6-4-10 6-6 10-4z"
};

const colors = ["text-emerald-300", "text-indigo-300", "text-sky-300", "text-amber-300", "text-violet-300", "text-pink-300"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillTabs[0].id);
  const activeData = useMemo(() => skillTabs.find((tab) => tab.id === activeTab) ?? skillTabs[0], [activeTab]);

  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Skills</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">기술 스택</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">{activeData.summary}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                  : "border border-slate-200 text-slate-600 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeData.items.map((item, index) => (
            <div
              key={item.name}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900 ${colors[index % colors.length]}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                  <path d={iconMap[item.name] ?? "M4 6h16v12H4z"} />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                <p className="mt-1 text-xs font-semibold text-primary-600">{item.level}</p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
