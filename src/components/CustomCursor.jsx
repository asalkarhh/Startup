import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hiddenByElement, setHiddenByElement] = useState(false);
  const hoverListenersRef = useRef([]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDotPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleMouseOut = () => setVisible(false);
    const handleMouseOver = () => setVisible(true);

    const addHoverListeners = () => {
      const enterHandler = () => setHovering(true);
      const leaveHandler = () => setHovering(false);
      
      const hideHandler = () => setHiddenByElement(true);
      const showHandler = () => setHiddenByElement(false);

      // Normal hover elements
      document.querySelectorAll('a, button, .hoverable, input, textarea').forEach(el => {
        el.addEventListener('mouseenter', enterHandler);
        el.addEventListener('mouseleave', leaveHandler);
        hoverListenersRef.current.push({ el, enterHandler, leaveHandler });
      });

      // Elements that swallow the cursor or open native OS menus (Google Maps, Select Dropdowns)
      document.querySelectorAll('select, .contact-map').forEach(el => {
        el.addEventListener('mouseenter', hideHandler);
        el.addEventListener('mouseleave', showHandler);
        if (el.tagName === 'SELECT') {
          el.addEventListener('focus', hideHandler);
          el.addEventListener('blur', showHandler);
        }
        hoverListenersRef.current.push({ el, enterHandler: hideHandler, leaveHandler: showHandler, isHiddenTriggers: true });
      });
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mouseover', handleMouseOver);
    const timer = setTimeout(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mouseover', handleMouseOver);
      clearTimeout(timer);
      hoverListenersRef.current.forEach(({ el, enterHandler, leaveHandler, isHiddenTriggers }) => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
        if (isHiddenTriggers && el.tagName === 'SELECT') {
          el.removeEventListener('focus', enterHandler);
          el.removeEventListener('blur', leaveHandler);
        }
      });
      hoverListenersRef.current = [];
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  const isActuallyVisible = visible && !hiddenByElement;

  return (
    <>
      <div
        className={`custom-cursor-ring ${hovering ? 'hover' : ''} ${isActuallyVisible ? 'visible' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`custom-cursor-dot ${hovering ? 'hover' : ''} ${isActuallyVisible ? 'visible' : ''}`}
        style={{ left: dotPos.x, top: dotPos.y }}
      />
    </>
  );
};

export default CustomCursor;