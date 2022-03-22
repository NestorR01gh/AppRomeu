import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, Modal, Portal } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';


export class NewsModal extends Component {

    handlePress = () => {
        this.props.setVisibility(false)
    }

    render() {
        return (
            <Portal>
                <Modal visible={this.props.visible}>
                    <View style={styles.modal}>
                        <View style={styles.header}>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>{this.props.modalData}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <IconButton onPress={() => this.handlePress()} size={35} icon="close-circle" color='white' />
                            </View>
                        </View>
                        <View style={{ flex: 5, borderWidth: 2, borderColor: backgroundColor }}>

                        </View>
                    </View>
                </Modal>
            </Portal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: "90%",
        height: "95%",
        borderRadius: 15
    },
    title: {
        color: 'white',
        fontFamily: fontFamily,
        fontSize: 20,
        padding: 15
    },
    header: {
        flex: 1,
        backgroundColor: backgroundColor,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row'
    },
    titleView: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
});