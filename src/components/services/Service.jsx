import React from 'react'

import './Service.css'
import { Link } from 'react-router-dom'

const Services = ({image, link, title, text}) => {
  return (
    <div>
        <div className="services-section">
            <div className="services-wrapper">
                <div className="service-image">
                    <Link to={link}><img src={image} alt='service'/></Link>
                </div>
                <div className="service-content">
                    <div className="content-title">{title}</div>
                    <div className="content-line"><span className='line'></span></div>
                    <div className="content-text">{text}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services