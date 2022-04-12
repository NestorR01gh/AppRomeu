import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class LabelAndInput extends Component {

    render() {
        return (
            <View style={{ flex: this.props.flex == undefined ? 1 : this.props.flex, padding: 5 }}>
                <Text style={styles.text}>{this.props.label}</Text>
                <TextInput left={<TextInput.Icon color={backgroundColor} icon={this.props.icon} size={30} />} multiline={true} underlineColor='transparent' style={styles.input} editable={this.props.editable} value={this.props.value} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fontFamily,
        color: backgroundColor,
        fontSize: 13,
        fontWeight: 'bold'
    },
    input: {
        fontSize: 13,
        color: backgroundColor,
        borderRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 0.8,
        borderColor: backgroundColor,
        paddingLeft: 10
    }
});