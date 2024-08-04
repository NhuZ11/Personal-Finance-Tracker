import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Grid from './Components/Grid50-30-20'
import HomeFeatures from './Components/HomeFeatures'
import './App.css'

function App() {
 

  return (
    <>
     <div>
      <Header />
      <Hero />
      <HomeFeatures />
      <Grid />
      <Footer />
     </div>
    </>
  )
}

export default App
