import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { colors, fonts } from '../utils/Constants';


export class StaffChip extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Image source={this.props.image == undefined ? require("../assets/images/usr.png") : {uri: `data:image/png;base64,${this.props.image}`}} style={styles.image} />
                <Text style={styles.text}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 7,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        height: 70,
        width: 70,
        resizeMode: 'contain',
        borderRadius: 100,
        padding: 10
    },
    text: {
        flex: 3,
        alignSelf: 'center',
        fontFamily: fonts.openSans.Regular,
        color: colors.primary
    }
});