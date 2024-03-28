import React from 'react'

import './Banner.css'

const Banner = ({image, title, teaser}) => {

    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

  return (
    <div>
        <section className="banner-section" style={sectionStyle}>
            <div className="text-wrapper">
                <div className="text-container">
                    <div className="banner-title">{title}</div>
                    <div className="banner-teaser">{teaser}</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner