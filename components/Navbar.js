import styles from '../styles/Navbar.module.css'
import logoPlaceholder from '../public/logo-placeholder.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.navWrapper}>
            <nav className={styles.navbar}>
                <Image src={logoPlaceholder} />
                <ul className={styles.navLinks}>
                    <li>About</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <Link href='/blog'><a><li>Blog</li></a></Link>
                    <li>Podcast</li>
                </ul>
            </nav>
        </div>
    )
}
