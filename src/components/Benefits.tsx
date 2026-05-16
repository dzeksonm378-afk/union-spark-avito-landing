import { benefitMetrics, benefits, safePhrases } from "@/data/landingContent";
import { MetricPill } from "@/components/MetricPill";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Benefits() {
  return (
    <section id="benefits" className="border-b border-line py-16 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Преимущества и цифры"
              title="Работа в цифрах, стратегии и технологиях"
              description="Позиция из КП: работать с бизнесом так, будто мы им владеем, и строить продвижение вокруг бюджета, органики и возможности масштабирования."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefitMetrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 80}>
                  <MetricPill label={metric.label} value={metric.value} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160}>
            <div className="mono-card card-hover p-6 sm:p-8">
              <div className="grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
                    <p className="text-base leading-7 text-graphite">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[18px] border border-line bg-paper p-5">
                <p className="text-sm font-semibold text-ink">Безопасный язык для сайта</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {safePhrases.map((phrase) => (
                    <span key={phrase} className="pill">
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
