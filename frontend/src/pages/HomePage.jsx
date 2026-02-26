import Navbar from '../components/Layout/Navbar';
import Hero, { HeroTrustCards } from '../components/Sections/Hero';
import AuthoritySection from '../components/Sections/AuthoritySection';
import ServicesSection from '../components/Sections/ServicesSection';
import CtaBanner from '../components/Sections/CtaBanner';
import IntegritySection from '../components/Sections/IntegritySection';
import CtaStrip from '../components/Sections/CtaStrip';
import ContactSection from '../components/Sections/ContactSection';
import FAQSection from '../components/Sections/FAQSection';
import Footer from '../components/Layout/Footer';
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroTrustCards />
      <AuthoritySection />
      <ServicesSection />
      <CtaBanner />
      <IntegritySection />
      <CtaStrip />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default HomePage;
