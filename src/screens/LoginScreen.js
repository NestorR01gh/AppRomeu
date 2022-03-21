import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Provider } from 'react-native-paper';
import { ButtonDescription } from '../components/ButtonDescription';

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

    setLanguages = (languages) => {
        this.setState({ languages: languages });
    }

    render() {
        return (
            <Provider>
                <View style={styles.container}>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                        <DropDownPicker containerStyle={{ width: "22%" }} placeholder={this.state.language} open={this.state.showDropDown} value={this.state.language} items={this.state.languages} setOpen={this.setDropDownState} setValue={this.setLanguage} />
                    </View>
                    <View style={styles.viewLogo}>
                        <Image style={styles.imageLogo} source={require('../assets/images/logoRomeu.png')} />
                    </View>
                    <View style={styles.viewInfo}>
                        <ButtonDescription onPress={() => this.props.navigation.navigate('MainStack')} Description="Sign in GRUPO ROMEU employees" ButtonText="Login" />
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