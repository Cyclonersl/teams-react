import axios, { AxiosInstance } from "axios";

export default class Api {

    init = (): AxiosInstance => {
        const client: AxiosInstance = axios.create({ baseURL: '/', timeout: 31000 });
        return client;
    }

    getServiceProvider = () => {
        return this.init().get('/sample-data/service-provider.json');
    }
}