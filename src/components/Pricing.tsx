import { contacts, pricing } from "@/data/landingContent";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-white/55 py-16 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Тарифы"
          title="Три формата ведения Avito"
          description="МИНИМАЛЬНЫЙ для тестового запуска, СРЕДНИЙ для системного ведения, PRO пакет для масштабирования и сложных ниш."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricing.map((tariff, index) => (
            <Reveal key={tariff.name} delay={index * 80}>
              <article
                className={`card-hover flex flex-col rounded-[24px] border bg-white/90 p-6 shadow-fine ${
                  tariff.featured ? "border-ink ring-1 ring-ink" : "border-ink/80"
                }`}
              >
                <div className="border-b border-line pb-6">
                  <div className="flex min-h-8 items-center justify-between gap-3">
                    <h3 className="text-3xl font-semibold text-ink">{tariff.name}</h3>
                    {tariff.badge ? <span className="pill border-ink">{tariff.badge}</span> : null}
                  </div>
                  <p className="mt-6 text-4xl font-semibold text-ink">{tariff.price}</p>
                  <p className="mt-4 min-h-16 text-sm leading-6 text-graphite">{tariff.audience}</p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tariff.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-graphite">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className={tariff.featured ? "button-primary mt-8" : "button-secondary mt-8"}
                  href={contacts.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tariff.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
