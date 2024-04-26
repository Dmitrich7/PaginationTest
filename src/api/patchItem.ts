import axios from "axios";
import {ITableItems} from "../types/types";
import Cookies from "universal-cookie";

export async function patchItem(itemId:string,tableItem:ITableItems){
    const cookies = new Cookies();
    try{
        return await axios.patch<ITableItems,ITableItems>(`https://hcateringback-dev.unitbeandev.com/api/wh/items/${itemId}`,tableItem,{
            headers:{
                Authorization: cookies.get("Authorization")
            }
        })
    }catch (e){
        alert(e)
    }
}
