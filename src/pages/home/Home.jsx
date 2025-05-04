import React from 'react'
import Hero from '../../components/hero/Hero'
import Cards from '../../components/cards/Cards'
import About from '../../components/about/About'
import Premium from '../../components/premium/Premium'
import Choose from '../../components/choose/Choose'
const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <About />
      <Premium />
      <Choose />
    </div>
  )
}

export default Home
