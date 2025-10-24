

function Card({ imgURL }) {
    return (
        <li className="card">
            <img src={imgURL} alt={imgURL} />
            <article className="card-content">
                <small className="date"> JavaScript ·   October 16, 2025 </small>
                <h3 className="title">Best Time to Buy and Sell Stock JavaScript Solution</h3>
                <p className="summary">Have you tried solving "Best Time to Buy and Sell Stock" on LeetCode? Let's take a couple of approaches to tackle it in JavaScript.</p>
            </article>
        </li>
    )
}

export default Card;