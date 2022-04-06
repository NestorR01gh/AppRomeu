import { token } from "./Variables";
import axios from "axios";
import { AxiosRequestConfig } from "axios";

export class Request {
    constructor(url, method) {
        this.url = url;
        this.method = method;
        this.headers = undefined;
    }

    withAuth() {
        let tokenData = token.data;
        this.headers = { Authorization: `Bearer ${tokenData}` }
    }

    execute = async () => {
        const res = await axios.request({method: this.method, url: this.url, headers: this.headers })
        return res;
    }
}