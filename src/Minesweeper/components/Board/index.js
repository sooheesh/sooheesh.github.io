import React from 'react';
import BoardTable from './BoardTable'
import {inject, observer} from "mobx-react";

@inject('game', 'board')
@observer
class Board extends React.Component {

    componentDidMount() {
        const {restartGame} = this.props.game;
        restartGame()
    }

    render() {
        // console.log('Board rendered');

        const {boardSize} = this.props.board;

        return <BoardTable boardSize={boardSize} />
    }
}

export default Board