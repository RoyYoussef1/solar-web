import React from 'react'
import './Generate.css'
import Button from '../button/Button'

const Generate = () => {
  return (
    <div>
        <section className="generate-section">
            <div className="generate-wrapper">
                <div className="generate-container">
                    <div className="generate-title">Smartest Way to Generate Electricity</div>
                    <Button buttonLabel={"Get in Touch"} buttonURL={"/contact"} isInverted/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Generate