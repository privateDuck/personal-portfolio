import { experiences } from '@/config/portfolio-data';

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-20 md:py-28 relative overflow-hidden bg-surface">
      <div className="absolute -top-[0.15em] right-6 md:right-8 font-sans font-extrabold text-[clamp(8rem,18vw,16rem)] tracking-[-0.06em] text-surface-3 leading-none pointer-events-none select-none z-0">
        04
      </div>

      <div className="flex items-center gap-4 mb-14">
        <span className="font-sans font-bold text-[12px] tracking-[0.15em] uppercase text-accent">
          04 - Experience
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col border border-border relative z-[1]">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-border last:border-b-0 transition-colors duration-150 hover:bg-surface-2"
          >
            <div className="px-5 md:px-7 py-6 md:border-r border-b border-border md:border-b-0 bg-surface-2 md:bg-transparent flex items-start">
              <span className="text-[11.5px] tracking-[0.1em] text-text-3 uppercase">
                {exp.duration}
              </span>
            </div>
            <div className="px-5 md:px-7 py-6 flex flex-col gap-2">
              <h3 className="font-sans font-bold text-[1.2rem] tracking-tight uppercase text-text leading-none">
                {exp.role}
              </h3>
              <span className="text-[12px] tracking-[0.05em] uppercase text-accent-hi mb-2 block">
                {exp.company}
              </span>
              <p className="text-[13.5px] text-text-2 leading-[1.8] max-w-[600px]">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
