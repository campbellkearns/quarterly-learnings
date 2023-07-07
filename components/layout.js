import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="grid grid-cols-3 gap-4 px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Head>
                    <title>Quarterly Learnings</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    ></meta>
                    <meta
                        name="description"
                        content="Quarterly Learnings: bespoke software training solutions. Specializing in curriculum design, program development, and instruction. Foster a culture of learning."
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {children}
            </div>
        </>
    );
}
