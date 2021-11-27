import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, I am <span className="purple">Priya Joshi </span>
            from <span className="purple"> Delhi, India.</span>
           <br /> <br />I’m a software engineer specializing in building and designing exceptional digital experiences. I enjoy creative and innovate new things that exist on the internet. 
           <br /> <br />My interest in web development started back in 2017 when I decided to create prototype of environment clean web app  as my collage project that project taught me a lot about HTML, CSS & javascript and enjoyed it alot.
           <br /> <br />Fast-forward to today, and I’ve  the privilege of working at an education based organizations. My main focus these days is building accessible education tools for students and give spectacular digital education experience.
         <br />  <br /> Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reader 
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
