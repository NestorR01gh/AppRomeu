import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors, fonts } from '../utils/Constants';

export class DisplayDataBox extends Component {

    render() {
        return (
            <View style={{ flex: this.props.flex == undefined ? 1 : this.props.flex, padding: 5 }}>
                <Text style={styles.label}>{this.props.label}</Text>
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <TextInput.Icon color={colors.primary} icon={this.props.icon} size={30} />
                    </View>
                    <View style={{ flex: 4, alignItems: 'center' }}>
                        <Text style={{ color: colors.primary, fontFamily: fonts.openSans.Regular, fontSize: 15 }}>{this.props.value}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        fontFamily: fonts.openSans.ExtraBold,
        color: colors.primary,
        fontSize: 13
    },
    container: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.primary,
        flexDirection: 'row',
        padding: 15
    }
});