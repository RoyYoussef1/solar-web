import React from 'react'
import Banner from '../../components/banner/Banner'

import BannerImage from '../../assets/about-banner.jpg'

const About = () => {
  return (
    <div>
      <Banner title={'About'} teaser={'Specializing in Green Technology'} image={BannerImage} />
    </div>
    
  )
}

export default About