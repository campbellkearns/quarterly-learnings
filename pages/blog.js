import Layout from '../components/layout'
import PostCard from '../components/PostCard'
import styles from '../styles/Blog.module.css'

import { posts } from '../tmp/posts'


export default function Blog() {

    return (
        <Layout>
            <div>
                <h1>Some things I have been thinking about...</h1>
                <section className={styles.grid}>
                    {posts.map(post => <PostCard name={post.Name} />)}
                </section>
            </div>
        </Layout>
    )
}
