import React from 'react';
import {inject, observer} from "mobx-react"
import styles from './styles.js';

@inject('gamePlay')
@observer
class ResetButton extends React.Component {
    render() {
        const {restartGame} = this.props.gamePlay;
        return (
            <div onClick={() => restartGame()}>ResetButton</div>
        )
    }
}

export default ResetButton