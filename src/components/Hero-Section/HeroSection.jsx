import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              At EduNexus, we believe that education is the key to unlocking your potential and achieving your dreams. Our comprehensive e-learning platform offers a wide range of courses designed to empower learners of all ages and backgrounds. Whether you're looking to advance your career, develop new skills, or explore a passion, EduNexus has something for you.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default HeroSection;
