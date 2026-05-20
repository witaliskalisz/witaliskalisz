import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Packages } from "@/components/sections/packages";
import { SymptomChecker } from "@/components/sections/symptom-checker";
import { AthleteSection } from "@/components/sections/athlete-section";
import { B2BSection } from "@/components/sections/b2b-section";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <HowItWorks />
      <Packages />
      <SymptomChecker />
      <AthleteSection />
      <B2BSection />
      <WhyUs />
      <Testimonials />
      <Team />
      <BlogPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
