import { otherNiches } from "@/data/landingContent";
import { Reveal } from "@/components/Reveal";

export function OtherNiches() {
  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="diagonal-frame card-hover overflow-hidden rounded-[28px] border border-ink bg-[linear-gradient(135deg,#101010_0%,#2b2d31_55%,#111111_100%)] p-6 text-white sm:p-10 lg:p-12">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  Другие ниши
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  Работали не только с товарами, но и со сложными услугами
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {otherNiches.map((niche, index) => (
                  <Reveal key={niche} delay={index * 80}>
                    <div className="card-hover rounded-2xl border border-white/20 bg-white/10 p-5 text-lg font-medium">
                      {niche}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
