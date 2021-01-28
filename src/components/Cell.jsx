import produce from 'immer';

const Cell = ({ grid, setGrid, row, col, size }) => {
  const handleCellClick = () => {
    const newGrid = produce(grid, (gridCopy) => {
      gridCopy[row][col] = grid[row][col] ? 0 : 1;
    });
    setGrid(newGrid);
  };

  return (
    <div
      onClick={handleCellClick}
      style={{
        width: size,
        height: size,
        backgroundColor: grid[row][col] ? '#2DB875' : '#F7F8FC',
        border: 'solid 1px #3E4A56',
      }}
    />
  );
};

export default Cell;
