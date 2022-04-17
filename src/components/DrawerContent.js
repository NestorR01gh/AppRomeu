import React, { Component } from 'react';
import { backgroundColor, fontFamily } from '../utils/Constants';
import { Text } from 'react-native-paper';
import { withTranslation } from 'react-i18next';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from './DrawerItem';

class DrawerContent extends Component {
    render() {
        const { t } = this.props;
        return (
            <DrawerContentScrollView style={{ backgroundColor: backgroundColor }}>
                <Text style={{ padding: 20, alignSelf: 'center', fontFamily: fontFamily, color: 'white', fontSize: 40, textDecorationLine: 'underline' }}>{t("drawer.title")}</Text>
                <DrawerItem icon="home" label={t("drawer.item1")} onPress={() => this.props.navigation.navigate('MainDrawer')} />
                <DrawerItem icon="account" label={t("drawer.item2")} onPress={() => this.props.navigation.navigate('Staff')} />
            </DrawerContentScrollView>
        );
    }
}

export default withTranslation("global")(DrawerContent);