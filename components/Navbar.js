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
                        <a>
                            <Image src={logoPlaceholder}
                                width={"300"}
                                height={"120"}
                                alt={'Quarterly Learnings logo'}
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <Link href='/blog'><a><li>Blog</li></a></Link>
                    <Link href='/podcast'><a><li>Podcast</li></a></Link>
                </ul>
            </nav>
        </div>
    )
}
