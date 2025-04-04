import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaSteam, FaTwitter } from "react-icons/fa";

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
              I work as an Associate Software Engineer😊. I develop Windows Application using different technologies.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Java, HTML, CSS, Js & Data Structures and Algorithms (DSA). </b>
              </i>
              <br />
              <br /> I’m currently working on{" "}
              <i>
                {" "}
                <b className="purple">C# .NET, Visual Basic.NET, C++ and Microsoft SQL Server.</b>
              </i>
              <br />
              <br />
              You can check my{" "}
              <a href="https://github.com/rak3xh" target="_blank">
                <b className="purple">GitHub</b>
              </a>{" "}
              profile for all the{" "}
              <i>
                <b className="purple">Coding Platform</b>
              </i>
               profile links.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Windows Application Development, Web Technologies and Products </b>
              </i>{" "}
              and
              <i>
                {" "}
                <b className="purple"> milimastic games</b>{" "}
              </i>
              using different languages like C++, python.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">HTML, CSS and Js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
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
              Feel free to <span className="purple">connect </span>with me and{" "}
              <span className="purple">follow </span>me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rak3xh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rak3xh_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rak3xh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rak3xh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://steamcommunity.com/profiles/76561199074954137/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaSteam />
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
