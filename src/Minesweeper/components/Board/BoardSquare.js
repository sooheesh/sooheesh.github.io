import React from "react";
import CONST from '../../constants.js';
import {inject, observer} from "mobx-react";
import styles from './styles.js';
import gStyles from '../styles.js';
import stores from '../../stores';


@inject('board', 'square', 'mine', 'game')
@observer
class BoardSquare extends React.Component {

    render() {
        console.log('BoardSquare render')

        const {y, x} = this.props;
        const {minesAndHintsBoard} = stores.board;
        const {isSquareRevealedBoard} = this.props.board;
        const {revealSquare, flagSquare} = this.props.square;
        const {gameState, detonatedMineCoordinates} = this.props.game;

        // console.log('minesAndHintsBoard', minesAndHintsBoard);
        if (Object.keys(isSquareRevealedBoard).length === 0) return null;

        let square = {
            isRevealed: isSquareRevealedBoard[y][x] === CONST.IS_REVEALED && minesAndHintsBoard[y][x] !== 0,
            isZero: isSquareRevealedBoard[y][x] === CONST.IS_REVEALED && minesAndHintsBoard[y][x] === 0,
            isDetonatedMine: gameState === CONST.MINE_DETONATED && minesAndHintsBoard[y][x] === CONST.IS_MINE && detonatedMineCoordinates.y === y && detonatedMineCoordinates.x === x,
            isMine: gameState === CONST.MINE_DETONATED && minesAndHintsBoard[y][x] === CONST.IS_MINE ,
            isFlagged: isSquareRevealedBoard[y][x] === CONST.IS_FLAGGED,
        }

        let style;

        if (square.isZero) {

            style = {...styles.size, ...styles.empty, ...gStyles.image}

        } else if (square.isRevealed) {

            style = {...styles.size, ...styles[`number${minesAndHintsBoard[y][x]}`], ...gStyles.image}

        } else if (square.isDetonatedMine) {

            style = {...styles.size, ...styles.detonatedMine, ...gStyles.image}

        } else if (square.isMine) {

            style = {...styles.size, ...styles.mine, ...gStyles.image}

        } else if (square.isFlagged) {

            style = {...styles.size, ...styles.flagged, ...gStyles.image}

        } else {

            style = {...styles.size, ...styles.blank, ...gStyles.image}

        }

        return <div
            key={x}
            style={style}
            onClick={() => revealSquare(y, x)}
            onContextMenu={e => {flagSquare(y, x); e.preventDefault()}}
        />

    }
}

export default BoardSquare