import { problems } from "@/data/landingContent";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Problems() {
  return (
    <section id="service" className="border-b border-line py-16 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Почему нужна система"
            title="Avito работает лучше, когда им занимаются регулярно"
            description="Разовые публикации быстро упираются в рутину, аналитику, тексты, креативы и техническую подготовку размещений."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <Reveal key={problem} delay={index * 80}>
                <article className="mono-card card-hover p-5">
                  <span className="pill">0{index + 1}</span>
                  <p className="mt-6 text-base leading-7 text-graphite">{problem}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
