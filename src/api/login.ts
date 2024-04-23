import axios from "axios";

export default async function login(){
    try{
        const res = await axios.post('https://hcateringback-dev.unitbeandev.com/api/auth/login',{
            login: 'admin',
            password: 'admin'
        })
        return res;
    }catch (e) {
        alert(e)
    }
}
