import { AdditionalServices } from "@/components/AdditionalServices";
import { Benefits } from "@/components/Benefits";
import { Cases } from "@/components/Cases";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OtherNiches } from "@/components/OtherNiches";
import { Pricing } from "@/components/Pricing";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Benefits />
        <Team />
        <Cases />
        <OtherNiches />
        <Pricing />
        <AdditionalServices />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
