import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Provider } from 'react-native-paper';
import { ButtonDescription } from '../components/ButtonDescription';
import { Client, RedirectComponent } from 'react-native-oidc-client';
import { authorize } from 'react-native-app-auth';

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false,
            language: "es",
            languages: [{ label: "ES", value: "es" }, { label: "EN", value: "en" }, { label: "FR", value: "fr" }, { label: "PT", value: "pt" }]
        }
    }

    setLanguage = (callback) => {
        this.setState(state => ({
            language: callback(state.value)
        }));
    }

    setDropDownState = (state) => {
        this.setState({ showDropDown: state });
    }

    async handlePress() {
        // ESTO ME PARECE MÁS CORRECTO PERO LA REDIRECT URI DA ERROR
        // const config = {
        //     issuer: 'https://grm-dev-identityserver.azurewebsites.net',
        //     clientId: 'Gr.Portal.Mobile',
        //     redirectUrl: '',
        //     scopes: ['openid roles gr-portal email profile'],
        //     clientSecret: '6k_2Sd-&wA4n2CZn'
        // };

        // try {
        //     const result = await authorize(config);
        //     console.log(result)
        // } catch (error) {
        //     console.log(error);
        // }

        //ESTO PERTENECE A REACT-NATIVE-OIDC-CLIENTE
        // const config = {
        //     response_type: 'code',
        //     scope: 'openid roles gr-portal email profile',
        //     client_id: 'Gr.Portal.Mobile',
        //     client_secret: '6k_2Sd-&wA4n2CZn',
        //     redirect_uri: 'com.appromeu.app',
        //     acr_values: 'http://oidc.contact.de',
        //     acr: 'default',
        //     // prompt: 'consent login',
        //     authority: 'https://grm-dev-identityserver.azurewebsites.net',
        //     browser_type: 'default',
        // };
        // const client = new Client(config);
        // const tokenResponse = await client.authorize();
        // console.log(tokenResponse);
        // const accessToken = await client.getToken();
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <Provider>
                <View style={styles.container}>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                        <DropDownPicker containerStyle={{ width: "22%" }} placeholder={this.state.language} open={this.state.showDropDown} value={this.state.language} items={this.state.languages} setOpen={this.setDropDownState} setValue={this.setLanguage} />
                    </View>
                    <View style={styles.viewLogo}>
                        <Image style={styles.imageLogo} source={require('../assets/logos/login.png')} />
                    </View>
                    <View style={styles.viewInfo}>
                        <ButtonDescription onPress={() => this.handlePress()} Description="Sign in GRUPO ROMEU employees" ButtonText="Login" />
                    </View>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    viewLogo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLogo: {
        height: 150,
        width: 250,
        resizeMode: 'contain'
    },
    viewInfo: {
        flex: 0,
        flexDirection: 'row',
        paddingLeft: 100,
        paddingRight: 100
    },
    listItem: {
        borderRadius: 7
    }
});