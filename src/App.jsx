import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import MainPage from './components/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>CreatorVerse</h1>
          <p>
            Add in your favorite artists and their work to your own personal collection. You can also add in your own work to share with the world!
          </p>
        </div>
        <MainPage/>

      </section>

    </>
  )
}

export default App
