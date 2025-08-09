import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
  const projectItemsRef = useRef([]);

  useEffect(() => {
    projectItemsRef.current = projectItemsRef.current.slice(0, projects.length);

    // Scroll reveal animation
    gsap.fromTo(
      projectItemsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations with subtle lift + shadow
    projectItemsRef.current.forEach(card => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            scale: 1.05, 
            y: -5,
            boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
            duration: 0.4, 
            ease: "power2.out" 
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            scale: 1, 
            y: 0,
            boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            duration: 0.4, 
            ease: "power2.out" 
          });
        });
      }
    });
  }, []);

  return (
    <section id="projects" ref={projectsRef}>
      <div className="container">
        <h2>My Projects</h2>
        <div style={projectsGridStyle}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectItemsRef.current[index] = el}
              className="card"
              style={projectCardStyle}
            >
              <h3 style={projectTitleStyle}>{project.title}</h3>
              <p style={projectDescStyle}>{project.description}</p>
              
              <div style={techStackStyle}>
                {project.technologies.map(tech => (
                  <span key={tech} style={techTagStyle}>{tech}</span>
                ))}
              </div>
              
              <div style={projectLinksStyle}>
                <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.live} className="btn" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projectsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '30px',
  maxWidth: '1000px',
  margin: '0 auto'
};

const projectCardStyle = {
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
  transition: 'box-shadow 0.3s ease'
};

const projectTitleStyle = {
  color: 'white',
  fontSize: '1.5rem',
  marginBottom: '15px'
};

const projectDescStyle = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '20px',
  flex: 1
};

const techStackStyle = {
  marginBottom: '20px'
};

const techTagStyle = {
  background: 'rgba(255, 255, 255, 0.2)',
  color: 'white',
  padding: '5px 12px',
  borderRadius: '15px',
  fontSize: '0.8rem',
  margin: '5px 5px 5px 0',
  display: 'inline-block'
};

const projectLinksStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center'
};

export default Projects;
