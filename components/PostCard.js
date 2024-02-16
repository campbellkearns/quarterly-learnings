import Image from "next/image";
import styles from "../styles/PostCard.module.css";
import { forwardRef } from "react";

function PostCard({ name, date, imageUrl, onClick }, ref) {
    return (
        <section ref={ref} onClick={onClick}>
            <div>
                <h1 className="text-primary font-serif">{name}</h1>
                <small className="text-secondary">{date}</small>
            </div>
        </section>
    );
}

export default forwardRef(PostCard);
