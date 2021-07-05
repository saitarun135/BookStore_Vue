import AxiosService from '../service/axios';
const axios=new AxiosService()

export default{
    userRegister(data){
        return axios.postData("/auth/register",data);
    },
    userLogin(data){
        return axios.postData("/auth/login",data);
    },
    userForgot(data){
        return axios.postData("/auth/sendPasswordResetLink",data);
    },
    userReset(data){
        return axios.postData("/auth/resetPassword",data);
    },
    userDisplayBooks(data){
        return axios.getData("/getBooks",data);
    }
}