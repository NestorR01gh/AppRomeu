import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { IconButton } from 'react-native-paper';
import { colors, fonts } from '../utils/Constants';


class News extends Component {

    handlePress = async () => {
        this.props.setModalData(this.props.id, this.props.acceptOrSignDate);
    }

    getIconOpacity = () => {
        if (((this.props.readRequired || this.props.signRequired) && this.props.acceptOrSignDate == null) || this.props.expired) {
            return 1;
        } else {
            return 0;
        }
    }

    getIcon = () => {
        if (this.props.expired) {
            return "alert-outline"
        } else if (this.props.signRequired) {
            return "file-sign"
        } else {
            return "thumb-up"
        }
    }

    geticonStyle = () => {
        if (this.props.expired) {
            return { backgroundColor: "#ffeea4", borderColor: colors.primary, borderWidth: 1.2 }
        }
    }

    render() {
        const { t } = this.props;
        return (
            <TouchableOpacity style={{ padding: 10 }} onPress={() => this.handlePress()}>
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
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', opacity: this.getIconOpacity() }}>
                                <IconButton style={this.geticonStyle()} color={colors.primary} size={21} icon={this.getIcon()} />
                            </View>
                        </View>
                        <View style={styles.newsTextView}>
                            <Text style={styles.titleText}>{this.props.title}</Text>
                        </View>
                        <View style={styles.businessView}>
                            <View style={{ opacity: this.props.read ? 1 : 0, backgroundColor: 'white', borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderTopRightRadius: 10 }}>
                                <Text style={styles.ImageBackgroundText}>{t("news.read")}</Text>
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
        marginTop: 15,
        borderWidth: 1.3,
        borderColor: colors.primary,
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    ImageBackgroundText: {
        padding: 3,
        fontFamily: fonts.openSans.Regular,
        color: 'black'
    },
    dateReadView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        padding: 10,
        fontFamily: fonts.openSans.Regular,
        color: 'grey'
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
        flex: 3,
        fontSize: 20,
        color: colors.primary,
        padding: 5,
        fontFamily: fonts.openSans.SemiBoldItalic
    },
    newsTextView: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
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
        borderRightWidth: 0.8,
        borderRightColor: colors.primary,
        justifyContent: 'flex-end'
    },
    badge: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: -17,
        backgroundColor: colors.primary,
        borderRadius: 30,
    }
});

export default withTranslation("global")(News)