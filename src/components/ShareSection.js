import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { fonts, backgroundColor } from '../utils/Constants';
import { withTranslation } from 'react-i18next';

class ShareSection extends Component {

    render() {
        const { t } = this.props;
        return (
            <View style={styles.body}>
                <Text style={styles.title}>{t('shareScreen.title')}</Text>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={require('../assets/images/QR.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 10
    },
    title: {
        flex: 1,
        textAlign: 'center',
        padding: 25,
        fontFamily: fonts.openSans.ExtraBold,
        fontSize: 31,
        textAlignVertical: 'bottom',
        color: backgroundColor
    },
    image: {
        height: "90%",
        width: "90%",
        resizeMode: 'contain'
    },
    imageView: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default withTranslation("global")(ShareSection);