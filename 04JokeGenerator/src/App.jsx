import { useEffect, useState } from 'react'
import './App.css'

function getRandomJoke(jokes){
  return jokes[Math.floor(Math.random() * jokes.length)]
}

function App() {
  const [jokes, setJokes] = useState([])
  const [joke, setJoke] = useState(null)

  useEffect(() =>{
    fetch('http://localhost:8080/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1')
    .then((res) => 
      res.json()
    )
    .then((json) =>{
      setJokes(json)
      setJoke(json[0])
    })
  }, [])

  const handleJoke = () => {
    setJoke(getRandomJoke(jokes))
  }

  return (
    <>
      <div className='main-box'>
        <button className='btn' onClick={handleJoke}>joke</button>
        <div className='joke-box'>
          <h3>{joke?.content}</h3>
        </div>
      </div>
    </>
  )
}

export default App
