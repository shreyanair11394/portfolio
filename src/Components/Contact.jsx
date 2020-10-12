import React from 'react';


export default() =>{

    return(
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row">

          <div className="col-sm-4"> <div className="info"> <div className="email">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>40 Parker Hill Avenue, Boston, MA</p>
              </div> </div> </div>
              
          <div className="col-sm-4"> <div className="info"> <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>nair.shr@northeastern.edu</p>
              </div>
            </div>
          </div>

           
          <div className="col-sm-4">
            <div className="info">
              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 857-269-0151</p>
              </div>
            </div>
            </div>

            </div>
            </div>
            </section>
    )
}

