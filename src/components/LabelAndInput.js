import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class LabelAndInput extends Component {

    render() {
        return (
            <View style={{ flex: this.props.flex == undefined ? 1 : this.props.flex, paddingLeft: 10, paddingRight: 10, justifyContent: 'center' }}>
                <Text style={styles.text}>{this.props.label}</Text>
                <TextInput underlineColor='transparent' style={styles.input} editable={this.props.editable} value={this.props.value} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fontFamily,
        color: backgroundColor,
        fontSize: 13
    },
    input: {
        fontSize: 13,
        color: backgroundColor,
        height: 40,
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 0.8,
        borderColor: backgroundColor
    }
});