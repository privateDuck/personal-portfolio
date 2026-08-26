import { aboutStats, aboutMetaRows } from '@/config/portfolio-data';

export function About() {
  return (
    <section id="about" className="bg-surface px-6 md:px-12 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-[0.15em] right-6 md:right-8 font-sans font-extrabold text-[clamp(8rem,18vw,16rem)] tracking-[-0.06em] text-surface-3 leading-none pointer-events-none select-none z-0">
        02
      </div>

      <div className="flex items-center gap-4 mb-14">
        <span className="font-sans font-bold text-[12px] tracking-[0.15em] uppercase text-accent">
          02 - About
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-16 relative z-[1]">
        {aboutStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-2 px-5 md:px-7 py-6 transition-colors duration-200 hover:bg-surface-3"
          >
            <div className="font-sans font-bold text-[2.4rem] tracking-tight text-text leading-none mb-2">
              {stat.num}
              {stat.unit && <span className="text-accent-hi text-[1.5rem]">{stat.unit}</span>}
            </div>
            <div className="text-[11.5px] tracking-[0.1em] uppercase text-text-2 leading-relaxed whitespace-pre-line">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 relative z-[1]">
        <div>
          <h2 className="font-mono2 font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight text-text leading-[1.05]">
            EVERY μs COUNTS<br /> WHEN THE BUDGET IS ms
          </h2>
          <p className="text-[15px] text-text-2 leading-[1.85] mt-4 mb-7">
            I started programming about a decade ago, with C++ of all languages.
            Back then, I just wanted to write physics simulations cause it was interesting.
            Never thought I&apos;d end up majoring in Computer Science, but here we are.
          </p>
          <p className="text-[15px] text-text-2 leading-[1.9] mb-4">
            My primary domain is <strong className="text-text font-medium">systems programming</strong>.
            I write C++ for performance-critical work and I&apos;m actively migrating that knowledge into Rust.
            I care about memory models, cache behaviour, and optimizations.
          </p>
          {/* <p className="text-[15px] text-text-2 leading-[1.9] mb-4">
            I&apos;m also deep into <strong className="text-text font-medium">graphics programming </strong>
            &amp; utilizing <strong className="text-text font-medium">GPGPU</strong> methods to write high performance code.
          </p>
          <p className="text-[15x] text-text-2 leading-[1.9] mb-4">
            Outside that core, I&apos;m proficient in <strong className="text-text font-medium">Python</strong> for ML workflows and API backends,
            and I can ship full fledged web interfaces in React and Next.js.
            I don&apos;t call myself a web developer, but I have technical capabilities to work with web infra and services as well.
          </p> */}
        </div>

        <div className="font-mono2 flex flex-col border border-border">
          {aboutMetaRows.map((row) => (
            <div
              key={row.key}
              className="grid grid-cols-[0.8fr_1.2fr] border-b border-border last:border-b-0 text-[13px]"
            >
              <div className="px-4 py-3 text-text-2 text-[12px] tracking-[0.1em] uppercase bg-surface-2 border-r border-border flex items-center">
                {row.key}
              </div>
              <div className="px-4 py-3 text-text-2 flex items-center leading-relaxed">
                {row.href ? (
                  <a href={row.href} className="text-accent-hi no-underline hover:underline">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
