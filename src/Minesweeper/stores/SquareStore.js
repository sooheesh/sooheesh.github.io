import {action} from 'mobx';
import CONST from '../constants.js';
import stores from './index';

export class SquareStore {
    revealedSquareCount = 0;

    initializeRevealedSquareCount = () => this.revealedSquareCount = 0;

    flagSquare = (y, x) => {
        const {isSquareRevealedBoard, setIsSquareRevealedBoard} = stores.board
        const {flagCount, incrementFlagCount, decreaseFlagCount} = stores.flag
        const {mineCount} = stores.mine

        if (isSquareRevealedBoard[y][x] === CONST.IS_FLAGGED) {
            decreaseFlagCount()
            setIsSquareRevealedBoard(y, x, CONST.IS_NOT_REVEALED)

        } else if (isSquareRevealedBoard[y][x] === CONST.IS_NOT_REVEALED) {
            if (mineCount - flagCount === 0) return;
            incrementFlagCount()
            setIsSquareRevealedBoard(y, x, CONST.IS_FLAGGED)

        }
    }

    revealSquare = (y, x) => {
        // console.log('revealSquare', y, x)
        const {gameState, setGameState} = stores.game;
        const {
            minesAndHintsBoard,
            isSquareRevealedBoard,
            setMinesAndHintsBoard,
            setIsSquareRevealedBoard,
            boardTotalSize,
            isOutsideTheBoard
        } = stores.board;
        const {startCountingTime, stopCountingTime} = stores.elapsedTime;
        const {setDetonatedMineCoordinates} = stores.game;
        const {mineCount} = stores.mine

        if (gameState === CONST.MINE_DETONATED) return

        if (isSquareRevealedBoard[y][x] === CONST.IS_REVEALED) return

        if (gameState === CONST.BOARD_INITIALIZED) {
            setMinesAndHintsBoard(y, x);
            startCountingTime();
        }

        if (minesAndHintsBoard[y][x] === CONST.IS_MINE) {
            setDetonatedMineCoordinates(y, x)
            setGameState(CONST.MINE_DETONATED)
            stopCountingTime();
            return;
        }

        setIsSquareRevealedBoard(y, x, CONST.IS_REVEALED)
        this.revealedSquareCount++;

        if (this.revealedSquareCount === boardTotalSize - mineCount) {
            setGameState(CONST.GAME_CLEARED)
            stopCountingTime();
            return;
        }

        if (minesAndHintsBoard[y][x] === 0) {
            for (let ny = y - 1; ny <= y + 1; ny++) {
                if (isOutsideTheBoard(ny)) continue;

                for (let nx = x - 1; nx <= x + 1; nx++) {
                    if (isOutsideTheBoard(nx)) continue;
                    if (minesAndHintsBoard[ny][nx] === CONST.IS_MINE) continue;

                    this.revealSquare(ny, nx)
                }
            }
        }

    }

}