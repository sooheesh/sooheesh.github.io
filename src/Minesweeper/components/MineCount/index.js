import React from 'react';
import {inject, observer} from "mobx-react"
import ThreeDigitNumber from "../ThreeDigitNumber";

@inject('mine', 'flag')
@observer
class MineCount extends React.Component {
    render() {
        // console.log('MineCount render')

        const {mineCount} = this.props.mine;
        const {flagCount} = this.props.flag;

        return <ThreeDigitNumber number={mineCount - flagCount}/>
    }
}

export default MineCount