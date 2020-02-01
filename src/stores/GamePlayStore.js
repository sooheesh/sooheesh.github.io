import {observable, action} from 'mobx';
import CONST from '../constants.js';
import stores from '../stores';


export class GamePlayStore {
    revealedSquareCount = 0;
    @observable gameState = CONST.BOARD_CLEARED;

    @action setGameState = gameState => {
        this.gameState = gameState;
    }

    @action
    revealSquare = (y, x, flagged = false) => {
        console.log('revealSquare');

        if (this.gameState === CONST.MINE_DETONATED) return;

        if (this.gameState === CONST.BOARD_CLEARED) stores.board.setBoard(y, x)

        let boardState = stores.board.boardState;

        if (flagged) {
            boardState[y][x] = CONST.IS_FLAGGED;
            return;
        }

        //TODO: 첫 오픈 시 주변 칸도 오픈
        if (boardState[y][x] !== CONST.IS_VISIBLE) {
            if (stores.board.board[y][x] === CONST.IS_A_MINE) {
                this.gameState = CONST.MINE_DETONATED;
                return;
            }

            boardState[y][x] = CONST.IS_VISIBLE;
            this.revealedSquareCount++;

            if (this.revealedSquareCount === Math.pow(stores.board.boardSize, 2) - stores.board.mineCount) {
                this.gameState = CONST.GAME_CLEARED;
            }
        }

        stores.board.setBoardState(boardState)

        console.table('boardState', boardState);
    }

    @action
    restartGame = () => {
        stores.board.clearBoard();
    }
}