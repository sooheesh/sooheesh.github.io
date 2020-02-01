import React from 'react';
import BoardTable from './BoardTable'
import {inject, observer} from "mobx-react";

@inject('board')
@observer
class Board extends React.Component {

    componentDidMount() {
        const {clearBoard} = this.props.board;
        clearBoard();
    }

    render() {
        console.log('Board rendered');

        const {boardSize, board, boardState} = this.props.board;

        if (board.length === 0 || boardState.length === 0) return null;

        return <BoardTable boardSize={boardSize} />
    }
}

export default Board