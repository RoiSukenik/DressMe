import { makeAutoObservable } from 'mobx';

class RootStore{
    setStore: SetStore;
    

    constructor(){
       this.setStore = new SetStore(this)
    }

}

class SetStore{
    completedSets: Number= 0
    rootStore
    constructor(rootStore:RootStore){
        makeAutoObservable(this,{rootStore : false});
        this.rootStore = rootStore;
    }
}

export default RootStore;