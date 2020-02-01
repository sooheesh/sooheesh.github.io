import React from 'react';
import ResetButton from './ResetButton/index';
import MineCount from './MineCount/index';
import ElapsedTime from './ElapsedTime/index';
import Board from './Board/index';
import styles from './styles.js'

class Minesweeper extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.row}>
                    <MineCount/>
                    <ResetButton/>
                    <ElapsedTime/>
                </div>
                <Board/>
            </div>
        )
    }
}

export default Minesweeper;
