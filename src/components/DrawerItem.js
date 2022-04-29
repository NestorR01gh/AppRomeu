import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { fonts } from '../utils/Constants';

export class DrawerItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <IconButton icon={this.props.icon} size={40} color='white' />
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 35,
        color: 'white',
        fontFamily: fonts.openSans.Regular
    }
});