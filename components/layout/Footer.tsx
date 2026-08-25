export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-6 border-t border-border bg-surface flex justify-between items-center text-[12px] tracking-[0.07em] text-text-2 flex-wrap gap-2">
      <span>&copy; 2026 Pansilu Jayawardane</span>
      <div className="flex gap-8">
        <a href="#hero" className="text-text-2 no-underline transition-colors duration-150 hover:text-text">
          Back to top &uarr;
        </a>
        <span>Designed &amp; coded from scratch</span>
      </div>
    </footer>
  );
}
