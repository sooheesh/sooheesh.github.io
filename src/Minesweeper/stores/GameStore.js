import {observable, action} from 'mobx';
import CONST from '../constants.js';
import stores from './index';

export class GameStore {
    @observable gameState = CONST.BOARD_INITIALIZED;
    @observable detonatedMineCoordinates = {};

    @action setGameState = gameState => {
        this.gameState = gameState;
    }

    @action setDetonatedMineCoordinates = (y, x) => {
        this.detonatedMineCoordinates['y'] = y
        this.detonatedMineCoordinates['x'] = x
    }

    restartGame = () => {
        const {setMineCount} = stores.mine
        const {initializeFlag} = stores.flag
        const {stopCountingTime, initializeTime} = stores.elapsedTime
        const {setBoardSize, initializeBoardAdjustingSize} = stores.board
        const {initializeRevealedSquareCount} = stores.square

        stopCountingTime()
        initializeTime()
        initializeFlag()
        initializeRevealedSquareCount()
        setMineCount(5)
        setBoardSize(8)
        initializeBoardAdjustingSize()
    }
}