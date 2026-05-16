import { team } from "@/data/landingContent";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Team() {
  return (
    <section id="team" className="border-b border-line bg-white/55 py-16 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Команда"
          title="5 узкопрофильных специалистов над проектом"
          description="Каждая роль закрывает свою часть системы: от аналитики и текстов до визуала, технической настройки и контроля бюджета."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {team.map((member, index) => (
            <Reveal key={member.role} delay={index * 80}>
              <article className="mono-card card-hover flex flex-col justify-between gap-8 p-5 md:min-h-64 lg:min-h-72">
                <span className="text-xs font-semibold text-graphite">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-ink">{member.role}</h3>
                  <p className="mt-5 text-sm leading-6 text-graphite">{member.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
