import React from 'react';
import {inject, observer} from "mobx-react"
import styles from './styles.js';


// @inject('testStore')
@observer
class MineCount extends React.Component {
    render() {
        // const {number, increase, decrease} = this.props.testStore;
        return (
            <div>MineCount</div>
        )
    }
}

export default MineCount