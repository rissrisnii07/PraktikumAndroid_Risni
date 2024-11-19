//Risnianti Nurkhalifah_2210010104_PraktikumAndroid5BNrBjb
import { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import ApiManager from "./ApiManager";

export const GetUsers = async () => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        } as RawAxiosRequestHeaders,
    };
    try {
        const response: AxiosResponse = await ApiManager.get(`/users?page=1`, config);
        return response;
    } catch (err) {
        console.error("Error fetching users:", err);
        throw err;
    }
};
