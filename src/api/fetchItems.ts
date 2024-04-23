import axios from "axios";
import {ITableResponse} from "../types/types";

export async function fetchItems(token:string,page:number,pageSize:number){
    try{
        return await axios.get<ITableResponse>(`https://hcateringback-dev.unitbeandev.com/api/wh/items?page=${page}&pageSize=${pageSize}`,{
            headers:{
                Authorization: token
            }})
    }catch (e){
        alert(e)
    }
}
