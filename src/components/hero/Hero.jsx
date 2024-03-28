import React from 'react'

import './Hero.css'
import Button from '../button/Button'

const Hero = ({image, teaser, title, buttonURL, buttonLabel}) => {

    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

  return (
    <div>
        <section className="hero-section" style={sectionStyle}>
            <div className="hero-wrapper">
                <div className="hero-container">
                    <div className="hero-teaser">{teaser}</div>
                    <div className="hero-title">{title}</div>
                    <Button buttonLabel={buttonLabel} buttonURL={buttonURL} className="show" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero