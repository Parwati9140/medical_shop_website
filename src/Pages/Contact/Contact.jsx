import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Contact</h1>
            <p>Get in touch with us for any inquiries, support, or collaboration opportunities—our team is here to assist and guide you.</p>
          </div>
          <div className="contact-image">
            <img src="/images/contact1.png" alt="Healthcare Solutions" />
          </div>
        </div>
      </section>

      <section className="contact-sections">
        <div className="contact-rows">
          {/* Contact Form */}
          <div className="contact-form-wrappers">
            <form className="contact-forms" onSubmit={handleSubmit}>
              <h3>Please Get In Touch With Us<hr /></h3>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleChange}
              />
              <label>Email Id</label>
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
              />
              <label>Address</label>
              <textarea
                name="address"
                placeholder="Type your address here"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>

          {/* Contact Details and Map */}
          <div className="contact-details-wrappers">
            <div className="contact-details">
              <div className="contact-infos">
                <FaPhoneAlt /> <span>+91 85533 42365</span>
              </div>
              <div className="contact-infos">
                <FaEnvelope /> <span>laconicpharmapl@gmail.com</span>
              </div>
              <div className="contact-infos">
                <FaMapMarkerAlt /> <span> No 30/1, 2nd Main Road, Chinnapa garden, Bangalore 560046.</span>
              </div>
            </div>

            <div className="map">
              <div className="map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.461281848775!2d77.6079867153787!3d13.00680199082409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167a3f2f1111%3A0x8f8c52d63c0f2a93!2sBalaji%20Complex%2C%202nd%20Floor%2C%20No.36%2C%205th%20Main%20Rd%2C%20Lingarajapuram%2C%20Bengaluru%2C%20Karnataka%20560084!5e0!3m2!1sen!2sin!4v1696323315234!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Balaji+Complex,+2nd+Floor,+No.36,+5th+Main+Rd,+Lingarajapuram,+Bengaluru,+Karnataka+560084"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
