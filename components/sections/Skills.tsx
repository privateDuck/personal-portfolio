import { languages, techGridItems } from '@/config/portfolio-data';
import type { DotState } from '@/config/portfolio-data';
import {
  SiCplusplus, SiRust, SiVulkan, SiOpengl, SiPython, SiFastapi, SiPytorch,
  SiTypescript, SiReact, SiNextdotjs, SiDotnet, SiCmake, SiLinux, SiJavascript,
  SiSqlite, SiMongodb, SiDuckdb, SiPostgresql, SiMysql, SiGit, SiUnity, SiNodedotjs,
  SiHtml5, SiTailwindcss,
  SiQt,
  SiDocker,
  SiElectron
} from 'react-icons/si';
import { DiJava, DiCss3 } from 'react-icons/di'
import { FaGolang, FaAws } from 'react-icons/fa6'

const iconMap: Record<string, React.ElementType> = {
  SiCplusplus, SiRust, SiVulkan, SiOpengl, SiPython, SiFastapi, SiPytorch,
  SiTypescript, SiReact, SiNextdotjs, DiJava, SiDotnet, SiCmake, SiLinux,
  SiJavascript, SiSqlite, SiMongodb, SiDuckdb, SiPostgresql, SiMysql, SiGit,
  SiUnity, SiNodedotjs, SiHtml5, DiCss3, SiTailwindcss, FaGolang, FaAws, SiQt,
  SiDocker, SiElectron
};

function Dot({ state }: { state: DotState }) {
  if (state === 'filled') {
    return <span className="w-2 h-2 rounded-full bg-accent border border-accent" />;
  }
  if (state === 'half') {
    return <span className="w-2 h-2 rounded-full bg-transparent border border-accent" />;
  }
  return <span className="w-2 h-2 rounded-full bg-border-2 border border-border-2" />;
}

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-[0.15em] right-6 md:right-8 font-sans font-extrabold text-[clamp(8rem,18vw,16rem)] tracking-[-0.06em] text-surface-3 leading-none pointer-events-none select-none z-0">
        03
      </div>

      <div className="flex items-center gap-4 mb-14">
        <span className="font-sans font-bold text-[12px] tracking-[0.15em] uppercase text-accent">
          03 - Expertise
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <h2 className="font-sans font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight uppercase text-text leading-[1.05] relative z-[1] mb-10">
        Languages &amp; Proficiency
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-16 relative z-[1]">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="bg-surface-2 px-6 py-5 flex flex-col gap-2 transition-colors duration-150 hover:bg-surface-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-sans font-bold text-[0.95rem] tracking-[-0.01em] text-text">
                {lang.name}
              </span>
              {/* <span className="text-[11.5px] text-text-2 tracking-[0.06em]">{lang.years}</span> */}
            </div>
            <div className="text-[13px] text-text-2 tracking-[0.03em]">{lang.note}</div>
          </div>
        ))}
      </div>

      <h2 className="font-sans font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight uppercase text-text leading-[1.05] relative z-[1] mb-8">
        Tech Stack
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-border border border-border relative z-[1]">
        {techGridItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.name}
              className="bg-surface-2 flex flex-col items-center justify-center py-8 px-4 gap-4 transition-all duration-200 hover:bg-surface-3 group cursor-default"
            >
              {Icon && <Icon className="text-[2.5rem] text-text-2 group-hover:text-text transition-colors duration-200" />}
              <span className="hidden md:block font-mono font-semibold text-[13px] tracking-wide text-text-2 group-hover:text-text transition-colors duration-200">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
