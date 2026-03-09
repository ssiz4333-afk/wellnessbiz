import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ValueProposition from "@/components/landing/ValueProposition";
import ServicesSection from "@/components/landing/ServicesSection";
import CenterSection from "@/components/landing/CenterSection";
import DoterraSection from "@/components/landing/DoterraSection";
import HealingHandsSection from "@/components/landing/HealingHandsSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <ValueProposition />
    <ServicesSection />
    <CenterSection />
    <DoterraSection />
    <HealingHandsSection />
    <AboutSection />
    <ContactSection />
    <Footer />
    <FloatingCTA />
  </main>
);

export default Index;
