import AxiosService from '../service/axios';
const axios=new AxiosService()

export default{
    userRegister(data){
        return axios.postData("/register",data);
    },
}