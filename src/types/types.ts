interface ITableItems{
    id?: string;
    name: string;
    description: string;
    measurement_units: string;
    code: string
}
interface ITableResponse{
    result: ITableItems[];
    total: number
}
export {
    type ITableResponse,
    type ITableItems
}
