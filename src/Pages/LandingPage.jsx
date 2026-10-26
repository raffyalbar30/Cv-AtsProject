import { useEffect } from 'react';
import Layout from '../Layouts/Routers';
import HeroSection from '../Layouts/Main-Sections';
import HowItWorks from '../Layouts/Cards-Sections';
import FaqSection from '../Layouts/FAQ-Sections';
import CtaSection from '../Layouts/CTA-Sections';
import Footer from '../Layouts/Footer';

const LandingPage = () => {

  useEffect(() => {
    document.title = "CV Scanner – Cek CV kamu lolos ATS";
  }, []);

    return (
      <Layout>
          <HeroSection/>
          <HowItWorks/>
          <FaqSection/>
          <CtaSection/>
          <Footer/>
      </Layout>

    );
}

export default LandingPage;
