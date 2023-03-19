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
            <a href="https://podcasters.spotify.com/pod/show/quarterlylearnings" target="_blank" rel="noopener noreferrer"><li>Podcast</li></a>
          </ul>
        </nav>

        <section className={styles.socials}>
          <a href="https://www.youtube.com/@quarterlylearnings" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://www.tiktok.com/@quarterlylearnings" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-tiktok"></i></a>
        </section>
      </section>

      <section className={styles.legal}>
        <p>© 2023 Quarterly Learnings. All rights reserved</p>
      </section>
    </footer>

  )
}