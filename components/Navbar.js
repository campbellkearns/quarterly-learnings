import styles from '../styles/Navbar.module.css'
import logoPlaceholder from '../public/temp-logo.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.navWrapper}>
            <nav className={styles.navbar}>
                <div>
                    <Link href='/'>
                        <Image src={logoPlaceholder}
                            width={"300"}
                            height={"120"}
                            layout="intrinsic"
                            />
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <Link href='/blog'><a><li>Blog</li></a></Link>
                    <a href="https://podcasters.spotify.com/pod/show/quarterlylearnings" target="_blank"><li>Podcast</li></a>
                </ul>
            </nav>
        </div>
    )
}
