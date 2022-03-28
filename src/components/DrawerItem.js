import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

export class DrawerItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconButton icon={this.props.icon} size={40} color='white' />
                    <Text style={{ fontSize: 35, color: 'white' }}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

});