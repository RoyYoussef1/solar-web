import React from 'react'
import './SectionIntro.css'

const SectionIntro = ({title,text}) => {
  return (
    <div>
        <div className="section-intro-wrap">
            <div className='section-intro'>
            <span className='line'></span>
            <h4>{text}</h4>
            <h1>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default SectionIntro