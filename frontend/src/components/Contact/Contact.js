import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.scss';

const services = [
  { value: 'rpa', label: 'RPA' },
  { value: 'dataEngineering', label: 'Data Engineering' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'customSoftware', label: 'Custom Software' },
  { value: 'siteCreation', label: 'Création de Site' },
  { value: 'seoOptimization', label: 'Optimisation SEO' },
  { value: 'siteRenovation', label: 'Reprise de Site Web' },
  { value: 'hosting', label: 'Hébergement' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://webcresson.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWB1S3BY2Q"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWB1S3BY2Q');
          `}
        </script>
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
      {isSubmitted ? (
        <div className="confirmation-message">
          Thank you for your message. We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={formData.service} required onChange={handleChange}>
              <option value="" disabled>Select a service</option>
              {services.map(service => (
                <option key={service.value} value={service.value}>{service.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} required onChange={handleChange}></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
