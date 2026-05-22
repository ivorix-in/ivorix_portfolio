const BRANDS = ["TechCorp", "InnovateAI", "CloudBase", "DataFlow", "AutoMa"] as const;

export default function LogoStrip() {
  return (
    <div
      className="flex w-full flex-wrap items-center justify-center gap-8 border-t border-slate-200/60 pt-3 md:gap-10"
      aria-label="Trusted by leading companies"
    >
      {BRANDS.map((brand) => (
        <span
          key={brand}
          className="text-[13px] font-semibold tracking-wide text-slate-400 transition-colors duration-200 hover:text-slate-500"
        >
          {brand}
        </span>
      ))}
    </div>
  );
}
