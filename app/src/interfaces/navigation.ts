interface ResponseObject{
    id: number;
    type: string;
    name: string;
    colors: [string];
    sizes: [number];
    brand: string;
}

type TabNavigatorParams ={
    ShoeList:ResponseObject,
    Shirt:ResponseObject,
    Pants:ResponseObject
}

export type {ResponseObject, TabNavigatorParams}