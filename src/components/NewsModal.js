import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { IconButton, Modal, Portal } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';


export class NewsModal extends Component {

    handlePress = () => {
        this.props.setVisibility(false)
    }

    render() {
        return (
            <Portal>
                <Modal onDismiss={() => this.handlePress()} visible={this.props.visible}>
                    <View style={styles.modal}>
                        <View style={styles.header}>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>{this.props.title}</Text>
                            </View>
                            <View style={styles.closeView}>
                                <IconButton onPress={() => this.handlePress()} size={35} icon="close-circle" color='white' />
                            </View>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.bodyHeader}>
                                <View style={styles.imageView}>
                                    <Image style={styles.image} source={{ uri: this.props.image }} />
                                </View>
                                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'space-evenly', padding: 10 }}>
                                    <IconButton style={{ margin: -20, rotation: -50 }} size={45} icon="paperclip" />
                                    <Text style={{ fontFamily: fontFamily, fontSize: 17, color: 'black', textAlign: 'center' }}>Publicado el {this.props.date}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 5, backgroundColor: 'blue' }}>

                            </View>
                        </View>
                    </View>
                </Modal>
            </Portal >
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
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    imageView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    bodyHeader: {
        flex: 2,
        flexDirection: 'row'
    },
    body: {
        flex: 5,
        borderWidth: 2,
        borderColor: backgroundColor,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    title: {
        color: 'white',
        fontFamily: fontFamily,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10
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
    },
    closeView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});