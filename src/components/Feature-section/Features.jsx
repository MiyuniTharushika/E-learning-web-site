import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "At EduNexus, we offer quick learning solutions designed for busy individuals. Our concise, focused courses enable you to grasp essential skills and knowledge in a short time. With expertly crafted content, interactive modules, and flexible access, you can learn efficiently and effectively, fitting education into your busy schedule.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "At EduNexus, we provide all-time support to ensure your learning journey is smooth and successful. Our dedicated support team is available 24/7 to assist with any questions or issues. Whether you need technical help or course guidance, we’re here to support you every step of the way.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "EduNexus offers certification upon course completion, validating your newfound skills and knowledge. Our certificates are recognized in the industry, enhancing your resume and credibility. With our rigorous assessments and expert-led courses, you can earn a valuable credential to showcase your expertise and propel your career forward.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
