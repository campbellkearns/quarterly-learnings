import Layout from '../components/layout'
import styles from '../styles/Blog.module.css'

import { posts } from '../tmp/posts'


export default function Blog() {

    return (
        <Layout>
            <section>
                <h1>Some things I have been thinking about...</h1>
                {posts.map(post => <h2>{post.Name}</h2>)}
            </section>
        </Layout>
    )
}
