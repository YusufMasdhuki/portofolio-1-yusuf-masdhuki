import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import RealImpactSection from './home/partials/real-impact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RealImpactSection />
      <Footer />
    </>
  );
}
