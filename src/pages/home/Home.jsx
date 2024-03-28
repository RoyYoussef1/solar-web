import React from 'react'

import './Home.css'
import HomeHero from '../../assets/home-hero.jpg'
import Hero from '../../components/hero/Hero'
import Service from '../../components/services/Service'
import ServiceImage1 from '../../assets/service-01.jpg'
import ServiceImage2 from '../../assets/service-02.jpg'
import ServiceImage3 from '../../assets/service-03.jpg'

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
      <div className="services-intro-wrap">
        <div className='services-intro'>
          <span className='line'></span>
          <h4>WHAT WE DO</h4>
          <h1>Our Services</h1>
        </div>
      </div>
      <div className='services-home-wrap'>
        <Service title={'Solar Technology'} text={'Test1234'} image={ServiceImage1}/>
        <Service title={'Solar Installation'} text={'Test1234'} image={ServiceImage2}/>
        <Service title={'Solar Equipment'} text={'Test1234'} image={ServiceImage3}/>
      </div>
    </div>
  )
}

export default Home