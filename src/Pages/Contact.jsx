import Layout from '../Layouts/Routers';
import ContactPage from '../Layouts/Contact-Info';
import FaqSection from '../Layouts/FAQ-Sections';
import Footer from '../Layouts/Footer';

const Contact = () => {
    return (
        <Layout>
            <ContactPage/>
             <FaqSection/>
             <Footer/>
        </Layout>
    );
}

export default Contact;
