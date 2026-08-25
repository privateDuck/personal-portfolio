import { writingArticles } from '@/config/portfolio-data';

export function Writing() {
  return (
    <section id="writing" className="px-6 md:px-12 py-20 md:py-28 relative overflow-hidden bg-surface-2 border-y border-border">
      <div className="absolute -top-[0.15em] right-6 md:right-8 font-sans font-extrabold text-[clamp(8rem,18vw,16rem)] tracking-[-0.06em] text-surface-3/50 leading-none pointer-events-none select-none z-0">
        06
      </div>

      <div className="flex items-center gap-4 mb-14">
        <span className="font-sans font-bold text-[12px] tracking-[0.15em] uppercase text-accent">
          06 - Writing
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col gap-px bg-border border border-border relative z-[1]">
        {writingArticles.length > 0 ? (
          writingArticles.map((article) => (
            <a
              key={article.id}
              href={article.href}
              className="bg-surface px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start cursor-pointer transition-colors duration-200 hover:bg-surface-3 no-underline group"
            >
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[11px] tracking-[0.1em] uppercase text-text-3">
                    {article.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border-2" />
                  <span className="text-[11px] tracking-[0.1em] uppercase text-accent-hi">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-[clamp(1.1rem,2vw,1.4rem)] tracking-tight uppercase text-text mb-3 leading-[1.2] transition-colors group-hover:text-accent-hi">
                  {article.title}
                </h3>

                <p className="text-[13.5px] text-text-2 leading-[1.8] max-w-[640px]">
                  {article.excerpt}
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-3 transition-all duration-200 group-hover:border-accent-hi group-hover:text-accent-hi group-hover:translate-x-2">
                ↗
              </div>
            </a>
          ))
        ) : (
          <div className="bg-surface px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[11px] tracking-[0.1em] uppercase text-accent">
                  Upcoming
                </span>
                <span className="w-1 h-1 rounded-full bg-border-2" />
                <span className="text-[11px] tracking-[0.1em] uppercase text-text-3">
                  In Progress
                </span>
              </div>
              <h3 className="font-sans font-bold text-[clamp(1.1rem,2vw,1.4rem)] tracking-tight uppercase text-text-3 mb-2 leading-[1.2]">
                Articles Coming Soon
              </h3>
              <p className="text-[13.5px] text-text-2 leading-[1.8] max-w-[640px]">
                Technical articles will be published here soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
