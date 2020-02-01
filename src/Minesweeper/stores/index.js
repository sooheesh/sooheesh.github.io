import { GameStore } from './GameStore'
import { BoardStore } from './BoardStore'
import { SquareStore } from './SquareStore'
import { TimeStore } from './TimeStore'
import { MineStore } from './MineStore'
import { FlagStore } from './FlagStore'

const stores = {
    game: new GameStore(),
    board: new BoardStore(),
    square: new SquareStore(),
    elapsedTime: new TimeStore(),
    mine: new MineStore(),
    flag: new FlagStore()
};

export default stores;