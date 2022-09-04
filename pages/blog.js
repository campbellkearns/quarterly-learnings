import Layout from '../components/layout'
import PostCard from '../components/PostCard'
import styles from '../styles/Blog.module.css'

import { posts } from '../tmp/posts'
// replace with imported function for retrieving filesystem post data


export default function Blog() {

    return (
        <Layout>
            <h1 className={styles.pageTitle}>Writings</h1>
            <section className={styles.grid}>
                {posts.map(post => (
                    <PostCard
                        name={post.Name}
                        date={new Date(post["Created On"]).toDateString()}
                        imageUrl={post["Thumbnail image"]}
                    />)
                )}
            </section>
        </Layout>
    )
}
