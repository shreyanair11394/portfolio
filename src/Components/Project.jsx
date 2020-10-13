import React from 'react';

export default () => {
    return (
        <section id="portfolio" className="portfolio section-bg" >
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Projects</h2>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200" >

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">

                        <div className="portfolio-info">
                            <h3 style={{ color: "#0b4cad" }}>Weather App</h3>
                            <p style={{textAlign:'justify'}}>
                            This application has been created using React.js, JavaScript, and Bootstrap. When the user enters the city 
                             it’s corresponding weather conditions are displayed. A Weather API from the OpenWeatherMap was used 
                            to gather information. The information from the API helps in displaying the weather conditions that include overall 
                            temperature, min temperature, max temperature and weather types such as sunny, windy, rainy, cloudy or thunderstorm.
                </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-info">
                            <h3 style={{ color: "#0b4cad" }}>Job Recruitment Portal </h3>
                            <p style={{textAlign:'justify'}}>
                         It is an interactive single page application to post recent job openings for employers,  
                         search job position and job location for Job seekers.
                          User centric recommendations are generated based on the search details. Providing a front-end platform with JavaScript 
                          and Angular8 for customers using Restful services and MongoDB as database.
                                </p>

                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-info">
                            <h3 style={{ color: "#0b4cad" }}>Machine Learning Academic project: Airbnb Dataset </h3>
                            <p style={{textAlign:'justify'}}>
                                A Data science classification project for for predicting new user’s booking destination that has data pre-processing for encoding categorical data and Data visualization 
                                to learn the kind of data using Matplotlib. 
                                
                                Evaluated the performance of different machine learning models.
                                
                                
                                
                </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-info">
                            <h3 style={{ color: "#0b4cad" }}>Donation Management System using Java Swing </h3>
                            <p style={{textAlign:'justify'}}>
                            This application provides a system to disseminate the idea of donation and make the process of it as simple as one can imagine. Aimed to bring together the individual donors with donation accepting organizations to facilitate collection and distribution of donations. 
                            Participating organizations are the NGO, Hospital, Donors, Doctors and Medical Bank.
            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-info">
                            <h3 style={{ color: "#0b4cad" }}>Database for Donation Management Systems </h3>
                            <p style={{textAlign:'justify'}}>
                                The project resolved data management problem by applying data queries to efficiently handle database. Built schema based on an entity-relationship diagram with minimum data redundancy. Learned and applied joints, triggers, and stored procedures using MySQL. 
               </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-info">
                            <h3 style={{ color: "#0b4cad" }}>Natural Language Processing for Sentiment Analysis</h3>
                            <p style={{textAlign:'justify'}}>
                            It was built for learning basic Web Scrapping- Achieved web scrapping of a website using ‘BeautifulSoup’, with text processing tasks with NLTK. 
                            Twitter Dataset-Implemented text processing with ‘TextBlob’ to produce N-grams of word list to check polarity of words like Good, Bad etc.UtilizedTF-IDF to penalize frequently occurring words, produced bag of wordsandapplied word2vec word embeddin
              </p>

                        </div>
                    </div>



                    <div className="col-lg-12 col-md-4 portfolio-item filter-app" style={{ textAlign: 'center' }}>
                        <div className="portfolio-info" style={{ textAlign: 'center' }}>
                            <h3 style={{ color: "#0b4cad" }}>Wait! There's more..</h3>
                            <p>See<a href="https://github.com/shreyanair11394" target="_blank" style={{ color: "#0b4cad" }}> all Creations</a> for more examples!</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}