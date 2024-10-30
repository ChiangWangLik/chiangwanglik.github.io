import React from "react";
import "../../App.css";
import Footer from "../javascripts/Footer";

export default function Experience() {
  const experiences = [
    {
      datetime: "Oct 2023 - Sept 2024",
      company: "Judiciary",
      position: "Contract Junior Programmer",
      description: "- Assist the Judiciary in implementing systems under IT Strategy Plan\n" + 
      "- Develop program to help with the case filing and managing for judges."
    },
    {
      datetime: "Jul 2023 - Aug 2023",
      company: "GNS Technology Holdings Limited",
      position: "Web Application Developer",
      description: 'Implement program for the illumination of the Light Rail.'
    },
    {
      datetime: "Nov 2022 - Dec 2022",
      company: "Centre for the Enhancement of Teaching and Learning",
      position: "Student Research Assistant",
      description: "Interview students on their effectiveness on learning, collect and verify" + 
      " data obtained, analyze the learning performance of students."
    },
    {
      datetime: "Jun 2022 - Aug 2022",
      company: "Biomed Technology Holdings Limited",
      position: "Information Technology Assistant",
      description: "- Website building: WordPress (Elementor), Vue.js, Docker\n" + 
      "Build a website from scratch to deliver information and courses offered\n" + 
      "- Mobile app creation: Flutter, Dart\n" + 
      "Frontend development to display information about the products.\n" + 
      "- Leaflets design: Canva, Visme\n" + 
      "Design leaflets for propaganda and website displaying."
    },
    {
      datetime: "Feb 2020 - May 2021",
      company: "JSF Team",
      position: "Customer Service Assistant",
      description: "Communicate with customers on product purchasing, update social media" + 
      " regularly to attract potential customers, pack products ready for delivery."
    }
  ];

  return (
    <>
      <div className="experience">
        <h1 className="page-title">EXPERIENCE</h1>
        <div className="box">
          <h1>Experience</h1>
          <hr className="rounded" />
          {experiences.map((exp) => (
            <>
              <h3 className="datetime">{exp.datetime}</h3>
              <h3 className="company">{exp.company}</h3>
              <p className="position">{exp.position}</p>
              <p className="description">{exp.description.split('\n').map(str => <p>{str}</p>)}</p>
              <hr className="rounded" />
            </>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}