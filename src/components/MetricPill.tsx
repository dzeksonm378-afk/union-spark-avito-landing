type MetricPillProps = {
  label: string;
  value: string;
  dark?: boolean;
};

export function MetricPill({ label, value, dark = false }: MetricPillProps) {
  return (
    <div
      className={`card-hover rounded-2xl border p-2 ${
        dark ? "border-white/20 bg-white/10" : "border-line bg-white"
      }`}
    >
      <div
        className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase ${
          dark ? "bg-white/10 text-white/70" : "bg-mist text-graphite"
        }`}
      >
        {label}
      </div>
      <div
        className={`mt-2 rounded-xl px-3 py-4 text-2xl font-semibold leading-none sm:text-3xl ${
          dark ? "bg-white text-ink" : "bg-paper text-ink"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
