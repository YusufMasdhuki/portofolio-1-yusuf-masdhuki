import ChooseWiselySection from './home/partials/choose-wisely';
import ExperiencedSection from './home/partials/experienced';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import RealImpactSection from './home/partials/real-impact';
import YearsOfBuilding from './home/partials/years-of-building';

export default function Home() {
  return (
    <div className='w-full'>
      <Navbar />
      <Hero />
      <RealImpactSection />
      <ExperiencedSection />
      <ChooseWiselySection />
      <YearsOfBuilding />
      <Footer />
    </div>
  );
}
