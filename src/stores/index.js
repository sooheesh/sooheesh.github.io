import { BoardStore } from './BoardStore'
import { GamePlayStore } from './GamePlayStore'

const stores = {
    board: new BoardStore(),
    gamePlay: new GamePlayStore()
};

export default stores;