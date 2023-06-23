import ContactForm from "../components/ContactForm";
import Layout from "../components/layout";

const Contact = () => {
    return (
        <Layout>
            <h2 className="col-span-3 text-2xl font-serif mb-2 text-center">How Can I Help?</h2>
            <ContactForm />
        </Layout>
    );
};

export default Contact;
