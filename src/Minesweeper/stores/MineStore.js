import {observable, action} from 'mobx';

export class MineStore {
    @observable mineCount = 0;

    @action initializeMineCount = () => this.mineCount = 0

    @action setMineCount = mineCount => this.mineCount = mineCount
}