import styles from '../styles/Navbar.module.css'
import logoPlaceholder from '../public/temp-logo.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.navWrapper}>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <Image src={logoPlaceholder}
                        width={"300"}
                        height={"120"}
                        sizes="(max-width: 300px) 100px"
                        layout="intrinsic"
                    />
                </Link>
                <ul className={styles.navLinks}>
                    <Link href='/blog'><a><li>Blog</li></a></Link>
                    <li>Podcast</li>
                </ul>
            </nav>
        </div>
    )
}
