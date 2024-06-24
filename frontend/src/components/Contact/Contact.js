import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="contact">
      <Helmet>
        <title>Contactez Nous - WebCressonTech</title>
        <meta name="description" content="Contactez WebCressonTech pour des services de consultation en automatisation et ingénierie des données. Nous sommes ici pour vous aider à transformer votre entreprise." />
        <meta name="keywords" content="contact, consultation, automatisation, ingénierie des données, WebCressonTech" />
        <meta property="og:title" content="Contactez Nous - WebCressonTech" />
        <meta property="og:description" content="Contactez WebCressonTech pour des services de consultation en automatisation et ingénierie des données. Nous sommes ici pour vous aider à transformer votre entreprise." />
        <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
        <meta property="og:url" content="http://webcressontech.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contactez Nous - WebCressonTech" />
        <meta name="twitter:description" content="Contactez WebCressonTech pour des services de consultation en automatisation et ingénierie des données. Nous sommes ici pour vous aider à transformer votre entreprise." />
        <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      </Helmet>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required onChange={handleChange}></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
