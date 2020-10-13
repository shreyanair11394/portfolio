import React from 'react'

export default() => {
    return(
        <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Professional Experience</h2>
         </div>

          <div className="col-lg-6">
            <div className="resume-item">
              <p><h4>Software Development Coop  </h4>
              <em> eResearch Technology, PHT Corp, Boston, MA.         &nbsp;<b>Jan 2020 - Aug 2020 </b> </em>
              </p>
              
              <p><b>Project Name: </b>Idea Submission Portal 
              </p>
              <p><b>Technologies: </b>VueJs, Firebase Auth., NodeJs, AWS-Lambda,Python, Postgresql</p>
              <ul>
                <li>Developed a full stack dynamic web single page application for employees to submit suggestion within the Employer</li>
                <li>Used Firebase Authentication to inhibit login into the web application by outside users</li>
                <li>Incorporated AWS API Gateway to build a RESTful API and AWS Lambda for serverless back-end service of the portal</li>
                <li>Carried out quality assurance test using UFT web automation tool to discover errors and optimize usability</li>
                
              </ul>
               
              <p><b>Project Name: </b>ERT Employee WebStyleGuide Maintainence  
              </p>
              <p><b>Technologies: </b>HTML, CSS, Bootstrap4, Gulp.js, Node.js, Handlebars, SCSS</p>
              <ul>
                <li>Operational maintenance of ERT Style Guide that’s is compiled to a web page and CSS UI Framework</li>
                <li>Working with Handlebars, SCSS and GulpJs for unified cohesive look and feel for all end users regardless of platform</li>
                <li>Using DC.Js and D3.Js for data driven dashboard with responsive widgets</li>
              </ul>
            </div>
            <div className="resume-item">
            <p><h4>Business Development Executive  </h4>
              <em> TeleTech, Ahmedabad, India.         &nbsp;<b>Jul 2016 - Jun 2018 </b> </em>
              </p>
              <ul>
                <li>Handled outsourcing/offshoring industry for showing business impact of returns requests/ unhappy customer reviews</li> 
                <li>Devised and analyzed importance of voice of customer(data) to optimize business with eBay Russia</li>
                <li>Incorporated changes in Return policy which resulted in 3% decrease in opened claims within 2 months</li>
                <li>Experienced in people-performance management, strategic orientation, macro express and elevated customer support</li>
             
                
              </ul>
            </div>

            
            

         
        </div>
      </div>
    </section>
    )
}