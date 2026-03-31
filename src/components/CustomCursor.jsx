import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .hoverable, input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseout', () => setVisible(false));
    window.addEventListener('mouseover', () => setVisible(true));
    setTimeout(addHoverListeners, 1000);

    return () => window.removeEventListener('mousemove', move);
  }, [visible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div
        className={`custom-cursor-ring ${hovering ? 'hover' : ''} ${visible ? 'visible' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`custom-cursor-dot ${hovering ? 'hover' : ''} ${visible ? 'visible' : ''}`}
        style={{ left: dotPos.x, top: dotPos.y }}
      />
    </>
  );
};

export default CustomCursor;