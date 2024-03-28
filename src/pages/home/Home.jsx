import React from 'react'

import HomeHero from '../../assets/home-hero.jpg'
import Hero from '../../components/hero/Hero'

const Home = () => {

  const content = {
    title: (
      <>
        Powering Homes
        <br />
        With Solar Panels
      </>
    ),
    teaser: 'SOLAR PANEL INSTALLATION SOLUTIONS',
    buttonLabel:'Discover More',
    buttonURL: '/about',
    image: HomeHero
  }

  return (
    <div>
      <Hero {...content} />
    </div>
  )
}

export default Home