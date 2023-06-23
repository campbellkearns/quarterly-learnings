import Link from "next/link";
import Layout from "../components/layout";

const Success = () => {
    return (
        <Layout>
            <main className="col-span-full text-center">
                <h1 className="text-3xl font-serif mb-4">Thank you for reaching out!</h1>
                <p className="font-sans mb-4">We've received your message and will get back to you as soon as possible.</p>
                <button className="text-accent hover:underline">
                    <Link href="/"> 
                    Back to home
                    </Link>
                </button> 
            </main>
        </Layout>
    );
};

export default Success;
