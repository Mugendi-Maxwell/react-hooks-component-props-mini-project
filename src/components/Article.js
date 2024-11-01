import React from "react"



function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const box = '🍱'.repeat(Math.ceil(minutes / 5));
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {box} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}


export default Article;