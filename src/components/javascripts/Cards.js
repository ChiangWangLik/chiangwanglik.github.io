import React from 'react'
import CardItem from './CardItem'
import '../css/Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Investigate into my profile!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/skills-icon.jpg" text="Essential assets for me to contribute in a team effectively"
            label="Skills" path="/skills" />
            <CardItem src="images/experience-icon.jpg" text="Knowledge and understanding through practical involment"
            label="Experience" path="/experience" />
          </ul>
          {/* <ul className="cards__items">
            <CardItem src='images/img-3.jpg' text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery' path='/skills' />
            <CardItem src='images/img-4.jpg' text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure' path='/experience' />
            <CardItem src='images/img-8.jpg' text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline' path='/about-me' />
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Cards
