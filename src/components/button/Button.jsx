import React from 'react'

import './Button.css'

const Button = ({buttonLabel, buttonURL}) => {
  return (
    <div class="button-wrapper">
        <div class="button-container">
            <a href={buttonURL} class="">{buttonLabel}</a>
        </div>
    </div>
  )
}

export default Button