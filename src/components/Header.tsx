import { navigation } from "@/data/landingContent";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <a href="#top" aria-label="На первый экран">
          <BrandLogo compact />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-graphite transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a className="button-primary px-4 py-2 text-xs sm:text-sm" href="#contacts">
            Обсудить
          </a>
        </div>
      </div>
    </header>
  );
}
