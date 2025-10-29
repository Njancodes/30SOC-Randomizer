

function Card({ image_src, link, summary, title, topic, date }) {
    return (
        <li className="card">
            <img src={image_src} alt={image_src} />
            <article className="card-content">
                <small className="date"> {topic} · {date} </small>
                <h3 className="title">
                    <a target="_blank" href={link}>
                        {title}
                    </a>
                </h3>
                <p className="summary">{summary}</p>
            </article>
        </li>
    )
}

export default Card;