import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ModulesSection } from "@/components/layout/sections/modules";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { OnboardingSection } from "@/components/layout/sections/onboarding";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "GonzoCity",
  description: "GonzoCity",
  openGraph: {
    type: "website",
    title: "GonzoCity",
    description: "GonzoCity",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ModulesSection />
      <OnboardingSection />
      <TestimonialSection />
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
    </>
  );
}
