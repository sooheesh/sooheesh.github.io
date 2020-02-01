import React from 'react';
import ResetButton from './minesweeper/ResetButton';
import MineCount from './minesweeper/MineCount';
import ElapsedTime from './minesweeper/ElapsedTime';
import Board from './minesweeper/Board';

function App() {
  return (
    <div>
        <MineCount/>
        <ResetButton/>
        <ElapsedTime/>
        <Board/>
    </div>
  );
}

export default App;
