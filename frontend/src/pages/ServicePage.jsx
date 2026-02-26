import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug, SERVICE_SLUGS } from '../config/servicesData';
import Navbar from '../components/Layout/Navbar';
import ServiceHero from '../components/Sections/ServiceHero';
import ServiceImageCopy from '../components/Sections/ServiceImageCopy';
import ServiceFeatures from '../components/Sections/ServiceFeatures';
import CtaBanner from '../components/Sections/CtaBanner';
import FAQSection from '../components/Sections/FAQSection';
import Footer from '../components/Layout/Footer';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service || !SERVICE_SLUGS.includes(slug)) {
    return <Navigate to="/" replace />;
  }

  const { hero, imageCopy, features } = service;

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          micro={hero.micro}
          headline={hero.headline}
          subheadline={hero.subheadline}
        />
        <ServiceImageCopy
          image={imageCopy.image}
          imageAlt={imageCopy.imageAlt}
          heading={imageCopy.heading}
          paragraphs={imageCopy.paragraphs}
        />
        <ServiceFeatures features={features} />
        <CtaBanner />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
