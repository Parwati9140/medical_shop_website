import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer" id="contact">
        <Container>
          <Row>
            <Col md={3} className="company-info">
              <img src="/images/logo.png" alt="Company Logo" className="footer-logo" /></Col>
          
            <Col md={4} className="quick-links">
              <h4>Quick Links</h4>
              <p>Home</p>
              <p>About us</p>
              <p>Career</p>
              <p>Contact Us</p>
            </Col>
            <Col md={5} className="contact-info">
      <h4>Address</h4>
      <p>
        <FaMapMarkerAlt /> No 30/1, 2nd Main Road, Chinnapa Garden, Bangalore 560046.
      </p>
      <p>
        <FaEnvelope /> Email: <a href="mailto:laconicpharmapl@gmail.com">laconicpharmapl@gmail.com</a>
      </p>
      <p>
        <FaPhone /> Phone: <a href="tel:+918553342365">+91 85533 42365</a>
      </p>
      <p>
        <FaWhatsapp /> WhatsApp: <a href="https://wa.me/918553342365">+91 85533 42365</a>
      </p>
    </Col>
          </Row><br/>
        </Container>
        <hr/>
        <div className="container-fluid pt-2 pb-2">
      <h6 className="text-center" style={{ color: '#000', fontWeight: 600 }}>
        COPYRIGHT @ 2024 Laconic Pharma. ALL RIGHTS RESERVED. Designed by  <a href="https://www.rpinfocare.com/">RP Infocare</a>
      </h6>
    
    </div>
      </footer>

    );
};

export default Footer;