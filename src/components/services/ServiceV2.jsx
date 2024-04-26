import React from 'react'
import './ServiceV2.css'

const ServiceV2 = ({image, title, text}) => {
  return (
    <div>
        <section className="service-v2">
            <div className="service-v2-cont">
                <div className="service-v2-image">
                    <img src={image} alt='service'/>
                </div>
                <div className="service-v2-content">
                    <div className="service-v2-title">{title}</div>
                    <div className="service-v2-text">{text}</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ServiceV2