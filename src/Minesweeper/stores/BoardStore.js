import {observable, action} from 'mobx';
import CONST from '../constants.js';
import stores from '../stores';


export class BoardStore {
    boardTotalSize = 0

    @observable boardSize = 0
    minesAndHintsBoard = {}
    @observable isSquareRevealedBoard = {}

    @action
    setBoardSize = boardSize => {
        this.boardSize = boardSize
        this.boardTotalSize = Math.pow(this.boardSize, 2)
    }

    @action
    initializeBoardAdjustingSize = () => {
        const {setGameState} = stores.game

        this.minesAndHintsBoard = {}
        this.isSquareRevealedBoard = {}

        for (let y = 0; y < this.boardSize; y++) {
            this.minesAndHintsBoard[y] = {}
            this.isSquareRevealedBoard[y] = {}

            for (let x = 0; x < this.boardSize; x++) {
                this.minesAndHintsBoard[y][x] = 0
                this.setIsSquareRevealedBoard(y, x, CONST.IS_NOT_REVEALED)

            }
        }

        setGameState(CONST.BOARD_INITIALIZED)
    }

    @action setIsSquareRevealedBoard = (y, x, isSquareRevealedBoard) => this.isSquareRevealedBoard[y][x] = isSquareRevealedBoard

    isOutsideTheBoard = (coordinate) => coordinate === -1 || coordinate === this.boardSize

    setMinesAndHintsBoard = (squareIndexY, squareIndexX) => {
        const {setGameState} = stores.game

        let randomIndex
        let randomIndexList = []
        let y
        let x

        while (randomIndexList.length < stores.mine.mineCount) {
            randomIndex = Math.floor(Math.random() * this.boardTotalSize)
            if (randomIndexList.includes(randomIndex)) continue

            randomIndexList.push(randomIndex)

            y = Math.floor(randomIndex / this.boardSize)
            x = randomIndex % this.boardSize

            if (squareIndexY === y && squareIndexX === x) continue

            this.minesAndHintsBoard[y][x] = CONST.IS_MINE

            for (let ny = y-1; ny <= y+1; ny++) {
                if (this.isOutsideTheBoard(ny)) continue

                for (let nx = x-1; nx <= x+1; nx++) {
                    if (this.isOutsideTheBoard(nx)) continue
                    if (this.minesAndHintsBoard[ny][nx] === CONST.IS_MINE) continue
                    this.minesAndHintsBoard[ny][nx]++
                }
            }
        }

        setGameState(CONST.BOARD_SET)

    }


}