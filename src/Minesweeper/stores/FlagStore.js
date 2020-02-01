import {observable, action} from 'mobx';

export class FlagStore {
    @observable flagCount = 0;

    @action initializeFlag = () => this.flagCount = 0

    @action incrementFlagCount = () => this.flagCount++

    @action decreaseFlagCount = () => this.flagCount--
}