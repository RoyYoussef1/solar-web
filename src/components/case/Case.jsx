import React from 'react'
import './Case.css'
import { Link } from 'react-router-dom'

const Case = ({image, type, title, URL}) => {
  return (
    <div>
        <div className="case-section">
            <div className='image-wrapper'>
                <Link to={URL}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className='case-content'>
                <div className="case-content-container">
                    <span className='line'></span>
                    <div className="case-type">{type}</div>
                    <div className="case-title">{title}</div>
                    <Link to={URL}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Case