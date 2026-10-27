import React from 'react';
import Layout from '../Layouts/Routers';
import AboutPage from '../Layouts/About-Sections';
import Footer from '../Layouts/Footer';

const About = () => {
    return (
        <Layout>
            <AboutPage/>
            <Footer/>
        </Layout>
    );
}

export default About;
