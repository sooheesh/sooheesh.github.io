import React from 'react';
import {inject, observer} from "mobx-react"
import styles from './styles.js';
import gStyles from '../styles.js';

@inject('game')
@observer
class ResetButton extends React.Component {
    render() {
        const {restartGame} = this.props.game;
        return (
            <div onClick={() => restartGame()}
            style={{...gStyles.image, ...styles.resetButton}}>

            </div>
        )
    }
}

export default ResetButton