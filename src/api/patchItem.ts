import axios from "axios";
import {ITableItems} from "../types/types";

export async function patchItem(itemId:string,tableItem:ITableItems){
    try{
        return await axios.patch<ITableItems,ITableItems>(` https://hcateringback-dev.unitbeandev.com/api/wh/items/${itemId}`,tableItem)
    }catch (e){
        alert(e)
    }
}
