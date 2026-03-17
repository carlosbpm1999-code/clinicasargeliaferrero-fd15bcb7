import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import AboutSection from "@/components/AboutSection";
import ClinicGallery from "@/components/ClinicGallery";
import ContactSection from "@/components/ContactSection";
import StickyContactBar from "@/components/StickyContactBar";
import Footer from "@/components/Footer";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TreatmentsGrid />
        <AboutSection />
        <ClinicGallery />
        <ContactSection />
      </main>
      <Footer />
      <StickyContactBar />
      <WhatsAppChatButton />
    </div>
  );
};

export default Index;
