import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { backgroundColor } from '../utils/Constants';


export class StaffChip extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Image source={{ uri: this.props.image }} style={styles.image} />
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
        borderColor: backgroundColor,
        flexDirection: 'row'
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
        alignSelf: 'center'
    }
});