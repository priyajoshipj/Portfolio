import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todo from "../../Assets/Projects/todo.png";
import chatroom from "../../Assets/Projects/chatroom.png";
import port from "../../Assets/Projects/port.png";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatroom}
              isBlog={false}
              title="ChatRoom"
              description="This is the chatroom app where people can join any room and chat within that room. Tech Stack : React.js, React-Redux, Node.js, socket.io, HTML-5 , CSS-3, Bootstrap. Have features which allows user for realtime messaging."
              link="https://github.com/priyajoshipj/ChatRoom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="This list of things that one wants to get done or that need to get done. Tech Stack : HTML, CSS, REACT-JS, REDUX, JSON, JAVASCRIPT, ES6."
               link="https://github.com/priyajoshipj/TODO-LIST"
            />
          </Col>      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="This is blog page build with MERN technology for database i've use mongodb for backend i've use node and frontend i've use react framework with redux middleware by using this app we can add content also we con update and delete content."
              link="https://github.com/priyajoshipj/Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="portfolio"
              description="This is my personal portfolio which is build on react.js. Here i've shown my bunch of work which i've been worked on over the years."
              link="https://github.com/priyajoshipj/Portfolio"
            />
          </Col>
          
        </Row>
        <Row>
        <Col md={12} style={{color:"white"}}>  For more project <a href="https://github.com/priyajoshipj"> click </a> here  </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
