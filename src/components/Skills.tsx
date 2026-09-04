import { useMemo, useState } from "react";

/* =========================
   Skill Data (tabs)
========================= */
const skillTabs = [
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Java", level: "Advanced" },
      { name: "Spring Boot", level: "Advanced" },
      { name: "Spring Data JPA", level: "Advanced" },
      { name: "Spring Security", level: "Intermediate" },
      { name: "NestJS", level: "Intermediate" },
      { name: "TypeORM", level: "Intermediate" },
      { name: "Redis 세션", level: "Intermediate" },
      { name: "RBAC", level: "Intermediate" }
    ]
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" }
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Recharts", level: "Basic" },
      { name: "Kakao Map API", level: "Basic" }
    ]
  },
  {
    id: "devops",
    label: "DevOps / Cloud",
    items: [
      { name: "Docker", level: "Intermediate" },
      { name: "CloudFlare", level: "Basic" },
      { name: "GitHub Actions", level: "Intermediate" },
      { name: "k6", level: "Basic" },
    ]
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
      { name: "IntelliJ IDEA", level: "Advanced" },
      { name: "Slack / Discord", level: "Intermediate" }
    ]
  }
];

/* =========================
   Icons
========================= */
const iconMap: Record<string, string> = {
  Java: "M4 7h16v3H4zM4 14h10v3H4z",
  "Spring Boot":
    "M12 3l8 4v6c0 5-4 8-8 12-4-4-8-7-8-12V7l8-4z",
  "Spring Data JPA":
    "M5 5h14v4H5zM5 13h14v6H5z",
  "Spring Security":
    "M12 3l7 4v5c0 4.4-3 7.7-7 11-4-3.3-7-6.6-7-11V7l7-4z",
  JWT:
    "M12 4l8 6-8 10-8-10 8-6z",
  MySQL:
    "M12 4c4 0 7 2 7 4v8c0 2-3 4-7 4s-7-2-7-4V8c0-2 3-4 7-4z",
  PostgreSQL:
    "M12 3c4.5 0 8 2.2 8 5v8c0 2.8-3.5 5-8 5s-8-2.2-8-5V8c0-2.8 3.5-5 8-5z",
  Git:
    "M12 4l6 6-6 6-6-6 6-6zm-2 6a2 2 0 104 0 2 2 0 00-4 0z",
  GitHub:
    "M12 2a10 10 0 00-3 19c.5.1.7-.2.7-.5v-1.7c-3 .7-3.7-1.4-3.7-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 2.2 2.4 1.6-.1-.7.4-1.2.7-1.5-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.1 1-2.9-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 015 0c2-.7 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.8 1 1.7 1 2.9 0 4.1-2.6 5-5 5.3.4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0012 2z",
  Docker:
    "M4 12h5v4H4zm6-5h4v4h-4zm0 5h4v4h-4zm5 0h4v4h-4z",
  AWS:
    "M6 8h12v8H6z",
  NKS:
    "M12 4l6 4v8l-6 4-6-4V8l6-4z",
  Postman:
    "M12 4c4 0 8 4 8 8s-4 8-8 8-8-4-8-8 4-8 8-8z",
  "IntelliJ IDEA":
    "M4 4h16v16H4zM8 8h4v8H8z",
  Slack:
    "M6 10a2 2 0 110-4h2v4H6zm4 0V6h2a2 2 0 110 4h-2zm0 4a2 2 0 110 4h-2v-4h2zm-4 0v4H6a2 2 0 110-4h2z",
  Discord:
    "M6 8l4-2h4l4 2v6l-4 2h-4l-4-2V8z",
  WebClient:
    "M4 12h16M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8z",
  Flyway:
    "M6 4h12v4H6zm0 6h12v10H6z",
  "Spring Scheduled":
    "M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l4 2",
  "Springdoc OpenAPI":
    "M5 4h14v16H5zM8 8h8M8 12h8M8 16h5",
  React:
    "M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 3c4 3 6 6 6 9s-2 6-6 9c-4-3-6-6-6-9s2-6 6-9z",
  TypeScript:
    "M4 4h16v16H4zM7 8h5M9.5 8v9M14 17c1.5 1 4 1 4-1s-2-1.5-2-3 1-2 2.5-1",
  "TanStack Query":
    "M11 4a7 7 0 100 14 7 7 0 000-14zm5 12l4 4",
  Recharts:
    "M4 20V10h3v10H4zm7 0V4h3v16h-3zm7 0v-7h3v7h-3z",
  "Kakao Map API":
    "M12 21s7-6.6 7-12a7 7 0 10-14 0c0 5.4 7 12 7 12zm0-9a3 3 0 100-6 3 3 0 000 6z",
  NestJS:
    "M12 3c3 3 5 6 5 9a5 5 0 01-10 0c0-3 2-6 5-9zm0 4v9",
  TypeORM:
    "M4 6h16v3H4zm2 5h12v2H6zm0 4h12v2H6zm0 4h8v2H6z",
  Redis:
    "M12 4l8 3v3l-8 3-8-3V7zm-8 6l8 3 8-3v3l-8 3-8-3z",
  "GitHub Actions":
    "M12 3l7 4v10l-7 4-7-4V7z M12 8v8 M8 10l4-2 4 2",
  k6:
    "M4 20l6-16h4l6 16h-4l-1.2-3.5H9.2L8 20z M10 13h4l-2-6z"
};

const colors = [
  "text-emerald-300",
  "text-indigo-300",
  "text-sky-300",
  "text-amber-300",
  "text-violet-300",
  "text-pink-300"
];

/* =========================
   Component
========================= */
export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillTabs[0].id);

  const activeData = useMemo(
    () => skillTabs.find((tab) => tab.id === activeTab) ?? skillTabs[0],
    [activeTab]
  );

  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              기술 스택
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
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

        {/* Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeData.items.map((item, index) => (
            <div
              key={item.name}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 dark:border-slate-800 dark:bg-slate-950"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 ${
                  colors[index % colors.length]
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d={iconMap[item.name] ?? "M4 6h16v12H4z"} />
                </svg>
              </div>

              <div className="flex items-center">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
