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
      <h1 style={{color:'black !important'}}>Shreya Nair</h1>
      <p style={{color:'black !important'}}>I'm a {''}
      <Typical loop={Infinity} wrapper='b' steps={[
        'Full Stack Web Developer',
        1000,
        'Web Designer',
        1000,
        'Graduate Student',
        1000,
        'Software Engineer',
        1000
      ]}></Typical>
        </p>
      <div class="social-links">
        
        <a href="https://www.linkedin.com/in/shreya-nair-7b2962114/" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
        <a href="https://github.com/shreyanair11394" class="Github" target="_blank"><i class="bx bxl-github"></i></a>
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
            A Goal-Oriented and solution-driven software enthusiast with my Coop experience as a Software Developer at eResearch Technology, PHT Corp, Boston. 
            
            I have comprehensive hands-on experience in widely used technologies such as JavaScript, VueJS, Angular8, NodeJs, ExpressJs, PassportJs, HTML, CSS, Bootstrap, Typescript, Python,  Java, Native React, Figma, SquareSpace, CMS: Wordpress, Version Control: Git. 
            I keep the aspiration to work on new technologies and implement my skills to solve every challenge 
            as an opportunity to contribute constructively to society. 
            <br/><br/>
            With respect to backend and databases, I have experience in AWS lambda for building RESTFUL serverless API, Firebase Auth., OAuth 2.0, Auth0 Services, MYSQL, SQL, MongoDB, PostgreSQL.


I am currently enrolled in coursework for website development with PHP this Fall semester. I will be graduating by December 2020 and will be available to work as a full time by January 2021.
            <br/> <br/>
            My potential to learn quickly and self-start along with my diligent and dedicated attitude towards my work and 
            responsibilities makes me a good fit for an opportunity to efficiently work in this fast-paced IT environment.

              <br/>
              <br/>
              <a href="Resume_Shreya_Nair.pdf" download="Resume" ><u>My Resume</u></a>
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
