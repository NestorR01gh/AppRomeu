import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';
import { DrawerActions } from '@react-navigation/native';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
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
            <View style={styles.container}>
                <IconButton onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} style={styles.menuIcon} color="white" size={50} icon="menu" />
                <TextInput onBlur={() => this.handleFocus()} onFocus={() => this.handleFocus()} underlineColor="transparent" activeUnderlineColor="transparent" placeholderTextColor={backgroundColor} placeholder={this.props.placeholder} left={<TextInput.Icon icon="magnify" color={this.state.focused ? backgroundColor : "grey"} size={30} />} style={styles.input}></TextInput>
                <Image style={styles.image} source={{ uri: this.props.image }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        alignItems: 'center'
    },
    menuIcon: {
        flex: 1
    },
    image: { 
        flex: 1, 
        height: 55, 
        width: 55, 
        resizeMode: 'contain', 
        borderRadius: 100, 
        padding: 10 
    },
    input: { 
        flex: 4, 
        height: 50, 
        color: backgroundColor, 
        borderRadius: 20, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        fontFamily: fontFamily 
    }
});