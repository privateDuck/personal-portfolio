import { techStackItems } from '@/config/portfolio-data';

export function TechStrip() {
  return (
    <div className="bg-surface border-b border-border py-[0.85rem] px-6 md:px-12 flex items-center gap-0 overflow-x-auto whitespace-nowrap">
      <span className="text-[11px] tracking-[0.18em] uppercase text-text-2 mr-8 flex-shrink-0 border-r border-border-2 pr-8">
        Stack
      </span>
      <div className="flex gap-0 flex-nowrap">
        {techStackItems.map((item) => (
          <span
            key={item.label}
            className={`text-[12.5px] tracking-[0.08em] px-5 border-r border-border transition-colors duration-150 flex-shrink-0 ${
              item.hi ? 'text-accent-hi' : 'text-text-2 hover:text-text'
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
