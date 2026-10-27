import React from 'react';
import ResultPage from '../Layouts/Results-CV';
import Layout from '../Layouts/Routers';
import FaqSection from '../Layouts/FAQ-Sections';
import Footer from '../Layouts/Footer';

const ResultsCV = () => {
    return (
         <Layout>
             <ResultPage/>
             <FaqSection/>
             <Footer/>
         </Layout>

    );
}

export default ResultsCV;
