import { ResponseObject } from "../interfaces/navigation";

export function Filter(searchTerm:string,data:Array<ResponseObject>){
   return data.filter((obj)=>{
        const sizes =obj.sizes.map(String);
        return  obj.brand.includes(searchTerm)  ||
                obj.name.includes(searchTerm)   ||
                obj.colors.includes(searchTerm) ||
                sizes.includes(searchTerm)
    })
}