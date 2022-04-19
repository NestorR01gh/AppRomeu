import { token } from "./Variables";
import axios from "axios";

export class Request {
    constructor(url, method, params) {
        this.url = url;
        this.method = method;
        this.headers = undefined;
        this.params = params;
    }

    withAuth() {
        let tokenData = token.data.accessToken;
        this.headers = { Authorization: `Bearer ${tokenData}` }
    }

    execute = async () => {
        token.data = result;
        return await axios.request({ url: this.url, method: this.method, headers: this.headers, data: this.params }).then((response) => { return response });
    }
}