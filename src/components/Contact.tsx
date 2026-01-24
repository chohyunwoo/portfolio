const contactDetails = [
  { label: "Email", value: "hello@yourdomain.com" },
  { label: "GitHub", value: "github.com/yourname" },
  { label: "LinkedIn", value: "linkedin.com/in/yourname" },
  { label: "Location", value: "Seoul, KR" }
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">함께 성장하고 싶습니다</h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            백엔드 시스템의 안정성과 성장 가능성을 함께 고민할 팀을 찾고 있습니다. 프로젝트 협업, 채용, 기술 교류 모두 환영합니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{detail.label}</p>
                <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-full flex-col justify-between rounded-3xl border border-primary-500/20 bg-primary-600/10 p-6 text-slate-700 dark:border-primary-500/30 dark:text-slate-200">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Get in touch</p>
            <h3 className="mt-3 text-2xl font-semibold">서버 성능과 안정성을 함께 높여보고 싶습니다.</h3>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              제품 목표에 맞는 기술 스택과 아키텍처 제안을 드립니다. 필요하신 사항이 있다면 편하게 메시지 주세요.
            </p>
          </div>
          <a
            href="mailto:hello@yourdomain.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-500"
          >
            이메일 보내기
          </a>
        </div>
      </div>
    </section>
  );
}
