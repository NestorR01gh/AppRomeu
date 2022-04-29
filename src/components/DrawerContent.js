import React, { Component } from 'react';
import { api, backgroundColor, fonts } from '../utils/Constants';
import { Checkbox, Text } from 'react-native-paper';
import { withTranslation } from 'react-i18next';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from './DrawerItem';
import { StyleSheet, View } from 'react-native';
import { Request } from '../utils/Request'
import { t } from 'i18next';

class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            opacityDev: 0
        }
    }

    componentDidMount() {
        this.setOpacity();
    }

    setOpacity = async () => {
        let requestString = api.url + "User/GetUser";
        let request = new Request(requestString, "POST");
        request.withAuth();
        let response = await request.execute();
        let id = response.data.data[0].userId;
        if ((this.state.checked && id == 83288) || (!this.state.checked && id == 73634)) {
            this.setState({ opacityDev: 1 });
        } else {
            this.setState({ opacityDev: 0 });
        }
    }

    handleCheck = () => {
        if (this.state.checked) {
            this.setState({ checked: false });
            api.url = "https://portal-staging-api.grm-e.com/api/";
        } else {
            this.setState({ checked: true });
            api.url = "https://romeunet-api.development.grm.zone/api/";

        }
        this.setOpacity();
    }

    render() {
        const { t } = this.props;
        return (
            <DrawerContentScrollView style={{ backgroundColor: backgroundColor }}>
                <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: 'white' }}>
                    <Text style={styles.title}>{t("drawer.title")}</Text>
                </View>
                <DrawerItem icon="home" label={t("drawer.item1")} onPress={() => this.props.navigation.navigate('MainDrawer')} />
                <DrawerItem icon="account" label={t("drawer.item2")} onPress={() => this.props.navigation.navigate('Staff')} />
                <DrawerItem icon="qrcode-scan" label={t("drawer.item3")} onPress={() => this.props.navigation.navigate('Share')} />
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox color='white' status={this.state.checked ? 'checked' : 'unchecked'} onPress={this.handleCheck} />
                </View>
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