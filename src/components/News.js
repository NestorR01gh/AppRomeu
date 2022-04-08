import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { IconButton } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';


export class News extends Component {

    handlePress = () => {
        //Aquí se llama a la api y se consigue la descripción con la id pasada por props
        //Es probable que también necesite si tiene archivo y cuál es en vez de pasarlo por props
        let description = "<div class=\"ql-block\" data-block-id=\"block-9ec64fc6-5e79-42fb-94b9-53dc395bfb78\">Existen muchas vías a través de las cuales podemos sufrir un ataque por parte de los ciberdelincuentes. Por ello, os traemos una serie de recomendaciones a tener en cuenta y protegernos de estos ataques.<br></div><div class=\"ql-block\" data-block-id=\"block-91e0bc6b-f5c9-480b-8ac1-fcb617952cc8\"></div><div class=\"ql-block\" data-block-id=\"block-6833f9e0-0cdb-4c3d-a9ed-33e02e1e2338\">A continuación, te mostramos las 6 rutas de ataque de los ciberdelincuentes</div><div class=\"ql-block\" data-block-id=\"block-719b5346-0897-470f-9d7b-17add8e05ae6\"></div><ul><li>Clic en un enlace</li><li>Descarga de archivos</li><li>No llevar las actualizaciones al día</li><li>Corte eléctrico</li><li>Ingeniería social</li><li>Ausencia de controles</li></ul><div class=\"ql-block\" data-block-id=\"block-f53b9ec2-7a4f-4161-b525-fe03d7344e0e\"></div><div class=\"ql-block\" data-block-id=\"block-3bd4ec08-8bb3-4720-8447-c699e1b9116f\"></div><div class=\"ql-block\" data-block-id=\"block-9037f4ba-79d9-4204-a3c6-6f25000487af\"></div><div class=\"ql-block\" data-block-id=\"block-792c0d54-d2c8-48e9-8429-915036de39dc\">¡Recuerda!Incluso aquellos enlaces que no parecen sospechosos, pueden llegar a contener virus o ataques a nuestro sistema.</div><div class=\"ql-block\" data-block-id=\"block-831b99d7-8e1d-4b50-bbc1-28b8ebf87477\"></div><div class=\"ql-block\" data-block-id=\"block-d4708dd7-fbcd-451e-b2e1-780ce86e0959\">Si te interesa conocer más detalles de estas rutas, descarga la infografía.</div>"
        this.props.setModalData(this.props.title, description, this.props.image, this.props.date, this.props.hasFile, this.props.fileLink);
        this.props.setVisibility(true);
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