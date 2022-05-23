export const colors = { primary: "#0D1A32", secondary: "#4CBC74" }

export const langImages = [
    require('../assets/images/langFlags/spain.png'),
    require('../assets/images/langFlags/uk.png'),
    require('../assets/images/langFlags/france.png'),
    require('../assets/images/langFlags/portugal.png')
]

export const fonts = {
    openSans: {
        Bold: "OpenSans-Bold",
        BoldItalic: "OpenSans-BoldItalic",
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

// export const identityConfig = {
//     issuer: 'https://grm-dev-identityserver.azurewebsites.net',
//     clientId: 'Gr.Portal.Mobile',
//     redirectUrl: 'net.azurewebsites.grm-dev-identityserver:/oauth2redirect',
//     scopes: ['openid', 'roles', 'gr-portal', 'email', 'profile'],
//     clientSecret: '6k_2Sd-&wA4n2CZn'
// };

export const identityConfig = {
    issuer: 'https://grm-pro-identityserver.azurewebsites.net',
    clientId: 'Gr.Portal.Mobile',
    redirectUrl: 'net.azurewebsites.grm-pro-identityserver:/oauth2redirect',
    scopes: ['openid', 'roles', 'gr-portal', 'email', 'profile'],
    clientSecret: `RRFegQ]s9s@4PUlr`
};