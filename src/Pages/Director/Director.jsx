import React from 'react';
import Footer from '../../components/Footer/Footer';
import './Director.css';

const Director = () => { 
    return (
        <>
        <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Director's Desk</h1>
          <p>Welcome to the world of Laconic Pharma Pvt Ltd</p>
      
          </div>
          <div className="direct-image">
            <img src="/images/Rectangle 3934.png" alt="Healthcare Solutions" />
          </div>
        </div>
     
      </section>
      <section id="direct" className="direct-desk" >
       
          <div className="direct-text">
            <h2>Director's Desk<hr/></h2>
            <p>First of all, on behalf of the board of directors, I would like to thank all of our associates for their trust and support, without which our success wouldn't be possible.</p>
            <p>
            Since the foundation of Laconic Pharma Pvt Ltd in 2019, the company has developed very fast and has taken over a significant space in the pharmaceutical industry. At present, Laconic Pharma Pvt Ltd has become a trusted name for finished pharmaceutical formulations across various therapeutic categories among the medical specialists. In the last few years, Laconic Pharma Pvt Ltd has emphasized on development of breakthrough solutions by integrating products, process and distribution with the needs of end consumers so that the products from labs become available to the bedside of the consumers in most effective and efficient manner. The company's goal is constant development, guarding the high quality of our products, keeping the affordability in reach,
             strict keeping of time limits and constant amelioration of our relations with our stakeholders and customers
            </p>
            </div>
            </section>
         <Footer/>
    </>
    );
};

export default Director;