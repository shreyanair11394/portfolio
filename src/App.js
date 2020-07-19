import React, { Fragment } from 'react';
import './App.css';
import pp from './profile-img.png';
import Typical from 'react-typical';
 import aos from 'aos';


import img from './assets/css/hero-bg.jpg';
import Education from './Components/Education';
import Skill from './Components/Skill';
import Work from './Components/Work';
import Project from './Components/Project';
 import Contact from './Components/Contact';
 import Bottomfooter from './Components/Bottomfooter';

 aos.init();
function App() {
  
  return (
    
 <Fragment> 
        <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
     <header id="header" class="d-flex flex-column justify-content-center">
    <nav class="nav-menu">
      <ul>
        <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#facts"><i class="bx bx-book-content"></i><span>Education</span></a></li>
        <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Work Experience</span></a></li>
        <li><a href="#portfolio"><i class="bx bx-book-content"></i> <span>Project</span></a></li>
        <li><a href="#contact"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>
    </header>

<section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1 style={{color:'black !important'}}>Kinjal Mehta</h1>
      <p style={{color:'black !important'}}>I'm a {''}
      <Typical loop={Infinity} wrapper='b' steps={[
        'developer',
        1000,
        'designer',
        1000,
        'student',
        1000,
        'dancer',
        1000,
        'gallivanter',
        1000
      ]}></Typical>
        </p>
      <div class="social-links">
        <a href="https://twitter.com/KinjalMehta9" class="twitter" target="_blank"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.linkedin.com/in/kinjal-mehta/" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
        <a href="https://github.com/KinjalPM" class="Github" target="_blank"><i class="bx bxl-github"></i></a>
      </div>
    </div>
  </section>

  <main id="main">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p></p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src={pp} class="img-fluid" alt="Pic" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            
            <p class="font-italic">
            A Goal-Oriented and solution-driven software enthusiast with my Coop experience as a Web developer at Oxfam America. 
            I have comprehensive hands-on experience in widely used technologies such as JavaScript, HTML, CSS, Java, React.JS, SQL, 
            Spring Boot, Spring MVC. I keep the aspiration to work on new technologies and implement my skills to solve every challenge 
            as an opportunity to contribute constructively to society. 
            <br/>
            <br/>
            My potential to learn quickly and self-start along with my diligent and dedicated attitude towards my work and 
            responsibilities makes me a good fit for an opportunity to efficiently work in this fast-paced IT environment.

              <br/>
              <br/>
              <button><a download href="Resume(SE).pdf" download="Resume.pdf">Resume</a></button>
            </p>
          </div>
        </div>

      </div>
    </section>
    
    <Education></Education>
    <Skill></Skill>
    <Work></Work> 
    <Project></Project>
    <Contact></Contact>
  </main>
  <a href="#hero" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
  <Bottomfooter></Bottomfooter>

       
  </Fragment>
  
  
  );
}

export default App;
