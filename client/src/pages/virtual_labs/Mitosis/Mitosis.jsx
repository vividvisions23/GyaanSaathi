// CellDivisionLab.jsx

import React, { useState } from 'react';
import './Mitosis.css';

const CellDivisionLab = () => {
  const [cellStage, setCellStage] = useState(1);

  const handleNextStage = () => {
    setCellStage((prevStage) => Math.min(prevStage + 1, 4));
  };

  const handlePreviousStage = () => {
    setCellStage((prevStage) => Math.max(prevStage - 1, 1));
  };

  return (
    <div className="cell-division-lab">
      <h1>Cell Division Lab: Mitosis</h1>
      <div className="microscope">
        <div className="slide" />
        <div className={`cell-stage stage-${cellStage}`}>
          {cellStage === 1 && <div className="cell nucleus">Nucleus</div>}
          {cellStage === 2 && <div className="cell chromosome">Chromosomes</div>}
          {cellStage === 3 && <div className="cell division">Cell Division</div>}
          {cellStage === 4 && <div className="cell daughter-cells">Daughter Cells</div>}
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePreviousStage} disabled={cellStage === 1}>
          Previous Stage
        </button>
        <button onClick={handleNextStage} disabled={cellStage === 4}>
          Next Stage
        </button>
      </div>
    </div>
  );
};

export default CellDivisionLab;
