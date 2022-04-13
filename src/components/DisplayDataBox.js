import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class DisplayDataBox extends Component {

    render() {
        return (
            <View style={{ flex: this.props.flex == undefined ? 1 : this.props.flex, padding: 5 }}>
                <Text style={styles.text}>{this.props.label}</Text>
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <TextInput.Icon color={backgroundColor} icon={this.props.icon} size={30} />
                    </View>
                    <View style={{ flex: 4, alignItems: 'center' }}>
                        <Text style={{ color: backgroundColor, fontFamily: fontFamily, fontSize: 15 }}>{this.props.value}</Text>
                    </View>
                </View>
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
    container: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: backgroundColor,
        flexDirection: 'row',
        padding: 15
    }
});