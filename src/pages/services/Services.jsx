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
          <Service title={'Solar Technology'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.'} image={ServiceImage1}/>
          <Service title={'Solar Installation'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.'} image={ServiceImage2}/>
          <Service title={'Solar Equipment'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.'} image={ServiceImage3}/>
          <Service title={'Battery Materials'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.'} image={ServiceImage4}/>
          <Service title={'Change Controllers'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.'} image={ServiceImage5}/>
          <Service title={'Grid Maintenance'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.'} image={ServiceImage6}/>
        </div>
    </div>
  )
}

export default Services