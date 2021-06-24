import axios from 'axios'

axios.defaults.baseURL=process.env.VUE_APP_AXIOS_URL
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