import axios from "axios";
import {ITableItems, ITableResponse} from "../types/types";
import Cookies from "universal-cookie";

export async function postItem(tableItem:ITableItems){
    const cookies = new Cookies();
    try{
        return await axios.post<ITableResponse>(`https://hcateringback-dev.unitbeandev.com/api/wh/items`,tableItem,{
            headers:{
                Authorization: cookies.get("Authorization")
            }
        })
    }catch (e){
        alert(e)
    }
}
