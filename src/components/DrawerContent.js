import React, { Component } from 'react';
import { backgroundColor, fonts } from '../utils/Constants';
import { Text } from 'react-native-paper';
import { withTranslation } from 'react-i18next';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from './DrawerItem';
import { StyleSheet, View } from 'react-native';

class DrawerContent extends Component {
    render() {
        const { t } = this.props;
        return (
            <DrawerContentScrollView style={{ backgroundColor: backgroundColor }}>
                <View style={{flex: 1, borderBottomWidth: 2, borderBottomColor: 'white'}}>
                    <Text style={styles.title}>{t("drawer.title")}</Text>
                </View>
                <DrawerItem icon="home" label={t("drawer.item1")} onPress={() => this.props.navigation.navigate('MainDrawer')} />
                <DrawerItem icon="account" label={t("drawer.item2")} onPress={() => this.props.navigation.navigate('Staff')} />
                <DrawerItem icon="qrcode-scan" label={t("drawer.item3")} onPress={() => this.props.navigation.navigate('Share')} />
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        padding: 20,
        alignSelf: 'center',
        fontFamily: fonts.openSansExtraBold,
        color: 'white',
        fontSize: 40,
    }
});

export default withTranslation("global")(DrawerContent);