import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import StickyContactBar from "@/components/StickyContactBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TreatmentsGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyContactBar />
    </div>
  );
};

export default Index;
