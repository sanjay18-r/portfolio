import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalData } from '../data';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const textRef = useRef();
  const infoRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(infoRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="container">
        <h2>About Me</h2>
        <div style={aboutContentStyle}>
          <div ref={textRef} className="card" style={textCardStyle}>
            <p style={bioStyle}>{personalData.bio}</p>
          </div>

          

          <div ref={infoRef} className="card" style={infoCardStyle}>
            <div style={infoItemStyle}>
              <strong>📧 Email:</strong> {personalData.email}
            </div>
            <div style={infoItemStyle}>
              <strong>📱 Phone:</strong> {personalData.phone}
            </div>
            <div style={infoItemStyle}>
              <strong>📍 Location:</strong> {personalData.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const aboutContentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '40px',
  alignItems: 'start'
};

const textCardStyle = { minHeight: '200px' };
const infoCardStyle = { minHeight: '200px' };

const bioStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: 'white',
  textAlign: 'justify'
};

const infoItemStyle = {
  color: 'white',
  fontSize: '1rem',
  marginBottom: '15px',
  padding: '10px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
};

export default About;
