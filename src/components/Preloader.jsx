import React from 'react';
import logo from '../assets/logo.png';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-cube-wrapper">
          <div className="preloader-cube">
            <div className="p-cube-face p-front">A</div>
            <div className="p-cube-face p-back">S</div>
            <div className="p-cube-face p-right">A</div>
            <div className="p-cube-face p-left">L</div>
            <div className="p-cube-face p-top">K</div>
            <div className="p-cube-face p-bottom">A</div>
          </div>
        </div>
        <div className="preloader-text">
          
          <img src={logo} alt="Asalkar Techworks" height="60" style={{ objectFit: 'contain', margin: '0 8px', verticalAlign: 'middle', filter: 'brightness(0) invert(1)' }} />
          
        </div>
        <div className="preloader-bar-track">
          <div className="preloader-bar-fill"></div>
        </div>
        <p className="preloader-status">Crafting Digital Excellence...</p>
      </div>
    </div>
  );
};

export default Preloader;