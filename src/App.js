import React from 'react';
import ResetButton from './minesweeper/ResetButton';
import LandMineCount from './minesweeper/LandMineCount';
import ElapsedTime from './minesweeper/ElapsedTime';
import Board from './minesweeper/Board';

function App() {
  return (
    <div>
        <LandMineCount/>
        <ResetButton/>
        <ElapsedTime/>
        <Board/>
    </div>
  );
}

export default App;
