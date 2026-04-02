import { useEffect, useRef, useState } from 'react';

const innerItems = [
  { label: 'Web Dev',     color: '#FF6B35' },
  { label: 'E-Commerce',  color: '#1D6FA5' },
  { label: 'SEO',         color: '#28A745' },
  { label: 'Google Maps', color: '#6F42C1' },
  { label: 'Mobile Apps', color: '#E83E8C' },
];

const outerItems = [
  { label: 'Custom Sites',  color: '#FF6B35' },
  { label: 'Online Stores', color: '#1D6FA5' },
  { label: 'Local SEO',     color: '#28A745' },
  { label: 'Map Ranking',   color: '#6F42C1' },
  { label: 'UI/UX Design',  color: '#E83E8C' },
];

const COLORS = ['#FF6B35','#FFC107','#28A745','#1D6FA5','#6F42C1','#E83E8C','#61DAFB','#F59E0B','#34D399','#818CF8'];

const SIZE           = 500;
const CENTER         = SIZE / 2;      // 250
const INNER_RADIUS   = 150;
const OUTER_RADIUS   = 220;
const PARTICLE_COUNT = 420;
const P_HOME_RADIUS  = 78;            // matches inner ring radius (160px dia → 80px r)

const OrbitDiagram = () => {
  const innerRefs       = useRef([]);
  const outerRefs       = useRef([]);
  const timeRef         = useRef(0);
  const orbitRafRef     = useRef(null);
  const orbitPausedRef  = useRef(false);

  const canvasRef       = useRef(null);
  const particlesRef    = useRef([]);
  const particleHovered = useRef(false);
  const particleRafRef  = useRef(null);

  const wrapperRef      = useRef(null); // Ref for the main component wrapper
  const [hovered, setHovered] = useState(null);

  const handleItemEnter = (key) => { orbitPausedRef.current = true;  setHovered(key); };
  const handleItemLeave = ()    => { orbitPausedRef.current = false; setHovered(null); };

  /* ── Build particles + start canvas animation in one effect ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* Explicitly set pixel dimensions — React attribute handling can be unreliable */
    canvas.width  = SIZE;
    canvas.height = SIZE;

    const ctx = canvas.getContext('2d');

    /* Build particles synchronously before first draw.
       ~35% are "core" — always stay at centre, prevent gap on hover. */
    const list = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const homeAngle = Math.random() * Math.PI * 2;
      const homeDist  = Math.random() * P_HOME_RADIUS;
      const homeX     = CENTER + Math.cos(homeAngle) * homeDist;
      const homeY     = CENTER + Math.sin(homeAngle) * homeDist;

      const spreadAngle = Math.random() * Math.PI * 2;
      const spreadDist  = 90 + Math.random() * (OUTER_RADIUS - 90);
      const spreadX     = CENTER + Math.cos(spreadAngle) * spreadDist;
      const spreadY     = CENTER + Math.sin(spreadAngle) * spreadDist;

      list.push({
        x: homeX, y: homeY,
        homeX, homeY,
        spreadX, spreadY,
        size:    Math.random() * 2.5 + 1.5,
        speed:   Math.random() * 0.04 + 0.02,
        opacity: Math.random() * 0.3 + 0.7,
        color:   COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    particlesRef.current = list;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      particlesRef.current.forEach(p => {
        const tx = particleHovered.current ? p.spreadX : p.homeX;
        const ty = particleHovered.current ? p.spreadY : p.homeY;
        p.x += (tx - p.x) * p.speed;
        p.y += (ty - p.y) * p.speed;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle   = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      particleRafRef.current = requestAnimationFrame(draw);
    };

    particleRafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(particleRafRef.current);
  }, []);

  /* ── Orbit animation ── */
  useEffect(() => {
    const animate = () => {
      if (!orbitPausedRef.current) timeRef.current += 0.01;
      const t = timeRef.current;

      innerRefs.current.forEach((el, i) => {
        if (!el) return;
        const angle = (2 * Math.PI / innerItems.length) * i + t * 0.4;
        el.style.left = `${CENTER + INNER_RADIUS * Math.cos(angle)}px`;
        el.style.top  = `${CENTER + INNER_RADIUS * Math.sin(angle)}px`;
      });

      outerRefs.current.forEach((el, i) => {
        if (!el) return;
        const angle = (2 * Math.PI / outerItems.length) * i - t * 0.25;
        el.style.left = `${CENTER + OUTER_RADIUS * Math.cos(angle)}px`;
        el.style.top  = `${CENTER + OUTER_RADIUS * Math.sin(angle)}px`;
      });

      orbitRafRef.current = requestAnimationFrame(animate);
    };
    orbitRafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(orbitRafRef.current);
  }, []);

  /* ── Intersection Observer to reset state when out of view ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is no longer in view
        if (!entry.isIntersecting) {
          // Reset particle state and orbit pause state
          particleHovered.current = false;
          orbitPausedRef.current = false;
          setHovered(null); // Ensure no item is visually hovered
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.0 // Trigger when any part of the target element is visible (or becomes invisible)
      }
    );

    const wrapper = wrapperRef.current;
    if (wrapper) observer.observe(wrapper);
    return () => { if (wrapper) observer.unobserve(wrapper); };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleans up on unmount

  return (
    <div ref={wrapperRef} className="od-wrapper">
      <div className="od-container">

        {/* Rings */}
        <div className="od-ring od-ring-outer"  />
        <div className="od-ring od-ring-middle" />
        <div className="od-ring od-ring-inner"  />

        {/* Canvas — particles, pointer-events:none so items stay clickable */}
        <canvas ref={canvasRef} className="od-canvas" />

        {/* Invisible hover zone at centre to trigger particle spread */}
        <div
          className="od-hover-zone"
          onMouseEnter={() => { particleHovered.current = true;  orbitPausedRef.current = true;  }}
          onMouseLeave={() => { particleHovered.current = false; orbitPausedRef.current = false; }}
        />

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
              style={{
                borderColor: isH ? item.color : '#ddd',
                color:       isH ? item.color : '#555',
                boxShadow:   isH ? `0 8px 20px ${item.color}40` : 'none',
                transform:   isH
                  ? 'translate(-50%, -50%) scale(1.2)'
                  : 'translate(-50%, -50%) scale(1)',
              }}
            >
              <span className="od-bullet" style={{ background: item.color }} />
              {item.label}
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
              style={{
                borderColor: isH ? item.color : '#ddd',
                color:       isH ? item.color : '#555',
                boxShadow:   isH ? `0 8px 20px ${item.color}40` : 'none',
                transform:   isH
                  ? 'translate(-50%, -50%) scale(1.2)'
                  : 'translate(-50%, -50%) scale(1)',
              }}
            >
              <span className="od-bullet" style={{ background: item.color }} />
              {item.label}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default OrbitDiagram;
