import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>

        <section className={styles.footerCta}>
            <p>Keep up with the latest learnings on <Link href='/blog'>the blog!</Link></p>
        </section>

        <section className={styles.footerLinks}>
          <nav className={styles.footerNav}>
            <ul className={styles.navLinks}>
              <Link href='/blog'><a><li>Blog</li></a></Link>
              <li>Podcast</li>
            </ul>
          </nav>

          <section className={styles.socials}>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-tiktok"></i>
          </section>
        </section>

        <section className={styles.legal}>
          <p>© 2023 Quarterly Learnings. All rights reserved</p>
        </section>
      </footer>

    )
}