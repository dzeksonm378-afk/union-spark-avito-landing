import { solution } from "@/data/landingContent";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Solution() {
  return (
    <section id="solution" className="border-b border-line bg-white/55 py-16 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Решение"
          title="Берём регулярную работу с Avito на себя"
          description={solution.intro}
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-ink bg-ink md:grid-cols-2 lg:grid-cols-5">
          {solution.steps.map((step, index) => (
            <Reveal key={step} className="bg-paper" delay={index * 80}>
              <div className="card-hover bg-paper p-5 sm:p-6">
                <span className="text-xs font-semibold text-graphite">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-base leading-7 text-ink">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
