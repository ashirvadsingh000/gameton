import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Guides from './components/Guides'
import Games from './components/Games'
import Game2 from './components/Game2'
import News from './components/News'

const App = () => {
  return (
    <>
     <Header/>
     <Home/>
     <News/>
     <Guides/>
     <Games/>
     <Game2/>
     <Footer/> 
    </>
  )
}

export default App
