import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

const getPreferredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

type Theme = "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold">
          현우 포트폴리오
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
        >
          {theme === "dark" ? "Light" : "Dark"} mode
        </button>
      </div>
    </header>
  );
}
