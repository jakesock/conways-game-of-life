import './Actions.css';
import React, { useState, useRef } from 'react';
import { useRunSimulation } from '../hooks/useRunSimulation';

const Actions = ({ numRows, numCols, setGrid, generateEmptyGrid }) => {
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useRunSimulation(numRows, numCols, setGrid, runningRef);

  const handleStartStopClick = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const handleRandomClick = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => (Math.random() > 0.65 ? 1 : 0)));
    }
    setGrid(rows);
  };

  const clear = () => {
    if (running) setRunning(false);
    setGrid(generateEmptyGrid());
  };

  return (
    <div className="Actions">
      <div className="btn-group" role="group" aria-label="Action Buttons">
        <button
          className={`btn ${running ? 'btn-danger' : 'btn-primary'}`}
          onClick={handleStartStopClick}
        >
          {running ? 'Stop Simulation' : 'Start Simulation'}
        </button>
        <button className="btn btn-primary" onClick={handleRandomClick}>
          Random Pattern
        </button>
        <button className="btn btn-primary" onClick={clear}>
          Clear Board
        </button>
      </div>
    </div>
  );
};

export default Actions;
