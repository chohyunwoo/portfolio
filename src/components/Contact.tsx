export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">함께 이야기해요</h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            프로젝트 협업, 채용, 프리랜스 문의 등 편하게 연락주세요. 보통 24시간 이내에 답변드립니다.
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</p>
            <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">hello@yourdomain.com</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Phone</p>
            <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">010-0000-0000</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Links</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="text-primary-600 hover:text-primary-500">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary-600 hover:text-primary-500">
                LinkedIn
              </a>
              <a href="https://blog.yourdomain.com" target="_blank" rel="noreferrer" className="text-primary-600 hover:text-primary-500">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
