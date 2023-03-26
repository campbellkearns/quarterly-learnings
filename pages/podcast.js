import { useEffect, useState } from "react"
import EpisodePlayer from "../components/EpisodePlayer";
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
                console.log(items)
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
        <Layout className="gap-10">
            <h3 className="text-3xl md:text-4xl">Podcast Episodes</h3>

            <EpisodePlayer />
            <h6 className="text-lg md:text-xl">Latest Episode</h6>
            <section className="container mx-auto flex flex-col justify-evenly gap-y-10">
                {
                    episodes.map(episode => {
                        return (
                            <article
                                className='text-green-dark mb-4'
                                key={episode.firstElementChild.textContent}
                            >
                                <a
                                    href={episode.children[2].innerHTML}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <h3 className='text-3xl md:text-4xl mb-2'>
                                        {episode.firstElementChild.textContent}
                                    </h3>
                                </a>
                                <p className='mb-2'>{new Date(parseEpisodeData(episode.children[5].innerHTML)).toDateString()}</p>
                                <p>{
                                    episode.children[0].textContent === "Trailer" ?
                                        parseEpisodeData(episode.children[1].innerHTML).substring(0, 216)
                                        : parseEpisodeData(episode.children[1].innerHTML).substring(0, 400)
                                }...</p>
                            </article>
                        )
                    })
                }
            </section>
        </Layout>
    )
}