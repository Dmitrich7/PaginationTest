interface ITableItems{
    id: string;
    name: string;
    description: string;
    measurement_units: string;
    code: string
}
interface ITableResponse{
    result: ITableItems[];
    total: number
}
interface IUserCredentials{
    login: string;
    password: string;
}
export {
    type IUserCredentials,
    type ITableResponse,
    type ITableItems
}
