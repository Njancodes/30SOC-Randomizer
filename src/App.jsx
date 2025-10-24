import './App.css'
import Card from './Card.jsx'

//Images for the mock
import coffeeTable from './assets/coffee-table-setup-400.webp'
import laptopHands from './assets/laptop-hands-400.webp'
import lockedTablet from './assets/orange-coffee-3-400.webp'

function App() {
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
        <form action="submit" method="post">
          <input type="number" name="num" id="numstyle" placeholder='Enter the number of blogs you want' />
          <input type="submit" value="Generate" id='generateStyle'/>
        </form>
        <ul id='blog-cards'>
          <Card imgURL={coffeeTable} />
          <Card imgURL={coffeeTable} />
          <Card imgURL={coffeeTable} />
          <Card imgURL={coffeeTable} />
        </ul>
      </div>
    </>
  )
}

export default App
