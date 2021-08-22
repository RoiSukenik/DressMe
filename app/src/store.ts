import { makeAutoObservable } from 'mobx';

class RootStore{
    setStore: SetStore
    dataStore :DataStore

    constructor(){
       this.setStore = new SetStore(this)
       this.dataStore = new DataStore(this)
    }

}
interface Set{
    pants:{
        id:string;
        size:string;
        color:string;
    };
    shirt:{
        id:string;
        size:string;
        color:string;
    };
    shoes:{
        id:string;
        size:string;
        color:string;
    };
}
class SetStore{
    completedSets: number= 0
    currentSet:Set 
    sets:Array<Set> = []
    rootStore: RootStore
    constructor(rootStore:RootStore){
        makeAutoObservable(this,{rootStore : false});
        this.rootStore = rootStore;
    }
    addCompletedSet(){
        this.completedSets += 1
    }
    deleteCompletedSet(){
        this.completedSets -= 1
    }
    addSet(currentSet:Set ){
        this.sets.push(currentSet)
    }
    addShirtId(id:string){
        this.currentSet.shirt.id = id;
    }
    addShirtColor(color:string){
        this.currentSet.shirt.color = color;
    }
    addShirtSize(size:string){
        this.currentSet.shirt.size = size;
    }
    addPantsId(id:string){
        this.currentSet.pants.id = id;
    }
    addPantsColor(color:string){
        this.currentSet.pants.color = color;
    }
    addPantsSize(size:string){
        this.currentSet.pants.size = size;
    }
    addShoesId(id:string){
        this.currentSet.shoes.id = id;
    }
    addShoesColor(color:string){
        this.currentSet.shoes.color = color;
    }
    addShoesSize(size:string){
        this.currentSet.shoes.size = size;
    }
    
}
interface ResponseObject{
    id: number;
    type: string,
    name: string,
    colors: [string],
    sizes: [number],
    brand: string
}
class DataStore{
    shoes:  Array<ResponseObject> = []
    pants:  Array<ResponseObject> = []
    shirts: Array<ResponseObject> = []
    rootStore: RootStore
    constructor(rootStore:RootStore){
        makeAutoObservable(this,{rootStore : false});
        this.rootStore = rootStore;
    }
    filterData(data:Array<ResponseObject>|null){
        if(data === null) return;
        data.forEach(dataObject =>{

            if(dataObject.type === 'shoes') this.shoes.push(dataObject);
            if(dataObject.type === 'pants') this.pants.push(dataObject);
            if(dataObject.type === 'shirt') this.shirts.push(dataObject);
        })
    }
}


export  {
    RootStore,
    DataStore,
    SetStore
};