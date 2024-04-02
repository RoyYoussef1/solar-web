import React from 'react'

import './ServiceLayout.css'
import ServiceMenu from '../serviceMenu/ServiceMenu'
import CTABlockServices from '../CTABlockServices/CTABlockServices'

const ServiceLayout = () => {
  return (
    <div>
      <section className="service-layout-section">
        <div className="service-layout-wrapper">
          <div className="service-layout-left-column">
            <ServiceMenu />
            <CTABlockServices />
          </div>
          <div className="service-layout-right-column">
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceLayout