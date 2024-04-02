import React from 'react'
import Banner from '../../components/banner/Banner'
import BannerImage from "../../assets/about-banner.jpg";
import Accordion from '../../components/accordion/Accordion';

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