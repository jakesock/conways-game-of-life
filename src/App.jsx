import './App.css';
import { useState } from 'react';
import Grid from './components/Grid';
import Actions from './components/Actions';

const numRows = 30;
const numCols = 30;
const gridSize = 800;

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const App = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  return (
    <div className="App">
      <Actions
        numRows={numRows}
        numCols={numCols}
        setGrid={setGrid}
        generateEmptyGrid={generateEmptyGrid}
      />
      <Grid
        grid={grid}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
        gridSize={gridSize}
      />
    </div>
  );
};

export default App;
