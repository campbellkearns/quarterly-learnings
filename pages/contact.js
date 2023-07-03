import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Layout from "../components/layout";

const Contact = () => {
    return (
        <Layout>
            <main className="col-span-3 p-4 space-y-8">
                <h1 className="text-4xl font-serif">Get In Touch</h1>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                    <div className="col-span-1 flex flex-col gap-y-6 md:justify-evenly bg-tertiary p-6 rounded">
                        <div className="col-span-full row-span-1 lg:col-span-1 ">
                            <h2 className="text-2xl font-serif mb-4">
                                Social Media
                            </h2>
                            <div className="grid grid-cols-3 text-3xl">
                                <Link href="/podcast">
                                    <i className="fas fa-podcast text-accent hover:text-primary"></i>
                                </Link>
                                <a
                                    href="https://www.youtube.com/@quarterlylearnings"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-youtube text-accent hover:text-primary"></i>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@quarterlylearnings"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-tiktok text-accent hover:text-primary"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-span-full row-span-1 lg:col-span-1">
                            <h2 className="text-2xl font-serif mb-4">Email</h2>
                            <p className="font-sans">
                                info@quarterlylearnings.com
                            </p>
                        </div>
                    </div>

                    <div className="col-span-full md:row-start-1 md:col-span-2 bg-tertiary p-6 rounded">
                        <h2 className="text-2xl font-serif mb-4">
                            How Can I Help?
                        </h2>
                        <ContactForm />
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Contact;
