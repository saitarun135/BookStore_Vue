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
    },
    userDisplayBooksLowtoHigh(data){
        return axios.getData("/sortLowtoHigh",data);
    },
    userDisplayBooksHightoLow(data){
        return axios.getData("/sortHightoLow",data);
    },
    userSearchByName(data){
        return axios.getData(`/searchBooksbyName/${data.name}`,data);
    },
   userUpdateCart(data){
        return axios.updateData(`/addtocart/${data.id}`,data);
    },
    userRemoveFromCart(data){
        return axios.updateData(`/removecart/${data.id}`,data);
    },
    userDisplayCart(data){
        return axios.getData("/cart",data);
    },
    customerRegister(data){
        return axios.postData('/customerRegister',data);
    },
    confirmMail(data){
        return axios.postData('/mail',data);
    }
}
