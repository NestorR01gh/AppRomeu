import { token } from "./Variables";
import axios from "axios";
import { refresh } from "react-native-app-auth";
import { config } from "./Constants";

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
        let date = new Date();
        let tokenDate = new Date(token.data.accessTokenExpirationDate);
        if (date.getTime() > tokenDate.getTime()) {
            const result = await refresh(config, {
                refreshToken: token.data.refreshToken,
            });
            token.data = result;
        }
        return await axios.request({ url: this.url, method: this.method, headers: this.headers, data: this.params }).then((response) => { return response });
    }
}