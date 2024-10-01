import React, { useState } from 'react';
import './Career.css'; 
import Footer from '../../components/Footer/Footer';
const Career = () => {
   
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          address: '',
          jobCv: null,
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(formData);
          
        };
      
  return (
    <>
 
            <section className="hero-section" id="home">
  <div className="hero-content">
    <div className="hero-text">
    <h1>Career</h1>
    <p>Join our mission to transform the future of healthcare through innovation, passion, and dedication to improving lives</p>

    </div>
    <div className="career-image">
      <img src="/images/career.png" alt="Healthcare Solutions" />
    </div>
  </div>
</section>
   {/*<section className="benefits-section">
      <div className="container1">
        <div className="benefits-text">
          <h3>BENEFITS</h3>
          <h2>Why you Should Join Our Awesome Team</h2>
          <p>We want to feel like home when you are working at JMC (Japan Marketing & Consultancy Limited) & for that, we have curated a great set of benefits for you. It all starts with the free lunch!</p>
        </div>
        <div className="benefits-cards">
          <div className="card1">
            <div className="icon">👥</div>
            <h4>Team work</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          </div>
          <div className="card1">
            <div className="icon">🔐</div>
            <h4>Secured Future</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          </div>
          <div className="card1">
            <div className="icon">🎓</div>
            <h4>Learning Opportunity</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          </div>
          <div className="card1">
            <div className="icon">📈</div>
            <h4>Upgrade Skills</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          </div>
        </div>
      </div>
    </section>*/}
    <section className="career-openings">
  <div className="container1">
    <div className="career-header"><h3>COME JOIN US</h3>
    <h2>Career Openings<hr/></h2>
    <p>We're always looking for creative, talented self-starters to join the Locanic family.</p></div>
    <div className="form-image-wrapper">
      <form className="career-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
         <input
          type="text"
          name="phone"
          placeholder="Enter phone no."
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="text"
          placeholder="Enter some text"
          value={formData.text}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Add the image here */}
      <div className="career-images">
        <img src="images/Rectangle 3930.png" alt="Career Opportunities" />
      </div>
    </div>
  </div>

</section>
<Footer/>

    </>
  );
};

export default Career;
