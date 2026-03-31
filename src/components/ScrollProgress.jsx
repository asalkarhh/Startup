import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handle = () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docH > 0 ? (scrollTop / docH) * 100 : 0);
    };
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <div className="scroll-progress-track">
      <div className="scroll-progress-fill" style={{ width: `${width}%` }} />
    </div>
  );
};

export default ScrollProgress;