import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, PermissionsAndroid, ActivityIndicator, Dimensions } from 'react-native';
import { IconButton, Modal, Portal } from 'react-native-paper';
import { backgroundColor, fonts } from '../utils/Constants';
import RNFetchBlob from 'rn-fetch-blob';
import RenderHtml from 'react-native-render-html';
import NewsModalFooterResolver from './NewsModalFooterResolver';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export class NewsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    handlePress = () => {
        if (!this.state.loading) {
            this.props.getNewsList();
            this.props.setVisibility(false);
        }
    }

    handleClipPress() {
        if (this.props.data.hasFile) {
            this.setState({ loading: true });
            if (Platform.OS === 'ios') {
                this.downloadHistory();
            } else {
                try {
                    PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                        {
                            title: 'storage title',
                            message: 'storage_permission',
                        },
                    ).then(granted => {
                        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                            //Once user grant the permission start downloading
                            console.log('Storage Permission Granted.');
                            this.downloadHistory();
                        } else {
                            Alert.alert('storage_permission');
                        }
                    });
                } catch (err) {
                    console.log('error', err);
                }
            }
        }
    }

    async downloadHistory() {
        const { config, fs } = RNFetchBlob;
        let dir = fs.dirs.DownloadDir;
        let date = new Date();
        let options = {
            fileCache: true,
            appendExt: ".pdf",
            addAndroidDownloads: {
                //Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    dir + '/file_' + Math.floor(date.getTime() + date.getSeconds() / 2) + this.props.data.fileExtension,
                description: 'Risk Report Download'
            }
        };
        config(options)
            .fetch('GET', this.props.data.fileUrl)
            .then((res) => {
                //Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                alert('Se ha descargado correctamente');
            }).catch(function (e) {
                alert(e);
            })
        this.setState({ loading: false });
    }

    render() {
        return (
            <Portal>
                <Modal onDismiss={() => this.handlePress()} visible={this.props.visible}>
                    <View style={styles.modal}>
                        <View style={styles.header}>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>{this.props.data.title}</Text>
                            </View>
                            <View style={styles.closeView}>
                                <IconButton onPress={() => this.handlePress()} size={35} icon="close-circle" color='white' />
                            </View>
                        </View>
                        <View style={styles.body}>
                            <ActivityIndicator size={30} style={{ opacity: this.props.data.loading ? 1 : 0, padding: 10, alignSelf: 'flex-end', flex: 0.5 }} />
                            <View style={styles.bodyHeader}>
                                <View style={styles.imageView}>
                                    <Image style={styles.image} source={{ uri: this.props.data.imageUrl }} />
                                </View>
                                <View style={styles.publishedClipView}>
                                    <IconButton onPress={() => this.handleClipPress()} style={{ rotation: -50, opacity: this.props.data.hasFile ? 1 : 0 }} size={35} icon="paperclip" />
                                    <Text style={{ fontFamily: fonts.openSans.MediumItalic, fontSize: 13, color: 'black', textAlign: 'center', marginTop: this.props.data.hasFile ? 0 : -60 }}>Publicado el {this.props.data.creationDate}</Text>
                                </View>
                            </View>
                            <View style={styles.descriptionView}>
                                <ScrollView>
                                    <RenderHtml contentWidth={width - 80} source={{ html: this.props.data.description }} />
                                </ScrollView>
                            </View>
                            <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5, borderTopWidth: 1, borderTopColor: backgroundColor }}>
                                <Image style={styles.imageBusiness} source={this.props.data.logo} />
                                <NewsModalFooterResolver closeModal={this.handlePress} id={this.props.data.id} date={this.props.data.acceptOrSignDate} signRequired={this.props.data.signRequired} readRequired={this.props.data.readRequired} />
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
        width: width - 30,
        height: height - 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: backgroundColor,
        backgroundColor: backgroundColor,
        marginBottom: 50
    },
    imageBusiness: {
        height: 30,
        width: 80,
        resizeMode: 'contain',
        margin: 10,
    },
    publishedClipView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    image: {
        height: 110,
        width: 110,
        resizeMode: 'contain'
    },
    imageView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    bodyHeader: {
        flex: 1.5,
        flexDirection: 'row',
        padding: 10
    },
    body: {
        flex: 5,
        backgroundColor: 'white',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    title: {
        color: 'white',
        fontFamily: fonts.openSans.ExtraBold,
        fontSize: 17,
        padding: 10
    },
    header: {
        flex: 1,
        backgroundColor: backgroundColor,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
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
    },
    descriptionView: {
        flex: 5,
        padding: 20,
    }
});