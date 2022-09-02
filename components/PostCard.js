import Image from 'next/image'
import styles from '../styles/PostCard.module.css'

export default function PostCard({ name, date, imageUrl }) {
    return (
        <section className={styles.container}>
            <Image src={imageUrl} width={100} height={100} />
            <div className={styles.postDetails}>
                <h1>{name}</h1>
                <small>{date}</small>
            </div>
        </section>
    )
}
