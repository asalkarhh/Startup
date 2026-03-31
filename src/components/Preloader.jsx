import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-cube-wrapper">
          <div className="preloader-cube">
            <div className="p-cube-face p-front">N</div>
            <div className="p-cube-face p-back">B</div>
            <div className="p-cube-face p-right">X</div>
            <div className="p-cube-face p-left">A</div>
            <div className="p-cube-face p-top">.</div>
            <div className="p-cube-face p-bottom">_</div>
          </div>
        </div>
        <div className="preloader-text">
          <span className="pl-bracket">&lt;</span>
          <span className="pl-name">Nexa</span>
          <span className="pl-highlight">Byte</span>
          <span className="pl-bracket"> /&gt;</span>
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