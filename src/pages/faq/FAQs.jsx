import React from 'react'
import Banner from '../../components/banner/Banner'
import BannerImage from "../../assets/about-banner.jpg";
import Accordion from '../../components/accordion/Accordion';

const FAQs = () => {
  return (
    <div>
        <Banner
        title={"About"}
        teaser={"Specializing in Green Technology"}
        image={BannerImage}
      />
      <Accordion />
    </div>
  )
}

export default FAQs