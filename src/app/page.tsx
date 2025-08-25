import ChooseWiselySection from './home/partials/choose-wisely';
import ContactUsSection from './home/partials/contact-us-section';
import ExperiencedSection from './home/partials/experienced';
import FaqSection from './home/partials/faq-section';
import Footer from './home/partials/footer';
import FrontendInAction from './home/partials/frontend-in-action';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import RealImpactSection from './home/partials/real-impact';
import TrustedByTeams from './home/partials/trusted-by-teams';
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
      <FrontendInAction />
      <TrustedByTeams />
      <FaqSection />
      <div className='bg-[linear-gradient(330deg,#6A27A0_0%,#000000_50%)]'>
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
}
