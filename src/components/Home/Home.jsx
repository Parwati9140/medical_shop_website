import React from 'react';
import './home.css'; // Ensure you have the correct path for your styles
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom'; 

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";





const Home = () => {
 

  const products = [
    { id: 1, img: '/images/card.png' },
    { id: 2, img: '/images/card2.png' },
    { id: 3, img: '/images/card3.png' },
    { id: 4, img: '/images/card4.png' },
    { id: 5, img: '/images/card.png' },
   
  ];
  const products1 = [
    { id: 1, img: '/images/Rectangle 3899.png'},
    { id: 2, img: '/images/Rectangle 3900.png'},
    { id: 3, img: '/images/Rectangle 3901.png'},
    { id: 4, img: '/images/Rectangle 3902.png' },
  ];

  return (
    <>
  <Navbar/>

      <section className="hero-section" id="home">
  <div className="hero-content">
    <div className="hero-text">
      <h1>Your Trusted Partner in Healthcare Solutions</h1>
      <p>Delivering innovative and quality pharmaceutical products to improve your well-being.</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
    <div className="hero-image">
      <img src="/images/banner2.png" alt="Healthcare Solutions" />
    </div>
  </div>
</section>

<section id="about" className="about-us" >
        <div className="about-content">
          <div className="about-image">
            <img src="/images/Rectangle 3891.png" alt="About us" />
          </div>
          <div className="about-text">
            <h2>About Us<hr/></h2>
            <p>
            Laconic Pharma Pvt Ltd,  Bangalore, established in the year 2019 and till date has commensurably made for itself a great place in the domain of serving with a qualitative and effective range of medicinal products like Tablets, Capsules, Softgel Capsules, Syrups,  Sachets and Powders. These are procured from licensed and reliable vendors and are then widely supplied to our clients (Healthcare Institutions) all over the country. Further, our close business association with reputed WHO GMP certified pharmaceutical state-of-art manufacturing plant also allows us to deliver them both in bulk and small quantities as and when required. Having good health and longer life has been desire and right of every human being and emphasizing on this, 
            we bring along a range of our pharmaceutical products range in varying quantities and formulations to be consumed in various ways 
            </p>
            
            {/* Use Link for "Read More" navigation */}
            <Link to="/about">
              <button className="read-more-btn">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
  
      <section className="best-products" id="products">
      <h2>Best Products<hr/></h2>
      <Carousel controls={true} indicators={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-center" style={{ height: '400px' }}>
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="product-card mx-2">
                <img src={product.img} alt={product.name} className="img-fluid" />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center" style={{ height: '400px' }}>
            {products.slice(4, 8).map((product) => (
              <div key={product.id} className="product-card mx-2">
                <img src={product.img} alt={product.name} className="img-fluid" />
               
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </section>

    <section className="product-gallery">
  <Container>
    <h2 style={{ padding: '20px' }}>Product Gallery</h2>
    <Row>
      {products1.map((product) => (
        <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
          <div className="product-card">
            <img src={product.img} alt={product.name} className="img-fluid" />
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


<MDBContainer
  fluid
  className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"id="clients"
  style={{
    backgroundColor: "rgb(207, 235, 246)"
  }}
>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10">
          <MDBCarousel showControls showIndicators>
            {/* Carousel Item 1 */}
            <MDBCarouselItem className="active">
              <MDBCard>
                <MDBCardBody className="m-3">
                  <MDBRow>
                    <MDBCol
                      lg="4"
                      className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                    >
                      <img
                        src="/images/Ellipse 25.png"
                        className="rounded-circle img-fluid shadow-1"
                        alt="woman avatar"
                        width="200"
                        height="200"
                      />
                    </MDBCol>
                    <MDBCol lg="8">
                      <p className="text-muted fw-light mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Id quam sapiente molestiae numquam quas, voluptates
                        omnis nulla ea odio quia similique corrupti magnam.
                      </p>
                      <p className="fw-bold lead mb-2">
                        <strong>Anna Smith</strong>
                      </p>
                      <p className="fw-bold text-muted mb-0">Product Manager</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCarouselItem>

            {/* Carousel Item 2 */}
            <MDBCarouselItem>
              <MDBCard>
                <MDBCardBody className="m-3">
                  <MDBRow>
                    <MDBCol
                      lg="4"
                      className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                    >
                      <img
                        src="/images/Ellipse 25.png"
                        className="rounded-circle img-fluid shadow-1"
                        alt="man avatar"
                        width="200"
                        height="200"
                      />
                    </MDBCol>
                    <MDBCol lg="8">
                      <p className="text-muted fw-light mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, nisl nec suscipit fringilla, ligula nisi
                        volutpat libero.
                      </p>
                      <p className="fw-bold lead mb-2">
                        <strong>John Doe</strong>
                      </p>
                      <p className="fw-bold text-muted mb-0">Software Engineer</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCarouselItem>

            {/* You can add more carousel items here */}
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>




<Footer/>

     
    </>
  );
};

export default Home;
