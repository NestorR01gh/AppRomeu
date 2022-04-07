import { token } from "./Variables";
import axios from "axios";

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
        let algo = await axios.request({url: this.url,method: this.method, headers: this.headers }).then(response=>{return response});
        console.log(algo.data);
    }
}