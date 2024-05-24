import React from 'react'

import './Testimonials.css'
import SectionIntro from '../sectionIntro/SectionIntro'
import TestimonialsData from './TestimonialsData'

const Testimonials = () => {
  return (
    <div>
        <div className="testimonials-section">
            <div className="testimonial-intro">
                <SectionIntro title="Customer Feedback" text={'OUR TESTIMONIALS'} />
            </div>
            <div className="testimonials-main-wrap">
                <TestimonialsData />
            </div>
        </div>
    </div>
  )
}

export default Testimonials