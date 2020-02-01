import {observable, action} from 'mobx';


export class TimeStore {
    @observable elapsedTime = 0;

    @action
    initializeTime = () => this.elapsedTime = 0

    @action
    startCountingTime = () => {
        this.countTime = setInterval(() => {
            this.elapsedTime++;
        }, 1000);
    }

    @action
    stopCountingTime = () => clearInterval(this.countTime)

}