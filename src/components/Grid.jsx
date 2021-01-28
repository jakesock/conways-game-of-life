import './Grid.css';
import Cell from './Cell';

const Grid = ({ grid, setGrid, numCols, gridSize }) => {
  const columnWidth = gridSize / numCols;

  return (
    <div className="Grid-container">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, ${columnWidth}px)`,
        }}
      >
        {grid.map((rows, rowIdx) =>
          rows.map((col, colIdx) => (
            <Cell
              key={`${rowIdx}-${colIdx}`}
              grid={grid}
              setGrid={setGrid}
              row={rowIdx}
              col={colIdx}
              size={gridSize / numCols}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default Grid;
