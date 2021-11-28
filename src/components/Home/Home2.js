import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/PRIYA.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillGooglePlusCircle

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const yearCalculator = () => {
  var userinput = "2019-04-22";
  var dob = new Date(userinput);
  var dobYear = dob.getYear();
  var dobMonth = dob.getMonth();
  var dobDate = dob.getDate();

  let now = new Date();
  var currentYear = now.getYear();
  var currentMonth = now.getMonth();
  var currentDate = now.getDate();

  var age = {};
  var ageString = "";

  let yearAge = currentYear - dobYear;

  if (currentMonth >= dobMonth) var monthAge = currentMonth - dobMonth;
  else {
    yearAge--;
    var monthAge = 12 + currentMonth - dobMonth;
  }

  if (currentDate >= dobDate) var dateAge = currentDate - dobDate;
  else {
    monthAge--;
    var dateAge = 31 + currentDate - dobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + "." + age.months;
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = "" + age.days + "";
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + ".";
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + "." + age.months;
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + "." + age.days;
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + "." + age.days;
  else if (age.years == 0 && age.months > 0 && age.days == 0)
    ageString = age.months;

  return ageString;
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a software developer with over 💻 {yearCalculator()} years of
              experience.
              <br />    <br />
              I've been working on a variety of projects, including CMS, CRM,Education based tools,
              Chatbot,single-page applications, and accessible web simulation
              tools. I have a experience with Modern Javascript Library and Frameworks tools
              (e.g. React, React-thunk, Node.js ,HTML5 and Typescript).
              <br />    <br />
              <b> Tech Stack : </b> 
              <b className="purple">  <i> HTML(5), CSS(3), Sass, Bootstrap, JavaScript
              (ES6/ES5), React.js (v.16) ,Redux-Thunk, Node.js , Express.Js
              ,Graphql JSON , Sql Server (2017), Restful API. </i> </b>
              <br /><br />
              I am proficiency in code optimization to improving the performance.             
              <br />             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <a href="https://www.linkedin.com/in/priyajoshipj"
               className="purple">connect </a>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/priyajoshipj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="mailto:priyajoshi.pj.22@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGooglePlusCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/priyajoshipj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
