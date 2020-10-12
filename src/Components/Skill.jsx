import React  from 'react';
import { MDBProgress } from 'mdbreact';

export default()=>{
    return(
        <section id="skills" className="skills section-bg">
      <div className="container"  data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p></p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">HTML/CSS </span>
              <div className="progress-bar-wrap"  data-aos="fade-right" >
                <MDBProgress material value={95} height="10px" />
              </div>
            </div>
            
            
            <div className="progress">
              <span className="skill">Javascript </span>
              <div class="progress-bar-wrap" data-aos="fade-right">
                <MDBProgress material value={90} height="10px" />
              </div>
            </div>

            <div className="progress">
              <span className="skill">Vue.Js </span>
              <div class="progress-bar-wrap" data-aos="fade-right">
                <MDBProgress material value={80} height="10px" />
              </div>
            </div>

            

            <div className="progress">
              <span className="skill">React.js </span>
              <div className="progress-bar-wrap" data-aos="fade-right">
                 <MDBProgress material value={75} height="10px" />
              </div>
            </div>

            <div className="progress">
              <span className="skill">JQuery </span>
              <div className="progress-bar-wrap" data-aos="fade-right">
                <MDBProgress material value={70} height="10px" />
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">Java </span>
              <div className="progress-bar-wrap" data-aos="fade-right">
               <MDBProgress material value={80} height="10px" />
              </div>
            </div>

            <div className="progress">
              <span className="skill">Node.Js </span>
              <div class="progress-bar-wrap" data-aos="fade-right">
                <MDBProgress material value={80} height="10px" />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Rest API </span>
              <div className="progress-bar-wrap" data-aos="fade-right">
                 <MDBProgress material value={70} height="10px" />
              </div>
            </div>

            <div className="progress">
              <span className="skill">MySql </span>
              <div className="progress-bar-wrap" data-aos="fade-right">
                 <MDBProgress material value={75} height="10px" />
              </div>
            </div>

            <div className="progress">
              <span className="skill">Github </span>
              <div className="progress-bar-wrap" data-aos="fade-right">
                <MDBProgress material value={97} height="10px" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    
    )
}