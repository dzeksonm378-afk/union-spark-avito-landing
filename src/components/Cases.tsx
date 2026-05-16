import { cases } from "@/data/landingContent";
import type { LandingCase } from "@/data/landingContent";
import { MetricPill } from "@/components/MetricPill";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Cases() {
  const appleCase = cases.find(
    (item): item is Extract<LandingCase, { type: "beforeAfter" }> =>
      item.type === "beforeAfter",
  );
  const simpleCases = cases.filter(
    (item): item is Extract<LandingCase, { type: "simple" }> =>
      item.type === "simple",
  );

  if (!appleCase) {
    return null;
  }

  return (
    <section id="cases" className="border-b border-line py-16 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Кейсы"
          title="Презентационные карточки с цифрами из КП"
          description="Показываем только подтвержденные показатели: просмотры, объявления, контакты и стоимость контакта."
        />

        <Reveal className="mt-12">
          <article className="diagonal-frame mono-card card-hover p-5 sm:p-8">
            <div className="relative z-10">
              <div className="flex flex-col justify-between gap-6 border-b border-line pb-6 lg:flex-row lg:items-end">
                <div>
                  <p className="pill mb-4">до / после</p>
                  <h3 className="text-3xl font-semibold text-ink sm:text-5xl">{appleCase.title}</h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-graphite">
                  Рекомендуемый акцент: рост просмотров и контактов, снижение стоимости контакта.
                </p>
              </div>

              {appleCase ? (
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-ink">До работы команды</h4>
                      <span className="pill">старт</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {appleCase.before.map((metric, index) => (
                        <Reveal key={`before-${metric.label}`} delay={index * 80}>
                          <MetricPill label={metric.label} value={metric.value} />
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-ink">После работы команды</h4>
                      <span className="pill border-ink bg-ink text-white">результат</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {appleCase.after.map((metric, index) => (
                        <Reveal key={`after-${metric.label}`} delay={index * 80}>
                          <MetricPill label={metric.label} value={metric.value} />
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {simpleCases.map((item, index) => (
            <Reveal key={item.title} delay={(index + 1) * 80}>
              <article className="mono-card card-hover p-5 sm:p-7">
                <p className="pill mb-5">кейс</p>
                <h3 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {item.metrics.map((metric) => (
                    <MetricPill key={`${item.title}-${metric.label}`} label={metric.label} value={metric.value} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
