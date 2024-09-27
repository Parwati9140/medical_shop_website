import React from 'react';

import Footer from '../../components/Footer/Footer';

import { Card, Container, Row, Col } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <div className="about-page">
            <section className="hero-section" id="home">
  <div className="hero-content">
    <div className="hero-text">
    <h1>About Us</h1>
    <p>Bringing quality healthcare to all with a diverse range of trusted pharmaceutical solutions</p>

    </div>
    <div className="hero-images">
      <img src="/images/about.png" alt="Healthcare Solutions" />
    </div>
  </div>
</section>

<section id="about" className="about-us" >
        <div className="about-content">
          <div className="about-image">
            <img src="/images/Rectangle 38912.png" alt="About us" />
          </div>
          <div className="about-text">
            <h2>About Us<hr/></h2>
            <p>
            Laconic Pharma Pvt Ltd,  Bangalore, established in the year 2019 and till date has commensurably made for itself a great place in the domain of serving with a qualitative and effective range of medicinal products like Tablets, Capsules, Softgel Capsules, Syrups,  Sachets and Powders. These are procured from licensed and reliable vendors and are then widely supplied to our clients (Healthcare Institutions) all over the country. Further, our close business association with reputed WHO GMP certified pharmaceutical state-of-art manufacturing plant also allows us to deliver them both in bulk and small quantities as and when required. Having good health and longer life has been desire and right of every human being and emphasizing on this, 
            we bring along a range of our pharmaceutical products range in varying quantities and formulations to be consumed in various ways 
            </p>
          
          
          </div>
        </div>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6} lg={5}>
              <Card className="text-center p-4 shadow "style={{ backgroundColor: 'skyblue' }}>
                <Card.Body>
                  <Card.Title className='fs-4'>Mission<hr/></Card.Title>
                  <Card.Text className='p-3'>
                    To be the most trusted and respected pharmaceutical company in delivering excellence to our customers.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={5}>
              <Card className="text-center p-4 shadow mb-5"style={{ backgroundColor: 'skyblue' }}>
                <Card.Body>
                  <Card.Title className='fs-4'>Vision<hr/></Card.Title>
                  <Card.Text className='p-3'>
                    To serve our customers by providing the highest quality pharmaceutical products that address all their
                    healthcare concerns. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

  <Footer/>
           
        </div>
    );
};

export default AboutUs;
