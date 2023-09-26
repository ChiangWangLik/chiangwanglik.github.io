import React from "react";
import "../../App.css";
import Footer from "../javascripts/Footer";

export default function Skills() {
  return (
    <>
      <div className="skills">
        <h1 className="page-title">SKILLS</h1>
        <div className="box">
          <h1>Skills</h1>
          <hr className="rounded" />
          <div className="level">
            <span>Beginner</span>
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
            <span>Expert</span>
          </div>
          <hr className="rounded" />

          <div className="skills-container">
            <div className="skills-items">
              <h2>Software</h2>
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <p>Canva</p>
              <p>-</p>
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <p>Docker</p>
              <p>Postman</p>
              <p>Matlab</p>
              <p>Shapr3D</p>
              <p>WordPress</p>
              <p>Wix</p>
              <p>Visme</p>
              <p>-</p>
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <p>Fusion360</p>
              <p>Bitrix24</p>
            </div>
            <div className="skills-items">
              <h2>Programming</h2>
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Vue.js</p>
              <p>-</p>
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <p>Python</p>
              <p>C++/C</p>
              <p>Flutter & Dart</p>
              <p>-</p>
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <p>Java</p>
              <p>PHP</p>
              <p>SQL</p>
            </div>
          </div>
          <hr className="rounded" />

          <h1>Language</h1>
          <hr className="rounded" />
          
          <div className="skills-container">
            <div className="skills-items">
              <h3>Cantonese</h3>
              <h3>English</h3>
              <h3>Mandarin</h3>
            </div>
            <div className="skills-items">
              <h4>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </h4>
              <h4>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </h4>
              <h4>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </h4>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
