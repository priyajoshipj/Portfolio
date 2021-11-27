import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit  ,
  DiSass
} from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";

import { SiMicrosoftsqlserver,SiTypescript } from "react-icons/si";
import { GrGraphQl} from "react-icons/gr";
import { FaAws} from "react-icons/fa";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      
          
    </Row>
  );
}

export default Techstack;
