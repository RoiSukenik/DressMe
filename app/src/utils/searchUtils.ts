import { ResponseObject } from "../interfaces/navigation";

export function Filter(searchTerm:string,data:Array<ResponseObject>){
    let filtered= data
            .sort((a,b)=>(a>b?1:-1))
            .filter((obj)=>{
                const sizes =obj.sizes.map(String);
                return  obj.brand.includes(searchTerm)  ||
                        obj.name.includes(searchTerm)   ||
                        obj.colors.includes(searchTerm) ||
                        sizes.includes(searchTerm)
    })
    if(searchTerm.length<=2){
        return filtered.slice(0,4);
    }
    return filtered;
}