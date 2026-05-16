import { additionalServices } from "@/data/landingContent";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function AdditionalServices() {
  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Дополнительные услуги"
          title="Отдельные задачи, которые можно подключить к ведению"
          description="Список и цены перенесены из КП без дополнительных услуг от себя."
        />

        <div className="mt-12 overflow-hidden rounded-[24px] border border-ink bg-white">
          {additionalServices.map((service, index) => (
            <Reveal
              key={service.name}
              className="border-b border-line last:border-b-0"
              delay={index * 80}
            >
              <div className="card-hover grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
                <p className="text-lg font-medium leading-7 text-ink">{service.name}</p>
                <p className="rounded-full border border-line bg-paper px-4 py-2 text-xl font-semibold text-ink">
                  {service.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
