import {observable, action} from 'mobx';
import CONST from '../constants.js';
import stores from '../stores';


export class BoardStore {

    board = [];
    // TODO: boardSize 8개로 늘리기.
    boardSize = 4;
    mineCount = 5;
    @observable boardState = [];

    @action
    clearBoard = () => {
        let board = [];
        let boardState = [];

        for (let y = 0; y < this.boardSize; y++) {
            board.push([]);
            boardState.push([]);
            for (let x = 0; x < this.boardSize; x++) {
                board[y].push(0)
                boardState[y].push(0);
            }
        }

        stores.gamePlay.setGameState(CONST.BOARD_CLEARED)

        this.board = board;
        this.boardState = boardState;


        console.log('board');
        console.table(board);
    }

    @action setBoardState = boardState => this.boardState = boardState

    isOutsideTheBoundary = (coordinate) => coordinate === -1 || coordinate === this.boardSize;

    @action
    setBoard = (squareIndexY, squareIndexX) => {
        let randomIndex;
        let randomIndexList = [];
        let y;
        let x;
        let board = this.board;

        while (randomIndexList.length < this.mineCount) {
            randomIndex = Math.floor(Math.random() * Math.pow(this.boardSize, 2));
            if (randomIndexList.includes(randomIndex)) continue;

            randomIndexList.push(randomIndex);

            y = Math.floor(randomIndex / this.boardSize);
            x = randomIndex % this.boardSize;

            if (squareIndexY === y && squareIndexX === x) continue;

            board[y][x] = CONST.IS_A_MINE;

            for (let ny = y-1; ny <= y+1; ny++) {
                if (this.isOutsideTheBoundary(ny)) continue;

                for (let nx = x-1; nx <= x+1; nx++) {
                    if (this.isOutsideTheBoundary(nx)) continue;
                    if (board[ny][nx] === CONST.IS_A_MINE) continue;

                    board[ny][nx]++;
                }
            }
        }

        if (squareIndexY === 0 && squareIndexX === 0) {
            this.setBoard(squareIndexY, squareIndexX);
        }

        stores.gamePlay.setGameState(CONST.BOARD_SET)

        this.board = board;


        console.log('board');
        console.table(board);
    }


}