import { useEffect } from "react"

export default function EpisodePlayer({ episode }) {

    useEffect(() => {
        let script = document.createElement('script');
        script.src = '/embed.js';
        script.async = true;
        script.defer = true;
        document.body.append(script)
    }, [])

    return (
        <audio
            controls
            data-src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2023-1-22/67431b3c-cf0a-1928-849d-f35562fd0868.mp3"
            preload="none"
            className="latest-episode"
        >
        </audio>
    )
}