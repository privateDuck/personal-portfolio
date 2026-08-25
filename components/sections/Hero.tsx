import { heroStats } from '@/config/portfolio-data';

function CodeCard() {
  return (
    <div className="bg-surface-2 border border-border-2 border-t-2 border-t-accent overflow-hidden">
      <div className="flex items-center justify-between px-4 py-[0.65rem] border-b border-border bg-surface">
        <span className="text-[13px] tracking-[0.06em] text-text-3">me.hpp · v2025.1.0</span>
        <div className="flex gap-[5px]">
          <span className="w-2 h-2 rounded-full bg-accent-dim" />
          <span className="w-2 h-2 rounded-full bg-border-2" />
          <span className="w-2 h-2 rounded-full bg-border-2" />
        </div>
      </div>
      <pre className="p-6 text-[14.5px] leading-7 overflow-x-auto font-mono">
        <span className="text-text-3 italic">{'// --- Systems Programmer ---'}</span>{'\n'}
        {'\n'}
        <span className="text-code-keyword">{'class'}</span>{' '}<span className="text-code-type">{'Engineer'}</span>{' {'}{'\n'}
        {'  '}<span className="text-code-keyword">{'const'}</span>{' std::string name  '}<span className="text-text-3">{'='}</span>{' '}<span className="text-code-string">{'"Pansilu Jayawardane"'}</span>{';'}{'\n'}
        {'  '}<span className="text-code-keyword">{'const'}</span>{' std::string focus '}<span className="text-text-3">{'='}</span>{' '}<span className="text-code-string">{'"systems & data science"'}</span>{';'}{'\n'}
        {'\n'}
        {'  std::array<std::string, '}<span className="text-code-string">{'4'}</span>{'> core '}<span className="text-text-3">{'='}</span>{' {'}{'\n'}
        {'    '}<span className="text-code-string">{'"C++"'}</span>{', '}<span className="text-code-string">{'"C#"'}</span>{', '}<span className="text-code-string">{'"Python"'}</span>{', '}<span className="text-code-string">{'"Typescript"'}</span>{'\n'}
        {'  };'}{'\n'}
        {'\n'}
        <span className="text-code-keyword">{'public'}</span>{':'}{'\n'}
        {'  '}<span className="text-code-keyword">{'auto'}</span>{' '}<span className="text-code-fn">{'build'}</span>{'()  '}<span className="text-text-3">{'->'}</span>{' '}<span className="text-code-keyword">{'void'}</span>{';   '}<span className="text-text-3 italic">{'// always'}</span>{'\n'}
        {'  '}<span className="text-code-keyword">{'auto'}</span>{' '}<span className="text-code-fn">{'ship'}</span>{'()   '}<span className="text-text-3">{'->'}</span>{' '}<span className="text-code-keyword">{'void'}</span>{';   '}<span className="text-text-3 italic">{'// when ready'}</span>{'\n'}
        {'  '}<span className="text-code-keyword">{'auto'}</span>{' '}<span className="text-code-fn">{'iterate'}</span>{'() '}<span className="text-text-3">{'->'}</span>{' '}<span className="text-code-keyword">{'void'}</span>{';  '}<span className="text-text-3 italic">{'// always'}</span>{'\n'}
        {'};'}
      </pre>
    </div>
  );
}

function StatStrip() {
  return (
    <div className="grid grid-cols-2 border border-border-2 border-t-0">
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="px-5 py-4 border-r border-border last:border-r-0"
        >
          <div className="font-sans font-bold text-[2.5rem] tracking-tight text-text leading-none mb-[0.2rem]">
            {stat.num}
          </div>
          <div className="text-[12.5px] tracking-[0.1em] uppercase text-text-3 whitespace-pre-line">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-12 pt-28 pb-16 relative overflow-hidden border-b border-border"
    >
      <div className="relative z-[1]">
        {/* <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-border-2 bg-surface-2 mb-7">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-3">Available for opportunities</span>
        </div> */}

        <h1 className="font-sans font-bold text-[clamp(2.2rem,8vw,5.5rem)] leading-tight tracking-tight uppercase text-text mb-6 break-words">
          Pansilu<br />
          <span className="text-text-3">Jayawardane</span>
        </h1>

        <p className="text-[13px] tracking-[0.05em] text-text-2 mb-10 uppercase">
          Systems Engineer / <span className="text-accent-hi">Undergraduate</span> / Backend Dev
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#projects" className="text-center font-mono text-[11px] tracking-[0.1em] uppercase no-underline py-[0.65rem] px-6 bg-accent text-white border border-accent transition-colors duration-200 hover:bg-accent-hi hover:border-accent-hi">
            View Projects
          </a>
          {/* <a href="resume.pdf" className="text-center font-mono text-[11px] tracking-[0.1em] uppercase no-underline py-[0.65rem] px-6 bg-transparent text-text-2 border border-border-2 transition-colors duration-200 hover:text-text hover:border-text-3">
            Download CV
          </a> */}
          <a href="#contact" className="text-center font-mono text-[11px] tracking-[0.1em] uppercase no-underline py-[0.65rem] px-6 bg-transparent text-text-2 border border-border-2 transition-colors duration-200 hover:text-text hover:border-text-3">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="relative z-[1] flex flex-col gap-6">
        <div className="hidden lg:block">
          <CodeCard />
        </div>
        <StatStrip />
      </div>
    </section>
  );
}
