import { brand, contacts, navigation } from "@/data/landingContent";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <BrandLogo compact />
          <p className="mt-4 text-sm font-semibold text-ink">{brand.serviceLine}</p>
          <p className="mt-2 text-sm text-graphite">
            {contacts.contactName} · Telegram: {contacts.telegramHandle}
          </p>
          <p className="mt-1 text-sm text-graphite">
            Телефоны: {contacts.phoneDisplay} · {contacts.secondaryPhoneDisplay}
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-graphite" aria-label="Навигация в подвале">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
