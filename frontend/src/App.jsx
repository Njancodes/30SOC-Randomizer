import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import axios from "axios"

function App() {

  const [number, setNumber] = useState(0);
  const [cards, setCards] = useState([]);

  const handleChange = (event) => {
    setNumber(Number.parseInt(event.target.value));
  }
  const handleClick = () => {

    axios({
      method: "get",
      url: `/api/?number=${number}`
    }).then((res) => {
      console.log(res.data)
      setCards(res.data)
    })

    setNumber('');
  }

  return (
    <>
      <div className='center-everything'>
        <nav id='navigation-bar'>
          <div>R30</div>
          <div>H</div>
        </nav>
        <div id='title-sub'>
          <h1 id='title'>
            Random 30 seconds of code article
          </h1>
          <p className='subtitle'>
            Paralysis analysis on which article to choose ? <br />
            Let this website choose it for you!!
          </p>
        </div>
        <div id='input-eles'>
          <input type="number" onChange={handleChange} value={number} name="num" required id="numstyle" placeholder='Enter the number of blogs you want' />
          <input type="button" value="Generate" id='generateStyle' onClick={handleClick} />
        </div>
        <ul id='blog-cards'>
          {cards.map((card)=>{
            return (
              <Card key={crypto.randomUUID()} link={card.link} image_src={card.image_src} topic={card.topic} title={card.title} summary={card.summary} date={card.date} />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
