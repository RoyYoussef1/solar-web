import React from 'react'
import Banner from '../../components/banner/Banner'
import BannerImage from '../../assets/Banner3.1.png'
import Service from '../../components/services/Service'
import ServiceImage1 from '../../assets/service-01.jpg'
import ServiceImage2 from '../../assets/service-02.jpg'
import ServiceImage3 from '../../assets/service-03.jpg'
import ServiceImage4 from '../../assets/service-04.jpg'
import ServiceImage5 from '../../assets/service-05.jpg'
import ServiceImage6 from '../../assets/service-06.jpg'
import './Services.css'

const Services = () => {
  return (
    <div>
        <Banner image={BannerImage} title="Services" teaser="We offer a wide range of services to meet your needs"/>
        <div className="services-wrap">
          <Service title={'Solar Technology'} text={'Stay ahead with our advanced solar technology, designed for maximum efficiency and reliability.'} image={ServiceImage1} link={'/services/solar-technology'}/>
          <Service title={'Solar Installation'} text={'Professional installation services to ensure your solar panels are set up for optimal performance.'} image={ServiceImage2} link={'/services/solar-installation'}/>
          <Service title={'Solar Equipment'} text={'High-quality solar equipment to meet all your energy needs, ensuring durability and effectiveness.'} image={ServiceImage3} link={'/services/solar-equipment'}/>
          <Service title={'Battery Materials'} text={'Utilize the latest in battery technology for improved energy storage and longer-lasting performance, tailored for efficient solar power use.'} image={ServiceImage4} link={'/services/battery-materials'}/>
          <Service title={'Change Controllers'} text={'Ensure optimal energy flow with our state-of-the-art charge controllers, designed to maximize the efficiency and lifespan of your solar power system.'} image={ServiceImage5} link={'/services/charge-controllers'}/>
          <Service title={'Grid Maintenance'} text={'Keep your energy grid in top condition with our comprehensive maintenance services, ensuring reliable and uninterrupted power supply.'} image={ServiceImage6} link={'/services/grid-maintenance'}/>
        </div>
    </div>
  )
}

export default Services