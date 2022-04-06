import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Portal, Provider } from 'react-native-paper';
import { ButtonDescription } from '../components/ButtonDescription';
import { authorize } from 'react-native-app-auth';
import { backgroundColor } from '../utils/Constants';
import { LoadingModal } from '../components/LoadingModal';
import { token } from '../utils/Variables';

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
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
        this.setState({ loading: true });
        const config = {
            issuer: 'https://grm-dev-identityserver.azurewebsites.net',
            clientId: 'Gr.Portal.Mobile',
            redirectUrl: 'net.azurewebsites.grm-dev-identityserver:/oauth2redirect',
            scopes: ['openid', 'roles', 'gr-portal', 'email', 'profile'],
            clientSecret: '6k_2Sd-&wA4n2CZn'
        };

        try {
            const result = await authorize(config);
            token.data = result.accessToken;
            this.props.navigation.navigate('Main');
            this.setState({ loading: false });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Provider>
                <Portal>
                    <LoadingModal animating={this.state.loading} color={backgroundColor}/>
                </Portal>
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