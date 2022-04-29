import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, fonts } from '../utils/Constants';


export class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()} style={{ padding: 10, margin: 5, borderRadius: 12, borderWidth: 1, borderColor: colors.primary, backgroundColor: this.props.clear ? 'white' : colors.primary, height: 50, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: this.props.clear ? colors.primary : "white", fontFamily: fonts.openSans.Bold }}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}