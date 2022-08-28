import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>

        <section className={styles.footerCta}>
          <section>
            <p>Keep up with the latest learnings!</p>
          </section>
          <section className={styles.inputBox}>
            <input type='email' placeholder='Enter your email' />
            <button>Get Started</button>
          </section>
        </section>

        <section className={styles.footerLinks}>
          <nav className={styles.footerNav}>
            <ul className={styles.navLinks}>
              <li>About</li>
              <li>Services</li>
              <li>Testimonials</li>
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
          <p>© 2022 Quarterly Learnings. All rights reserved</p>
        </section>
      </footer>

    )
}