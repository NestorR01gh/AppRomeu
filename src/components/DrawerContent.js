import React, { Component } from 'react';
import { colors, fonts } from '../utils/Constants';
import { Checkbox, Text } from 'react-native-paper';
import { withTranslation } from 'react-i18next';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from './DrawerItem';
import { StyleSheet, View } from 'react-native';
import { Request } from '../utils/Request'
import { api } from '../utils/Variables';

class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            opacityDev: 0
        }
    }

    render() {
        const { t } = this.props;
        return (
            <DrawerContentScrollView style={{ backgroundColor: colors.primary }}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{t("drawer.title")}</Text>
                </View>
                <DrawerItem icon="home" label={t("drawer.item1")} onPress={() => this.props.navigation.navigate('MainDrawer')} />
                <DrawerItem icon="account" label={t("drawer.item2")} onPress={() => this.props.navigation.navigate('Staff')} />
                <DrawerItem icon="qrcode-scan" label={t("drawer.item3")} onPress={() => this.props.navigation.navigate('Share')} />
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox color='white' status={this.state.checked ? 'checked' : 'unchecked'} />
                </View>
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        padding: 20,
        alignSelf: 'center',
        fontFamily: fonts.openSans.ExtraBold,
        color: 'white',
        fontSize: 40,
    },
    titleView: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        marginBottom: 10
    }
});

export default withTranslation("global")(DrawerContent);