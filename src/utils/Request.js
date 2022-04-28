import { token } from "./Variables";
import axios from "axios";

export class Request {
    constructor(url, method, params, responseType) {
        this.url = url;
        this.method = method;
        this.headers = undefined;
        this.params = params;
        this.responseType = responseType;
    }

    withAuth() {
        let tokenData = token.data.accessToken;
        this.headers = { Authorization: `Bearer ${tokenData}` }
    }

    execute = async () => {
        return await axios.request({ url: this.url, method: this.method, headers: this.headers, data: this.params, responseType: this.responseType });
    }
}