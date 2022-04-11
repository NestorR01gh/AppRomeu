import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { IconButton } from 'react-native-paper';
import { backgroundColor, fontFamily, idLanguage } from '../utils/Constants';
import { urlApi } from '../utils/Constants';
import { Request } from '../utils/Request';


export class News extends Component {

    handlePress = async () => {
        //Aquí se llama a la api y se consigue la descripción con la id pasada por props
        //Es probable que también necesite si tiene archivo y cuál es en vez de pasarlo por props
        let news = await this.getNews();
        let description = news.newsLanguages[idLanguage].description;
        let creationDate = news.creationDate.split("T")[0];
        let title = news.newsLanguages[idLanguage].title;
        let hasFile = news.newsLanguages[idLanguage].attachmentUrl == null ? false : true;
        let fileUrl = news.newsLanguages[idLanguage].attachmentUrl;
        let fileExtension = news.newsLanguages[idLanguage].attachmentExtension;
        this.props.setModalData(title, description, news.imageUrl, creationDate, hasFile, fileUrl, fileExtension);
        this.props.setVisibility(true);
    }

    getNews = async () => {
        let requestString = urlApi + `News/${this.props.id}`;
        let request = new Request(requestString, "GET");
        request.withAuth();
        let response = await request.execute();
        return response.data.data[0];
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.handlePress()}>
                <View style={styles.container}>
                    <ImageBackground style={styles.newsImage} source={{ uri: this.props.image }}>
                        <View style={styles.dateReadView}>
                            <View style={{ backgroundColor: 'white', borderTopWidth: 1, borderRightWidth: 1, paddingLeft: 3, borderTopRightRadius: 10 }}>
                                <Text style={styles.ImageBackgroundText}>{this.props.date}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.contentView}>
                        <View style={styles.newsTextView}>
                            <View style={styles.badge}>
                                <IconButton color='white' size={20} icon={this.props.isNews ? "newspaper" : "inbox"} />
                            </View>
                            <Text style={styles.sectionText}>{this.props.section}</Text>
                        </View>
                        <View style={styles.newsTextView}>
                            <Text style={styles.titleText}>{this.props.title}</Text>
                        </View>
                        <View style={styles.businessView}>
                            <View style={{ opacity: this.props.read ? 1 : 0, backgroundColor: 'white', borderTopWidth: 1, borderRightWidth: 1, borderTopRightRadius: 10 }}>
                                <Text style={styles.ImageBackgroundText}>Leído</Text>
                            </View>
                            <Image style={styles.imageBusiness} source={this.props.logo} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        marginTop: 15,
        borderWidth: 2,
        borderColor: backgroundColor,
        borderRadius: 15,
        flexDirection: 'row'
    },
    ImageBackgroundText: {
        padding: 2,
        fontFamily: fontFamily,
        color: 'black'
    },
    dateReadView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        padding: 10,
        fontFamily: fontFamily
    },
    imageBusiness: {
        height: 30,
        width: 80,
        resizeMode: 'contain',
        margin: 10,
    },
    businessView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    sectionText: {
        fontSize: 20,
        color: backgroundColor,
        padding: 5,
        fontFamily: fontFamily
    },
    newsTextView: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    imageView: {
        flex: 1,
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 13
    },
    contentView: {
        flex: 2
    },
    newsImage: {
        flex: 1,
        resizeMode: 'cover',
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 13,
        overflow: 'hidden',
        borderRightWidth: 1,
        borderRightColor: backgroundColor,
        justifyContent: 'flex-end'
    },
    badge: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: -17,
        backgroundColor: backgroundColor,
        borderRadius: 30,
    }
});