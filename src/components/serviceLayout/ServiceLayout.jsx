import React from 'react'

import './ServiceLayout.css'
import ServiceMenu from '../serviceMenu/ServiceMenu'
import CTABlockServices from '../CTABlockServices/CTABlockServices'
import ServiceBenefits from '../serviceBenefits/ServiceBenefits'
import SubImage1 from '../../assets/worker-installing-solar-panels-2.jpg'
import SubImage2 from '../../assets/working-tools-for-installing-solar-panels.jpg'

const ServiceLayout = ({title, image}) => {
  return (
    <div>
      <section className="service-layout-section">
        <div className="service-layout-wrapper">
          <div className="service-layout-left-column">
            <ServiceMenu />
            <CTABlockServices />
          </div>
          <div className="service-layout-right-column">
            <div className="service-layout-img"><img src={image} alt="Service Layout" /></div>
            <div className="service-layout-title">{title}</div>
            <div className="service-layout-text">There are many variations passages of lorem ipsum available but the majority have suffered alteration. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Start up money or a decent amount of savings will get you started cleaning business Suspen disse convallis nulla vel bibendum porta. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</div>
            <ServiceBenefits benefits={['Solar Technology', 'Solar Installation', 'Solar Equipment', 'Battery Materials']} />
            <div className="service-layout-subtitle"><b>The Best Way to Save Energy</b></div>
            <div className="service-layout-text">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div className="service-layout-gallery">
              <div className="service-layout-subimg"><img src={SubImage1} alt="Service Layout Sub 01" /></div>
              <div className="service-layout-subimg"><img src={SubImage2} alt="Service Layout Sub 02" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceLayout