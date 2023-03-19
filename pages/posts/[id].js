import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from '../../styles/BlogPost.module.css';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    }
}

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{ postData.title }</title>
            </Head>
            <article>
                <h1 className={styles.postTitle}>{ postData.title }</h1>
                <p>{ postData.dateCreated }</p>
                <div className={styles.postText} dangerouslySetInnerHTML={{ __html: postData.postHtml }} />    
            </article>
        </Layout>
    )
}
