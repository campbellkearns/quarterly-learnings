import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Layout.module.css'
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Quarterly Learnings</title>
                <meta name="description" content="Generated by create next app" />
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
