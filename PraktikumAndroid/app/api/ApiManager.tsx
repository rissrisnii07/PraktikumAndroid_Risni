//Risnianti Nurkhalifah_2210010104_PraktikumAndroid5BNrBjb
import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'https://reqres.in/api',
    responseType: 'json',
});

export default ApiManager;