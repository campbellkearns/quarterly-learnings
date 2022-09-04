import Layout from '../components/layout'
import PostCard from '../components/PostCard'
import styles from '../styles/Blog.module.css'
import { getSortedPostsData } from '../lib/posts'

import { posts } from '../tmp/posts'
// replace with imported function for retrieving filesystem post data


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({allPostsData}) {

    return (
        <Layout>
            <h1 className={styles.pageTitle}>Writings</h1>
            <section className={styles.grid}>
                {allPostsData.map(post => (
                    <PostCard
                        name={post.title}
                        date={new Date(post.dateCreated).toDateString()}
                        imageUrl={post.imageUrl}
                    />)
                )}
            </section>
        </Layout>
    )
}
