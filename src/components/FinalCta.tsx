import { contacts } from "@/data/landingContent";
import { BrandLogo } from "@/components/BrandLogo";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section id="contacts" className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="diagonal-frame mono-card p-6 sm:p-10 lg:p-14">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <BrandLogo compact />
                <p className="pill w-fit">Связаться с нами</p>
              </div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-ink sm:text-6xl">
                Соберем систему продвижения на Avito под ваш бизнес
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">
                Напишите в Telegram или WhatsApp, чтобы обсудить нишу, бюджет и подходящий тариф.
              </p>
            </div>

            <Reveal delay={120}>
              <div className="card-hover rounded-[22px] border border-line bg-paper p-5">
                <div className="grid gap-3">
                  <a className="button-primary w-full" href={contacts.telegramUrl} target="_blank" rel="noreferrer">
                    Написать в Telegram
                  </a>
                  <a className="button-secondary w-full" href={contacts.whatsappUrl} target="_blank" rel="noreferrer">
                    Написать в WhatsApp
                  </a>
                  <a className="button-secondary w-full" href={contacts.phoneHref}>
                    Позвонить
                  </a>
                </div>
                <div className="mt-5 border-t border-line pt-5 text-sm leading-7 text-graphite">
                  <p>Контактное лицо: {contacts.contactName}</p>
                  <p>Telegram: {contacts.telegramHandle}</p>
                  <p>Основной телефон / WhatsApp: {contacts.phoneDisplay}</p>
                  <p>Второй телефон: {contacts.secondaryPhoneDisplay}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
