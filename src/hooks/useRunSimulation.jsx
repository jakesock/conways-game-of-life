import { useCallback } from 'react';
import produce from 'immer';

const operations = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, 0],
  [1, -1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
];

export const useRunSimulation = (numRows, numCols, setGrid, ref) => {
  const runSimulation = useCallback(() => {
    if (!ref.current) {
      return;
    }

    setGrid((grid) => {
      return produce(grid, (gridCopy) => {
        for (let row = 0; row < numRows; row++) {
          for (let col = 0; col < numCols; col++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newRow = row + x;
              const newCol = col + y;
              if (
                newRow >= 0 &&
                newRow < numRows &&
                newCol >= 0 &&
                newCol < numCols
              ) {
                neighbors += grid[newRow][newCol];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[row][col] = 0;
            } else if (grid[row][col] === 0 && neighbors === 3) {
              gridCopy[row][col] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, [numRows, numCols, setGrid, ref]);

  return runSimulation;
};
