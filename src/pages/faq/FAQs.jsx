import React from 'react'
import Banner from '../../components/banner/Banner'
import Accordion from '../../components/accordion/Accordion'
import BannerImage from '../../assets/Banner2.1.png'

const FAQs = () => {
  return (
    <div>
        <Banner
        title={"FAQs"}
        teaser={"Helping you save energy and keep the lights on"}
        image={BannerImage}
      />
      <Accordion />
    </div>
  )
}

export default FAQs