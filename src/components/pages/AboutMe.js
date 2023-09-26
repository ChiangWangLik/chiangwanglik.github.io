import React from "react"
import '../../App.css'
import Footer from "../javascripts/Footer"

export default function AboutMe() {
  return (
    <>
      {/* <div className="about-me" style={{ backgroundImage: 'url("images/bg.JPG")' }}> */}
      <div className="about-me">
        <h1 className="page-title">ABOUT ME</h1>
        <div className="box">
          <img src="images/propic.JPG" alt="" />
          <h2>Chiang Wang Lik Edward</h2>
          <hr className="rounded" />
          
          <h1>Profile</h1>
          <p>HKU Graduate</p>
          <p>Bachelor of Biomedical Engineering; Minor in Computer Science</p>
          <p>-</p>
          <p>Able to work alone, able to cooperate with teammates</p>
          <p>A self-motivated man eager to learn new things</p>
          <p>Good interpersonal skills to get along with people</p>
          <p>Fluent Chinese, English and Mandarin</p>

          <hr className="rounded" />
          <div className="name-container">
            <div className="name-intro">
              <p><i>E</i> - Enthusiastic</p>
              <p><i>A</i> - Attentive</p>
            </div>
            <div className="name-intro">
              <p><i>D</i> - Diligent</p>
              <p><i>R</i> - Respectful</p>
            </div>
            <div className="name-intro">
              <p><i>W</i> - Well-considered</p>
              <p><i>D</i> - Dedicated</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}