import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { backgroundColor } from '../utils/Constants';


export class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()} style={{ padding: 10, margin: 5, borderRadius: 12, borderWidth: 1, borderColor: backgroundColor, backgroundColor: this.props.clear ? 'white' : backgroundColor, height: 50, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: this.props.clear ? backgroundColor : "white" }}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}