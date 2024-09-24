import React from "react";
import front from "../Assets/bg.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Nav-Footer/Nav";
import About from "../About/About";

const Home = () => {
  return (
    <div>
        <Nav/>
      <div class="hero">
        <img class="hero-img" src={front} alt="Alisbah Zulfiqar" />
        <a href="#projects" className="btn">
          View Projects <FontAwesomeIcon icon={faAngleDoubleRight} />
        </a>
      </div>
      <About/>
      <section className="projects">
        <h2>Projects</h2>
        <div class="project-container">
          <div class="project-card">
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Short description of the project.</p>
          </div>
          <div class="project-card">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <div class="slider"></div>
      </section>
      <footer>
        <p>© 2024 Alisbah Zulfiqar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
