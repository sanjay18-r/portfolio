import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef();
  const skillItemsRef = useRef([]);

  useEffect(() => {
    skillItemsRef.current = skillItemsRef.current.slice(0, skills.length);

    // Scroll animation
    gsap.fromTo(
      skillItemsRef.current,
      { scale: 0, opacity: 0, rotation: 180 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations
    skillItemsRef.current.forEach(item => {
      if (item) {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { 
            scale: 1.15, 
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { 
            scale: 1, 
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
      }
    });
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
      <div className="container">
        <h2>Skills</h2>
        <div style={skillsGridStyle}>
          {skills.map((skill, index) => (
            <div
              key={skill}
              ref={el => skillItemsRef.current[index] = el}
              className="card"
              style={skillItemStyle}
            >
              <span style={skillTextStyle}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skillsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '20px',
  maxWidth: '800px',
  margin: '0 auto'
};

const skillItemStyle = {
  textAlign: 'center',
  padding: '20px',
  cursor: 'pointer',
  minHeight: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  transition: 'box-shadow 0.3s ease'
};

const skillTextStyle = {
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold'
};

export default Skills;
