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
              <h3>Please Get In Touch With Us<hr/></h3>
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
                <FaPhoneAlt /> <span>0283 555 0674</span>
              </div>
              <div className="contact-infos">
                <FaEnvelope /> <span>jackson.graham@example.com</span>
              </div>
              <div className="contact-infos">
                <FaMapMarkerAlt /> <span>Lansing, Illinois</span>
              </div>
            </div>

            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8291871669623!2d144.96167941556952!3d-37.8136282797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b1d6b5%3A0xf577c75d80e0e87f!2sLansing%2C%20Illinois!5e0!3m2!1sen!2sus!4v1631525785533!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
