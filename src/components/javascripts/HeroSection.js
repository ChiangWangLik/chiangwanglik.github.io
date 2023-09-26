import React from 'react'
import '../../App.css'
import { Button } from './Button'
import '../css/HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="videos/Star-Gazing.mp4" autoPlay loop muted />
      <h1>Opportunity Knocks</h1>
      <p>Are you ready to seize it?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Know more about me</Button>
        {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Watch Trailer <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  )
}

export default HeroSection
