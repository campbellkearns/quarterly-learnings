import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Layout.module.css'
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Quarterly Learnings</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Quarterly Learnings: bespoke software training solutions. Specializing in curriculum design, program development, and instruction. Foster a culture of learning." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.children}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
