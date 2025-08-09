import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { personalData } from '../data';
import picOfMe from '../assests/picofme.png';

const Header = () => {
  const headerRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const ctaRef = useRef();
  const particlesRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(nameRef.current, { y: 80, opacity: 0, duration: 1.2 })
      .from(titleRef.current, { y: 40, opacity: 0, duration: 1 }, '-=0.8')
      .from(ctaRef.current, { scale: 0, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5');

    gsap.to(headerRef.current, {
      y: -10,
      duration: 3,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });

    createFloatingParticles();
  }, []);

  const createFloatingParticles = () => {
    const container = particlesRef.current;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 35; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      fragment.appendChild(particle);

      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true
      });
    }

    container.appendChild(fragment);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header ref={headerRef} style={headerStyle}>
      <div ref={particlesRef} style={particlesStyle}></div>
      <div style={glowEffectStyle}></div>

      <div style={contentWrapper}>
        {/* Left: Text */}
        <div style={{ flex: 1, textAlign: 'left' }}>
          <h1 ref={nameRef} style={nameStyle}>{personalData.name}</h1>
          <h3 ref={titleRef} style={subtitleStyle}>{personalData.title}</h3>

          <div ref={ctaRef} style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <button className="btn glow-btn" onClick={() => scrollToSection('about')}>About Me</button>
            <button className="btn glow-btn" onClick={() => scrollToSection('projects')}>My Work</button>
          </div>

          <div style={socialLinksStyle}>
            <a href="https://www.linkedin.com/in/sanjay-r-1b5758290" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/sanjay18-r" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        {/* Right: Bigger, more attractive image */}
        <div style={imageWrapper}>
          <img
            src={picOfMe}
            alt="Me"
            style={{
              width: '400px', // Increased size
              height: '400px', // Increased size
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 0 60px rgba(255,255,255,0.5)',
              border: '6px solid rgba(255,255,255,0.3)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 0 80px rgba(255,255,255,0.8)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 60px rgba(255,255,255,0.5)';
            }}
          />
        </div>
      </div>

      {/* Floating shapes */}
      <div style={shape1Style}></div>
      <div style={shape2Style}></div>
      <div style={shape3Style}></div>
      <div style={shape4Style}></div>
      <div style={shape5Style}></div>
    </header>
  );
};

// Layout styles
const headerStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  padding: '0 5%'
};

const contentWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  zIndex: 10
};

const imageWrapper = {
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const particlesStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 1
};

const subtitleStyle = {
  fontSize: '1.5rem',
  color: 'rgba(255, 255, 255, 0.9)',
  fontWeight: 'normal'
};

const nameStyle = {
  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24)',
  backgroundSize: '400% 400%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'gradientText 6s ease infinite',
  textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
  fontSize: '3.5rem',
  marginBottom: '15px'
};

const glowEffectStyle = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '60%',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
  animation: 'pulse 4s ease-in-out infinite',
  zIndex: 1
};

const socialLinksStyle = {
  marginTop: '20px',
  display: 'flex',
  gap: '20px'
};

const socialLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'color 0.3s ease, text-shadow 0.3s ease'
};

// Floating shapes
const shape1Style = { position: 'absolute', top: '10%', right: '10%', width: '100px', height: '100px', background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(79, 172, 254, 0.3))', borderRadius: '20px', animation: 'float1 6s ease-in-out infinite', zIndex: 0, backdropFilter: 'blur(10px)' };
const shape2Style = { position: 'absolute', bottom: '20%', left: '15%', width: '80px', height: '80px', background: 'linear-gradient(45deg, rgba(79, 172, 254, 0.3), rgba(163, 155, 254, 0.3))', borderRadius: '50%', animation: 'float2 8s ease-in-out infinite', zIndex: 0, backdropFilter: 'blur(10px)' };
const shape3Style = { position: 'absolute', top: '60%', right: '20%', width: '60px', height: '60px', background: 'linear-gradient(45deg, rgba(249, 202, 36, 0.3), rgba(255, 107, 107, 0.3))', transform: 'rotate(45deg)', animation: 'float3 7s ease-in-out infinite', zIndex: 0, backdropFilter: 'blur(10px)' };
const shape4Style = { position: 'absolute', top: '20%', left: '20%', width: '40px', height: '40px', background: 'linear-gradient(45deg, rgba(163, 155, 254, 0.4), rgba(255, 107, 107, 0.4))', borderRadius: '50%', animation: 'float1 9s ease-in-out infinite reverse', zIndex: 0 };
const shape5Style = { position: 'absolute', bottom: '10%', right: '30%', width: '70px', height: '70px', background: 'linear-gradient(45deg, rgba(76, 217, 100, 0.3), rgba(79, 172, 254, 0.3))', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'float2 5s ease-in-out infinite', zIndex: 0 };

export default Header;
