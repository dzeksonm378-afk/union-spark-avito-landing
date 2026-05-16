import { contacts, hero } from "@/data/landingContent";
import { BrandLogo } from "@/components/BrandLogo";
import { MetricPill } from "@/components/MetricPill";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line pt-10 sm:pt-16">
      <div className="section-shell pb-16 pt-8 sm:pb-24 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <Reveal>
              <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <BrandLogo />
                <p className="pill w-fit">Система продвижения на Avito</p>
              </div>
            </Reveal>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
              {hero.subtitle}
            </p>
            <p className="mt-6 max-w-xl border-l border-ink pl-5 text-base font-medium leading-7 text-ink">
              {hero.statement}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href={contacts.telegramUrl} target="_blank" rel="noreferrer">
                Получить консультацию
              </a>
              <a className="button-secondary" href="#cases">
                Смотреть кейсы
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {hero.metrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 80}>
                  <div className="card-hover rounded-2xl border border-line bg-white/80 p-4">
                    <p className="text-xs text-graphite">{metric.label}</p>
                    <p className="mt-2 text-xl font-semibold text-ink">{metric.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160}>
            <div className="diagonal-frame mono-card card-hover p-4 sm:p-6 lg:p-8">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
                  <div>
                    <p className="text-xs uppercase text-graphite">пример из кейса</p>
                    <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                      Apple техника
                    </h2>
                  </div>
                  <span className="rounded-full border border-ink bg-white px-3 py-1 text-xs font-semibold">
                    после
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {hero.dashboard.map((metric, index) => (
                    <Reveal key={metric.label} delay={240 + index * 80}>
                      <MetricPill label={metric.label} value={metric.value} />
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 rounded-[18px] border border-line bg-paper p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-ink">Размещения</span>
                    <span className="text-sm text-graphite">стабильная работа</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white">
                    <div className="h-2 w-[78%] rounded-full bg-ink" />
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-graphite">
                    <span className="rounded-full bg-white px-2 py-2">SEO</span>
                    <span className="rounded-full bg-white px-2 py-2">креативы</span>
                    <span className="rounded-full bg-white px-2 py-2">заявки</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
