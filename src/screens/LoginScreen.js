import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ButtonDescription } from '../components/ButtonDescription';


export class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <Image style={styles.imageLogo} source={require('../assets/images/logoRomeu.png')} />
                </View>
                <View style={styles.viewInfo}>
                    <ButtonDescription Description="Sign in GRUPO ROMEU employees" ButtonText="Login" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});