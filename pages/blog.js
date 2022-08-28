import Layout from '../components/layout'
import { posts } from '../tmp/posts'

export default function Blog() {

    return (
        <Layout>
            <h1>Some things I have been thinking about...</h1>
            {posts.map(post => <h2>{post.Name}</h2>)}
        </Layout>
    )
}
