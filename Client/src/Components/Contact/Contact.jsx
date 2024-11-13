import React, { useState } from 'react';
import './Contact.css';
import { Phone, Mail, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      offset: 200,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phoneNumber, message } = formData;

    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phone: phoneNumber,
          message,
        }),
      });

      if (response.status === 201) {
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        alert('Failed to submit your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <h2>Contact AccessZone</h2>
          <p>
            Have any queries about our mobile and laptop accessories? Reach out
            to us! We're here to assist you with the best products and services.
          </p>
          <address>
            <p>
              <MapPin /> Karol Bagh, New Delhi, 110005
            </p>
            <p>
              <Phone /> +91 98765 43210
            </p>
            <p>
              <Mail /> contact@accesszone79@gmail.com
            </p>
          </address>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
