
import React, { useState, useEffect } from 'react';
import './PendulumLab.css';

const PendulumLab = () => {
  const [pendulumLength, setPendulumLength] = useState(150);
  const [time, setTime] = useState(0); 

  useEffect(() => {
    const pendulum = document.getElementById('pendulum');
    const bob = document.getElementById('bob');
    pendulum.style.animation = `swing ${Math.sqrt(pendulumLength) * 0.5}s ease-in-out infinite alternate`;

    // Update bob position based on pendulum length
    const bobPosition = pendulumLength - 20;
    bob.style.bottom = `${bobPosition}px`;
  }, [pendulumLength]);

  const handleLengthChange = (e) => {
    setTime(2*3.14*Math.sqrt(pendulumLength/9.816)); 
    setPendulumLength(e.target.value);
  };

  return (
    <>
    <div className="pendulum-lab">
      <h1>Virtual Pendulum Lab</h1>
      <div className="lab-container">
        <div className="pendulum-container">
          <div id="pendulum" className="pendulum">
            <div id="bob" className="bob"></div>
          </div>
        </div>
        <div className="controls-container">
          <label htmlFor="length">Pendulum Length:</label>
          <input
            type="range"
            id="length"
            name="length"
            min="50"
            max="300"
            step="1"
            value={pendulumLength}
            onChange={handleLengthChange}
            />
          <span>{pendulumLength} pixels</span>
        </div>
      </div>
      <div><p>Time period = {time}</p></div>
    </div>
    <div>
      <p>Objective: To understand the change in time period with the change in length of the wire</p>
      <p>Simulation: Slide the slider to change the length of the pendulum and see the change in the time period</p>
      <p>Theory: The time period of a pendulum is given by 
        T = 2*pi*sqrt(L/g)   
        where L is the length of the pendulum = length of rope + half of radius of bob, 
        g is the acceleration due to gravity
        </p>
    </div>
    </>
  );
};

export default PendulumLab;
