import React from 'react';
import { FaCode, FaShoppingCart, FaSearch, FaMapMarkerAlt, FaPaintBrush, FaMobile } from 'react-icons/fa';

const Cube3D = () => {
  return (
    <div className="cube-scene">
      <div className="cube-box">
        <div className="cube-face cube-front">
          <FaCode />
          <span>Web Dev</span>
        </div>
        <div className="cube-face cube-back">
          <FaShoppingCart />
          <span>E-Commerce</span>
        </div>
        <div className="cube-face cube-right">
          <FaSearch />
          <span>SEO</span>
        </div>
        <div className="cube-face cube-left">
          <FaMapMarkerAlt />
          <span>Google Biz</span>
        </div>
        <div className="cube-face cube-top">
          <FaPaintBrush />
          <span>Design</span>
        </div>
        <div className="cube-face cube-bottom">
          <FaMobile />
          <span>Mobile</span>
        </div>
      </div>
    </div>
  );
};

export default Cube3D;