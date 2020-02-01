import React from "react";
import CONST from '../../constants.js';
import {inject, observer} from "mobx-react";

@inject('board', 'gamePlay')
@observer
class BoardRow extends React.Component {


    render() {
        console.log('BoardRow render')
        console.log(this.props);

        const {y} = this.props;
        const {boardSize, board, boardState} = this.props.board;
        const {revealSquare, gameState} = this.props.gamePlay;

        console.log(this.props.board);

        let row = [];
        for (let x = 0; x < boardSize; x++) {
            row.push(
                <div
                    key={x}
                    style={boardState[y][x] === 1 ?
                        {
                            width: '25px',
                            height: '25px',
                            backgroundColor: 'rgb(189, 189, 189)',
                            border: '0.5px solid #8f908f'
                        } :
                        {
                            width: '18px', height: '18px', backgroundColor: '#bdbdbd', border: '4px outset'
                        }

                    }
                    onClick={() => revealSquare(y, x)}>
                    {boardState.length > 0 && board[y][x] !== 0 && (boardState[y][x] === CONST.IS_VISIBLE || (gameState === CONST.MINE_DETONATED && board[y][x] === -1)) &&
                    <span>{board[y][x]}</span>
                    }
                    {boardState.length > 0 && boardState[y][x] === CONST.IS_FLAGGED &&
                    <span>flag</span>
                    }
                </div>
            );
        }

        console.log(row);
        return row

    }
}

export default BoardRow