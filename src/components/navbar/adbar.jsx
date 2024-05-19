import React from 'react';
import './navBar.css'

const AdBar = () => {
  return (
    <div className="ad-bar">
      <p className="ad-text-desktop">
      ¡Último día de Hot Week! ¡Aprovechá hasta un 60% OFF + 10% OFF extra!
      </p>
      <p className="ad-text-mobile">
      ¡Hot Week 10% OFF extra!
      </p>
    </div>
  );
};

export default AdBar;