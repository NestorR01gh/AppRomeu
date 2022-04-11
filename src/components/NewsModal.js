import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, PermissionsAndroid, ActivityIndicator } from 'react-native';
import { IconButton, Modal, Portal } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';
import RNFetchBlob from 'rn-fetch-blob';
import HtmlText from 'react-native-html-to-text';

export class NewsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    handlePress = () => {
        if(!this.state.loading){
            this.props.setVisibility(false)
        }
    }

    handleClipPress() {
        //Function to check the platform
        //If iOS the start downloading
        //If Android then ask for runtime permission
        if (this.props.hasFile) {
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
                            //If permission denied then show alert 'Storage Permission Not Granted'
                            Alert.alert('storage_permission');
                        }
                    });
                } catch (err) {
                    //To handle permission related issue
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
                    dir + '/file_' + Math.floor(date.getTime() + date.getSeconds() / 2) + this.props.fileExtension,
                description: 'Risk Report Download'
            }
        };
        config(options)
            .fetch('GET', this.props.fileLink)
            .then((res) => {
                //Showing alert after successful downloading
                console.log("RUTA " + options.path);
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
                                <Text style={styles.title}>{this.props.title}</Text>
                            </View>
                            <View style={styles.closeView}>
                                <IconButton onPress={() => this.handlePress()} size={35} icon="close-circle" color='white' />
                            </View>
                        </View>
                        <View style={styles.body}>
                        <ActivityIndicator size={30} style={{ opacity: this.state.loading ? 1 : 0, padding: 10, alignSelf: 'flex-end', flex: 0.5 }} />
                            <View style={styles.bodyHeader}>
                                <View style={styles.imageView}>
                                    <Image style={styles.image} source={{ uri: this.props.image }} />
                                </View>
                                <View style={styles.publishedClipView}>
                                    <IconButton onPress={() => this.handleClipPress()} style={{ rotation: -50, opacity: this.props.hasFile ? 1 : 0 }} size={35} icon="paperclip" />
                                    <Text style={{ fontFamily: fontFamily, fontSize: 13, color: 'black', textAlign: 'center', marginTop: this.props.hasFile ? 0 : -60 }}>Publicado el {this.props.date}</Text>
                                </View>
                            </View>
                            <View style={styles.descriptionView}>
                                <ScrollView>
                                    <HtmlText html={this.props.description} />
                                </ScrollView>
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
        height: "90%",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: backgroundColor,
        marginBottom: 90
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