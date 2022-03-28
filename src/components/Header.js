import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { IconButton, Menu, TextInput, Text, Provider } from 'react-native-paper';
import { backgroundColor } from '../utils/Constants';
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

    render() {
        return (
            <Provider>
                <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: backgroundColor, alignItems: 'center' }}>
                    <IconButton onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} style={{ flex: 1 }} color="white" size={50} icon="menu" />
                    <TextInput onBlur={() => this.handleFocus()} onFocus={() => this.handleFocus()} underlineColor="transparent" activeUnderlineColor="transparent" placeholderTextColor={backgroundColor} placeholder={this.props.placeholder} left={<TextInput.Icon icon="magnify" color={this.state.focused ? backgroundColor : "grey"} size={30} />} style={{ flex: 4, height: 50, color: backgroundColor, borderRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></TextInput>
                    <Menu onDismiss={() => this.handlePress()} visible={this.state.visible} anchor={<TouchableOpacity onPress={() => this.handlePress()} style={{ flex: 1, padding: 10 }} ><Image style={{ flex: 1, height: 55, width: 55, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: this.props.image }} /></TouchableOpacity>}>
                        <Menu.Item title="Salir" onPress={() => this.props.navigation.navigate("Login")} />
                    </Menu>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({

});