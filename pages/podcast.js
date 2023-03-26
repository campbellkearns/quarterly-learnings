import { useEffect, useState } from "react"
import Layout from "../components/layout";

export default function Podcast() {
    let [episodes, setEpisodes] = useState([]);
    let rssFeedUrl = `https://anchor.fm/s/cde5081c/podcast/rss`

    useEffect(() => {
        fetch(rssFeedUrl)
            .then((response) => response.text())
            .then(data => {
                let parser = new DOMParser();
                let xmlContent = parser.parseFromString(data, 'application/xml');
                let items = xmlContent.getElementsByTagName('item');
                items = Array.from(items);
                console.log(items);
                setEpisodes(items);
            })
    }, [])

    function parseEpisodeData(item) {
        let parser = new DOMParser();
        let string = parser.parseFromString(item, 'text/html');
        let body = string.getElementsByTagName('body');
        let text = body[0].textContent;
        return text;
    }


    return (
        <Layout>
            <h1>Podcast Episodes</h1>
            <section>
                {
                    episodes.map(episode => {
                        return (
                            <article key = {episode.firstElementChild.textContent}>
                                <h3>Episode: {episode.firstElementChild.textContent}</h3>
                                <p>{parseEpisodeData(episode.children[1].innerHTML).substring(0, 400)}...</p>
                                <p>{parseEpisodeData(episode.children[5].innerHTML)}</p>
                                <hr />
                            </article>
                        )
                    })
                }
            </section>
        </Layout>
    )
}