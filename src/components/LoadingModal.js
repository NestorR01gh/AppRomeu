import React, { Component } from 'react';
import { backgroundColor, fontFamily } from '../utils/Constants';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Modal, Text } from 'react-native-paper';

export class LoadingModal extends Component {
    render() {
        return (
            <Modal visible={this.props.animating}>
                <View style={styles.container}>
                    <Text style={{ fontFamily: fontFamily, fontSize: 25, marginBottom: 30, color: this.props.color }}>LOADING...</Text>
                    <ActivityIndicator size={40} animating={true} color={this.props.color} />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: backgroundColor,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 30,
        justifyContent: 'space-around'
    }
});