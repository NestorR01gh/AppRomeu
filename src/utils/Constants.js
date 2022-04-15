export const backgroundColor = "#0D1A32";
export const fontFamily = "default";
//export const urlApi = "https://romeunet-api.development.grm.zone/api/";
export const urlApi = "https://portal-staging-api.grm-e.com/api/";
export const config = {
    issuer: 'https://grm-dev-identityserver.azurewebsites.net',
    clientId: 'Gr.Portal.Mobile',
    redirectUrl: 'net.azurewebsites.grm-dev-identityserver:/oauth2redirect',
    scopes: ['openid', 'roles', 'gr-portal', 'email', 'profile'],
    clientSecret: '6k_2Sd-&wA4n2CZn'
};