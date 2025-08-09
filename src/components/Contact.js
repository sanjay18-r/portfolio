import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalData } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef();
  const formRef = useRef();
  const infoRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Animate form
    gsap.fromTo(formRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate contact info
    gsap.fromTo(infoRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={contactRef}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div style={contactContentStyle}>
          
          {/* Contact Form */}
          <div ref={formRef} className="card" style={formCardStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                style={{...inputStyle, minHeight: '120px', resize: 'vertical'}}
                required
              />
              <button type="submit" className="btn" style={submitBtnStyle}>
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div ref={infoRef} className="card" style={contactInfoStyle}>
            <h3 style={contactInfoTitleStyle}>Contact Information</h3>
            
            <div style={contactInfoItemStyle}>
              <strong>📧 Email:</strong><br />
              <a href={`mailto:${personalData.email}`} style={linkStyle}>
                {personalData.email}
              </a>
            </div>

            <div style={contactInfoItemStyle}>
              <strong>📱 Phone:</strong><br />
              <a href={`tel:${personalData.phone}`} style={linkStyle}>
                {personalData.phone}
              </a>
            </div>

            <div style={contactInfoItemStyle}>
              <strong>📍 Location:</strong><br />
              <span style={locationStyle}>{personalData.location}</span>
            </div>

            <div style={contactInfoItemStyle}>
              <strong>🔗 LinkedIn:</strong><br />
              <a href={personalData.linkedin} style={linkStyle} target="_blank" rel="noopener noreferrer">
                Connect with me
              </a>
            </div>

            <div style={contactInfoItemStyle}>
              <strong>💻 GitHub:</strong><br />
              <a href={personalData.github} style={linkStyle} target="_blank" rel="noopener noreferrer">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const contactContentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '40px',
  maxWidth: '900px',
  margin: '0 auto'
};

const formCardStyle = {
  padding: '40px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const inputStyle = {
  padding: '15px',
  borderRadius: '8px',
  fontSize: '1rem',
  background: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.2)'
};

const submitBtnStyle = {
  alignSelf: 'center',
  minWidth: '200px'
};

const contactInfoStyle = {
  padding: '40px'
};

const contactInfoTitleStyle = {
  color: 'white',
  marginBottom: '30px',
  fontSize: '1.5rem'
};

const contactInfoItemStyle = {
  marginBottom: '25px',
  color: 'white',
  lineHeight: '1.6'
};

const linkStyle = {
  color: '#ff6b6b',
  textDecoration: 'none'
};

const locationStyle = {
  color: 'rgba(255, 255, 255, 0.9)'
};

export default Contact;
