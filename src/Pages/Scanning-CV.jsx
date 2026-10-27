import { useEffect } from 'react';
import ScanPage from '../Layouts/Scanning-CV';
import Layout from '../Layouts/Routers';
import FaqSection from '../Layouts/FAQ-Sections';
import Footer from '../Layouts/Footer';

const ScanningCV = () => {
      useEffect(() => {
        document.title = "CV Scanner – Cek CV kamu lolos ATS";
      }, []);

    return (
        <Layout>
           <ScanPage/>
           <FaqSection/>
           <Footer/>
        </Layout>
    );
}

export default ScanningCV;
