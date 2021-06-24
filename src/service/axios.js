import axios from 'axios'

axios.defaults.baseURL="http://localhost:8000/api"
axios.defaults.headers.common['Authorization']='Bearer'+ localStorage.getItem('token');
export default class AxiosService{
    postData(url,data){
        return axios.post(url,data).then(response =>{
            return response;
        }).catch(error=>{
            return error;
        })
    }
}