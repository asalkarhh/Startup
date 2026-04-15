import React, { useEffect, useRef, useState } from 'react';
import searchlogo from '../assets/searchlogo.png';
import asalkartechworks from '../assets/asalkartechworks.png';

const technologies = [
  { label: 'React', color: '#61DAFB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { label: 'Next.js', color: '#000000', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { label: 'Node.js', color: '#339933', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { label: 'MongoDB', color: '#47A248', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { label: 'Firebase', color: '#FFCA28', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { label: 'Tailwind CSS', color: '#06B6D4', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { label: 'Framer Motion', color: '#E83E8C', img: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
  { label: 'Shopify', color: '#7AB55C', img: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { label: 'Vercel', color: '#000000', img: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
  { label: 'AWS', color: '#FF9900', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { label: 'SEO', color: '#28A745', img: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png' },
  { label: 'GraphQL', color: '#E10098', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  { label: 'Bootstrap', color: '#7952B3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { label: 'Python', color: '#3776AB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { label: 'MySQL', color: '#4479A1', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { label: 'Flask', color: '#000000', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
];

const SIZE = 500;
const CENTER = SIZE / 2;
const INNER_RADIUS = 150;
const OUTER_RADIUS = 220;

const TechStackDiagram = () => {
  const innerItems = technologies.slice(0, 8);
  const outerItems = technologies.slice(8);

  const innerRefs = useRef([]);
  const outerRefs = useRef([]);
  const timeRef = useRef(0);
  const orbitRafRef = useRef(null);
  const orbitPausedRef = useRef(false);
  const [hovered, setHovered] = useState(null);

  const handleItemEnter = (key) => {
    orbitPausedRef.current = true;
    setHovered(key);
  };
  const handleItemLeave = () => {
    orbitPausedRef.current = false;
    setHovered(null);
  };

  useEffect(() => {
    const animate = () => {
      if (!orbitPausedRef.current) timeRef.current += 0.005;
      const t = timeRef.current;

      innerRefs.current.forEach((el, i) => {
        if (!el) return;
        const angle = (2 * Math.PI / innerItems.length) * i + t * 0.4;
        el.style.left = `${CENTER + INNER_RADIUS * Math.cos(angle)}px`;
        el.style.top = `${CENTER + INNER_RADIUS * Math.sin(angle)}px`;
      });

      outerRefs.current.forEach((el, i) => {
        if (!el) return;
        const angle = (2 * Math.PI / outerItems.length) * i - t * 0.25;
        el.style.left = `${CENTER + OUTER_RADIUS * Math.cos(angle)}px`;
        el.style.top = `${CENTER + OUTER_RADIUS * Math.sin(angle)}px`;
      });

      orbitRafRef.current = requestAnimationFrame(animate);
    };
    orbitRafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(orbitRafRef.current);
  }, [innerItems.length, outerItems.length]);

  return (
    <div className="od-wrapper">
      <div className="od-container">
        {/* Rings */}
        <div className="od-ring od-ring-outer" />
        <div className="od-ring od-ring-middle" />
        <div className="od-ring od-ring-inner" />

        {/* Center Logo */}
        <div 
          className="od-center-logo" 
          onMouseEnter={() => handleItemEnter('center')}
          onMouseLeave={handleItemLeave}
          onTouchStart={() => handleItemEnter('center')}
          onTouchEnd={handleItemLeave}
          onTouchCancel={handleItemLeave}
          style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'var(--bg-alt, #ffffff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          border: '1px solid var(--border, #eee)',
          zIndex: 10,
        }}>
          <img 
            src={hovered === 'center' ? asalkartechworks : searchlogo} 
            alt="Asalkar Techworks Logo" 
            style={{ width: '75%', height: 'auto', objectFit: 'contain' }} 
          />
        </div>

        {/* Inner items */}
        {innerItems.map((item, i) => {
          const key = `in-${i}`;
          const isH = hovered === key;
          return (
            <div
              key={key}
              ref={(el) => (innerRefs.current[i] = el)}
              className="od-item"
              onMouseEnter={() => handleItemEnter(key)}
              onMouseLeave={handleItemLeave}
              onTouchStart={() => handleItemEnter(key)}
              onTouchEnd={handleItemLeave}
              onTouchCancel={handleItemLeave}
              style={{
                borderColor: isH ? item.color : 'var(--border)',
                color: isH ? item.color : 'var(--text-2)',
                boxShadow: isH ? `0 8px 20px ${item.color}40` : 'none',
                transform: isH
                  ? 'translate(-50%, -50%) scale(1.2)'
                  : 'translate(-50%, -50%) scale(1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isH ? '8px' : '0px',
                padding: isH ? '8px 16px' : '10px',
                borderRadius: '30px',
                background: 'var(--bg)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                width: 'max-content',
              }}
            >
              <div style={{
                width: '24px', height: '24px', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', flexShrink: 0, background: '#ffffff', 
                borderRadius: '50%', padding: '3px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}>
                <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{
                overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: isH ? '150px' : '0px',
                opacity: isH ? 1 : 0, transition: 'all 0.3s ease', fontSize: '0.9rem', fontWeight: 600
              }}>
                {item.label}
              </span>
            </div>
          );
        })}

        {/* Outer items */}
        {outerItems.map((item, i) => {
          const key = `out-${i}`;
          const isH = hovered === key;
          return (
            <div
              key={key}
              ref={(el) => (outerRefs.current[i] = el)}
              className="od-item"
              onMouseEnter={() => handleItemEnter(key)}
              onMouseLeave={handleItemLeave}
              onTouchStart={() => handleItemEnter(key)}
              onTouchEnd={handleItemLeave}
              onTouchCancel={handleItemLeave}
              style={{
                borderColor: isH ? item.color : 'var(--border)',
                color: isH ? item.color : 'var(--text-2)',
                boxShadow: isH ? `0 8px 20px ${item.color}40` : 'none',
                transform: isH
                  ? 'translate(-50%, -50%) scale(1.2)'
                  : 'translate(-50%, -50%) scale(1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isH ? '8px' : '0px',
                padding: isH ? '8px 16px' : '10px',
                borderRadius: '30px',
                background: 'var(--bg)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                width: 'max-content',
              }}
            >
              <div style={{
                width: '24px', height: '24px', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', flexShrink: 0, background: '#ffffff', 
                borderRadius: '50%', padding: '3px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}>
                <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{
                overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: isH ? '150px' : '0px',
                opacity: isH ? 1 : 0, transition: 'all 0.3s ease', fontSize: '0.9rem', fontWeight: 600
              }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackDiagram;