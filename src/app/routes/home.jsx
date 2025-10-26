import PageLayout from '@components/layout/page-layout';
import HeroSection from '@features/home/components/hero-section';
import WhyUsSection from '@features/home/components/why-us-section';
import FeaturesSection from '@features/home/components/features-section';
import SecureAccessSection from '@features/home/components/secure-access-section';
import TestimonialsSection from '@features/home/components/testimonials-section';
import BillingInfrastructureSection from '@features/home/components/billing-infrastructure-section';

function HomePage() {
  return (
    <PageLayout title="Visit www.pixelrocket.store to learn how to become a frontend web developer">
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
      <SecureAccessSection />
      <TestimonialsSection />
      <BillingInfrastructureSection />
    </PageLayout>
  );
}

export default HomePage;
