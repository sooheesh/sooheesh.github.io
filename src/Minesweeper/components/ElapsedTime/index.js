import React from 'react';
import { inject, observer } from "mobx-react"
import ThreeDigitNumber from "../ThreeDigitNumber";

@inject('elapsedTime')
@observer
class ElapsedTime extends React.Component {
    render() {
        const {elapsedTime} = this.props.elapsedTime;
        return <ThreeDigitNumber number={elapsedTime}/>

    }
}

export default ElapsedTime