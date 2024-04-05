import React from 'react'

import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({buttonLabel, buttonURL, isInverted = false}) => {
  return (
    <div className="button-wrapper">
        <div className={`button-container ${isInverted ? 'inverted' : ''}`}>
            <Link to={buttonURL} className="button-link">{buttonLabel}</Link>
        </div>
    </div>
  )
}

export default Button