
interface ResponseObject{
    id: number;
    type: string;
    name: string;
    colors: [string];
    sizes: [number];
    brand: string;
}

type TabNavigatorParams ={
    ShoeList:ResponseObject;
    ShirtList:ResponseObject;
    PantsList:ResponseObject;
}

type DrawerNavigatorParams ={
    Home:undefined;
    Start:undefined;
    
}
export type {ResponseObject, TabNavigatorParams, DrawerNavigatorParams}