import { additionalServices } from "@/data/landingContent";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function AdditionalServices() {
  const expandedServices = additionalServices.filter((service) => service.description);
  const compactServices = additionalServices.filter((service) => !service.description);

  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Дополнительные услуги"
          title="Отдельные задачи, которые можно подключить к ведению"
          description="Список и цены перенесены из КП без дополнительных услуг от себя."
        />

        <div className="mt-12 grid gap-4">
          {expandedServices.map((service, index) => (
            <Reveal key={service.name} delay={index * 80}>
              <article className="card-hover rounded-[24px] border border-ink bg-white p-5 shadow-fine sm:p-6 lg:p-7">
                <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div>
                    {service.eyebrow ? <p className="pill mb-5">{service.eyebrow}</p> : null}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                          {service.name}
                        </h3>
                        {service.description ? (
                          <p className="mt-4 max-w-2xl text-base leading-7 text-graphite">
                            {service.description}
                          </p>
                        ) : null}
                      </div>
                      <p className="w-fit shrink-0 whitespace-nowrap rounded-full border border-ink bg-paper px-4 py-2 text-xl font-semibold text-ink">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {service.items?.length ? (
                    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                      {service.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-graphite">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}

          <div className="overflow-hidden rounded-[24px] border border-ink bg-white">
            {compactServices.map((service, index) => (
              <Reveal
                key={service.name}
                className="border-b border-line last:border-b-0"
                delay={(expandedServices.length + index) * 80}
              >
                <div className="card-hover grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
                  <p className="text-lg font-medium leading-7 text-ink">{service.name}</p>
                  <p className="w-fit whitespace-nowrap rounded-full border border-line bg-paper px-4 py-2 text-xl font-semibold text-ink">
                    {service.price}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
