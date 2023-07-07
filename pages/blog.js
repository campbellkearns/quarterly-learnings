import Layout from "../components/layout";
import PostCard from "../components/PostCard";
import { getSortedPostsData } from "../lib/posts";

import Link from "next/link";
// replace with imported function for retrieving filesystem post data

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <h1 className="col-span-3 text-2xl">Writings</h1>
            {allPostsData.map((post) => (
                <article className="col-span-2" key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <PostCard
                            name={post.title}
                            date={new Date(post.dateCreated).toDateString()}
                            imageUrl={post.imageUrl}
                        />
                    </Link>
                </article>
            ))}
        </Layout>
    );
}
