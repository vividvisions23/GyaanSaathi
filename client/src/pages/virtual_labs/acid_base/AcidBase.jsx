// AcidBaseLab.jsx

import React, { useState } from 'react';
import './AcidBase.css';

const AcidBaseLab = () => {
  const [pHLevel, setPHLevel] = useState(7);

  const handleAddAcid = () => {
    setPHLevel((prevPH) => Math.max(prevPH - 1, 0));
  };

  const handleAddBase = () => {
    setPHLevel((prevPH) => Math.min(prevPH + 1, 14));
  };

  // Calculate liquid height based on pH level
  const calculateLiquidHeight = () => {
    const maxHeight = 300; // Maximum height of the beaker
    const minHeight = 0; // Minimum height (empty beaker)
    const range = 14; // pH scale range
    const height = ((pHLevel / range) * maxHeight).toFixed(2);
    return Math.min(maxHeight, Math.max(minHeight, height));
  };

  return (
    <div className="acid-base-lab">
      <h1>Acids and Bases Virtual Lab</h1>
      <div className="container">
        <div className="beaker">
          <div
            className={`liquid pH${pHLevel}`}
            style={{ height: `${calculateLiquidHeight()}px` }}
          />
        </div>
        <div className="controls">
          <button onClick={handleAddAcid}>Add Acid</button>
          <button onClick={handleAddBase}>Add Base</button>
        </div>
      </div>
    </div>
  );
};

export default AcidBaseLab;