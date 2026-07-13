import { Hero } from "@/components/sections/hero";
import { Packages } from "@/components/sections/packages";
import { Problems } from "@/components/sections/problems";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SymptomChecker } from "@/components/sections/symptom-checker";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Packages />
      <Problems />
      <HowItWorks />
      <SymptomChecker />
      <Testimonials />
      <Team />
      <FaqSection />
      <FinalCta />
    </>
  );
}
