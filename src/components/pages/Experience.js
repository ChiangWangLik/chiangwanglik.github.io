import React from "react";
import "../../App.css";
import Footer from "../javascripts/Footer";

export default function Experience() {
  return (
    <>
      <div className="experience">
        <h1 className="page-title">EXPERIENCE</h1>
        <div className="box">
          <h1>Experience</h1>
          <hr className="rounded" />

          <h3 className="datetime">Nov 2022 - Dec 2022</h3>
          <h3 className="company">
            Centre for the Enhancement of Teaching and Learning
          </h3>
          <p className="position">Student Research Assistant</p>
          <p className="description">
            Interview students on their effectiveness on learning, collect and
            verify data obtained, analyze the learning performance of students.
          </p>

          <hr className="rounded" />

          <h3 className="datetime">Jun 2022 - Aug 2022</h3>
          <h3 className="company">Biomed Technology Holdings Limited</h3>
          <p className="position">Information Technology Assistant</p>
          <p className="description">
            - Website building: WordPress (Elementor), Vue.js, Docker
            <br />
            Build a website from scratch to deliver information and courses
            offered
            <br />
            <br />
            - Mobile app creation: Flutter, Dart
            <br />
            Frontend development to display information about the products.
            <br />
            <br />
            - Leaflets design: Canva, Visme
            <br />
            Design leaflets for propaganda and website displaying.
          </p>

          <hr className="rounded" />

          <h3 className="datetime">Feb 2020 - May 2021</h3>
          <h3 className="company">JSF Team</h3>
          <p className="position">Customer Service Assistant</p>
          <p className="description">
            Communicate with customers on product purchasing, update social media
            regularly to attract potential customers, pack products ready for
            delivery.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
