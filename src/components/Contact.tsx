// 이메일 하베스터(정적 정규식 스캐너)가 연속된 주소를 수집하지 못하도록
// 소스에는 사용자/도메인을 분리해 두고 런타임에만 조합한다.
const emailUser = "gusdndlek12";
const emailDomain = "naver.com";
const email = `${emailUser}@${emailDomain}`;

// 이력서에는 개인정보가 포함되므로 스크래퍼가 번들에서 URL을 통째로 수집하지
// 못하도록 페이지 ID를 분리해 두고 런타임에만 조합한다. (색인 방지는 rel=nofollow 병행)
const resumePageId = "299eaf19306981f5aaeecfa607a6bda7";
const resumeUrl = `https://app.notion.com/p/${resumePageId}`;

const contactDetails = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`
  },
  {
    label: "GitHub",
    value: "https://github.com/chohyunwoo",
    href: "https://github.com/chohyunwoo",
    external: true
  },
  {
    label: "Resume",
    value: "이력서 (Notion)",
    href: resumeUrl,
    external: true,
    nofollow: true
  },
  {
    label: "Blog",
    value: "블로그 (Tistory)",
    href: "https://gussdndlek12.tistory.com/",
    external: true
  },
  {
    label: "Location",
    value: "Seoul, KR"
  },
  {
    label: "입사 가능 시기",
    value: "즉시 가능"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            백엔드 개발자 조현우입니다
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-slate-800"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {detail.label}
                </p>

                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.external ? "_blank" : undefined}
                    rel={
                      detail.external
                        ? detail.nofollow
                          ? "nofollow noopener noreferrer"
                          : "noopener noreferrer"
                        : undefined
                    }
                    className="mt-2 inline-block text-base font-semibold text-primary-600 hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    {detail.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex h-full flex-col justify-between rounded-3xl border border-primary-500/20 bg-primary-600/10 p-6 text-slate-700 dark:border-primary-500/30 dark:text-slate-200">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">
              Get in touch
            </p>

            <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                기획부터 배포까지 혼자 끝낸 서비스 두 개를 URL로 운영하고,
                반복되는 개발 작업은 직접 도구로 만들어 없애는 백엔드 개발자입니다.
              </p>
              <p>
                바로 합류할 수 있습니다. 함께할 팀을 찾고 계신다면 편하게 연락 주세요.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-500"
          >
            이메일 보내기
          </a>
        </div>
      </div>
    </section>
  );
}
