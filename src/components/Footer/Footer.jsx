import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="footer" id="contact">
        <Container>
          <Row>
            <Col md={3} className="company-info">
              <img src="/images/logo.png" alt="Company Logo" className="footer-logo" /></Col>
              <Col md={3} >
              <h4>Company</h4>
              <p>About us</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </Col>
            <Col md={3} className="quick-links">
              <h4>Quick Links</h4>
              <p>Home</p>
              <p>Shop</p>
              <p>Contact Us</p>
            </Col>
            <Col md={3} className="contact-info">
              <h4>Address</h4>
              <p>1234 Street Name, City, Country</p>
              <p>Email: contact@company.com</p>
              <p>Phone: +123456789</p>
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </div>
             
            </Col>
          </Row><br/>
        </Container>
        <hr/>
      </footer>

    );
};

export default Footer;