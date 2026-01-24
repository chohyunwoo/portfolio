const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/chohyunwoo",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.5 0-.25-.01-.9-.01-1.77-2.78.62-3.37-1.38-3.37-1.38-.45-1.2-1.1-1.52-1.1-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.45.1 2.71.64.72 1.03 1.64 1.03 2.77 0 3.98-2.34 4.86-4.57 5.12.36.32.69.94.69 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.18.6.69.5 3.96-1.36 6.83-5.21 6.83-9.75C22 6.58 17.52 2 12 2z" />
      </svg>
    )
  },
  {
    label: "Email",
    href: "mailto:gusdndlek12@naver.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01L12 13l8-5.99V7H4zm0 10h16V9l-8 6-8-6v8z" />
      </svg>
    )
  }
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 pb-24 pt-28 text-slate-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-500">Backend Engineer Portfolio</p>
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          안녕하세요, <span className="text-primary-500">백엔드 개발자 조현우</span>입니다.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Spring Boot 기반의 안정적인 REST API와 확장 가능한 아키텍처를 설계합니다. 데이터 흐름과 장애 대응까지 책임지는
          서버 중심 개발자로 성장하고자 합니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-500"
          >
            주요 프로젝트 보기
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
          >
            연락하기
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:-translate-y-0.5 hover:border-primary-500 hover:text-white"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-14 grid w-full gap-4 sm:grid-cols-3">
        </div>
      </div>
    </section>
  );
}
