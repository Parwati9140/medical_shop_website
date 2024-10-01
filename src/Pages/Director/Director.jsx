import React from 'react';
import Footer from '../../components/Footer/Footer';
import './Director.css';

const Director = () => {
    return (
        <>
        <section className="hero-section" id="home">
            <div className="hero-content">
                <div className="hero-text animate__animated animate__fadeInLeft">
                    <h1>Director's Desk</h1>
                    <p>Welcome to the world of Laconic Pharma Pvt Ltd</p>
                    <a href="#direct" className="btn btn-primary">Learn More</a>
                </div>
                <div className="direct-image animate__animated animate__fadeInRight">
                    <img src="/images/Rectangle 3934.png" alt="Healthcare Solutions" />
                </div>
            </div>
        </section>
        
        <section id="direct" className="direct-desk animate__animated animate__fadeInUp">
  <div className="direct-card">
    <div className="direct-text">
      <h2>Director's Desk<hr /></h2>
      <p>
        On behalf of the board, I thank our associates for their trust and support, which made our success possible.
      </p>
      <p>
        Since the foundation of Laconic Pharma Pvt Ltd in 2019, the company has rapidly grown and earned a trusted place in the pharmaceutical industry, with a focus on innovative solutions and quality products.
      </p>
    </div>
  </div>
</section>


        <Footer/>
    </>
    );
};

export default Director;
