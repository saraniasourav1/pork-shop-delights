import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Features from '@/components/home/Features';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
