import { observable, action } from 'mobx';

class Store {
    @observable Tnumber = 5;

    @action
    increaseNumber = () => {
        this.Tnumber++;
    }

    decreaseNumber = () => {
        this.Tnumber--;
    }
}

export default Store;