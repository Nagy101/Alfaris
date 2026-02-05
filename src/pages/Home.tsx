import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <SEO />
      <div className="animate-fade-in">
        <HeroSection />
        <ServicesSection />
      </div>
    </>
  );
}
