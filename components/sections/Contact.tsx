import { contactRows } from '@/config/portfolio-data';

export function Contact() {
  return (
    <section id="contact" className="bg-surface px-6 md:px-12 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-[0.15em] right-6 md:right-8 font-sans font-extrabold text-[clamp(8rem,18vw,16rem)] tracking-[-0.06em] text-surface-3 leading-none pointer-events-none select-none z-0">
        07
      </div>

      <div className="flex items-center gap-4 mb-14">
        <span className="font-sans font-bold text-[12px] tracking-[0.15em] uppercase text-accent">
          07 - Contact
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-[1]">
        <div>
          <h2 className="font-sans font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-tight uppercase text-text leading-none mb-6">
            Let&apos;s build<br />something<br /><span className="text-text-3">worth building.</span>
          </h2>
          <p className="text-[14px] text-text-2 leading-[1.9] mb-8">
            I&apos;m open to new opportunities, interesting technical conversations, and collaborative side projects. If you&apos;re working on something in systems, graphics, or ML infrastructure - I&apos;d genuinely like to hear about it.
          </p>
          <a
            href="mailto:stsp.official@gmail.com"
            className="inline-flex font-mono text-[12px] tracking-[0.1em] uppercase no-underline py-[0.65rem] px-6 bg-accent text-white border border-accent transition-colors duration-200 hover:bg-accent-hi hover:border-accent-hi"
          >
            Send an Email
          </a>
        </div>

        <div className="flex flex-col gap-px bg-border border border-border">
          {contactRows.map((row) => (
            <a
              key={row.platform}
              href={row.href}
              className="flex items-center justify-between px-6 py-4 bg-surface-2 no-underline text-text-2 transition-colors duration-150 hover:bg-surface-3 hover:text-text gap-4 group"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[11.5px] tracking-[0.1em] uppercase text-text-2 transition-colors duration-150 group-hover:text-accent-hi">
                  {row.platform}
                </span>
                <span className="text-[14.5px] text-inherit">{row.handle}</span>
              </div>
              <span className="text-text-3 text-base transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-accent-hi">
                {row.arrow}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
