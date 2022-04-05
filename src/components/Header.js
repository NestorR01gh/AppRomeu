import React, { Component } from 'react';
import { backgroundColor, fontFamily } from '../utils/Constants';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { IconButton, Menu, TextInput } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            visible: false
        }
    }

    handlePress = () => {
        if (this.state.visible) {
            this.setState({ visible: false });
        } else {
            this.setState({ visible: true });
        }
    }

    handleFocus = () => {
        if (!this.state.focused) {
            this.setState({ focused: true });
        } else {
            this.setState({ focused: false });
        }
    }

    handleExit = () => {
        this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <View style={styles.container}>
                <IconButton onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} color="white" size={50} icon="menu" />
                <Menu onDismiss={() => this.handlePress()} visible={this.state.visible} anchor={<TouchableOpacity onPress={() => this.handlePress()} style={{ flex: 1, padding: 10 }} ><Image style={styles.image} source={{ uri: this.props.image }} /></TouchableOpacity>}>
                    <Menu.Item icon="power" titleStyle={styles.text} title="Salir" onPress={() => this.handleExit()}/>
                </Menu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        flex: 1,
        height: 55,
        width: 55,
        resizeMode: 'contain',
        borderRadius: 100,
        padding: 10
    },
    text: {
        fontFamily: fontFamily,
        fontSize: 20
    }
});