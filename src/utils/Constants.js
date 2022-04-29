import AsyncStorage from '@react-native-async-storage/async-storage';

export const backgroundColor = "#0D1A32";

export const fonts = {
    openSans: {
        Bold: "OpenSans-Bold",
        Bolditalic: "OpenSans-BoldItalic",
        ExtraBold: "OpenSans-ExtraBold",
        ExtraBoldItalic: "OpenSans-ExtraBoldItalic",
        Italic: "OpenSans-Italic",
        Light: "OpenSans-Light",
        LightItalic: "OpenSans-LightItalic",
        Medium: "OpenSans-Medium",
        MediumItalic: "OpenSans-MediumItalic",
        Regular: "OpenSans-Regular",
        SemiBold: "OpenSans-SemiBold",
        SemiBoldItalic: "OpenSans-SemiBoldItalic"
    }
}


//export const api = "https://romeunet-api.development.grm.zone/api/";
export const api = { url: "https://portal-staging-api.grm-e.com/api/" };

export const config = {
    issuer: 'https://grm-dev-identityserver.azurewebsites.net',
    clientId: 'Gr.Portal.Mobile',
    redirectUrl: 'net.azurewebsites.grm-dev-identityserver:/oauth2redirect',
    scopes: ['openid', 'roles', 'gr-portal', 'email', 'profile'],
    clientSecret: '6k_2Sd-&wA4n2CZn'
};

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.error(e);
    }
}

export const getData = async (storeKey) => {
    try {
        const value = await AsyncStorage.getItem(storeKey)
        return value;
    } catch (e) {
        console.error(e);
    }
}