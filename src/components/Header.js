import React, { Component } from 'react';
import { colors, fonts } from '../utils/Constants';
import { StyleSheet, View, TouchableOpacity, Keyboard } from 'react-native';
import { Avatar, IconButton, Menu } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';
import { withTranslation } from 'react-i18next';
import { Request } from '../utils/Request';
import { api } from '../utils/Variables';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: undefined,
            visible: false
        }
    }

    getPhoto = async () => {
        let req = new Request(api.url + "User/GetUserPhoto", "GET", {}, 'blob');
        req.withAuth();
        try {
            let res = await req.execute();
            this.setState({ profileImage: res.data });
        } catch (e) {
            this.setState({ profileImage: undefined });
        }
    }

    componentDidMount() {
        this.getPhoto();
    }

    handleAvatarPress = () => {
        this.setState({ visible: !this.state.visible });
    }

    load = async () => {
        this.setState({ loading: true });
        let requestString = api.url + `IPCalls/GetCallUsersPaged?page=0&pageSize=1&orderColumn=userName&ascendingOrder=ASC`;
        let request = new Request(requestString, "POST", { "searchtext": `${this.props.route.params.loginName}` });
        request.withAuth();
        let response = await request.execute();
        let item = response.data.data[0].items[0];
        this.setState({ data: item });
        await this.setStreetAddress();
        this.setState({ loading: false });
    }

    logout = async () => {
        let requestString = api.url + `User/Logout`;
        let request = new Request(requestString, "POST");
        request.withAuth();
        let response = await request.execute();
        console.log(response);
    }

    handleExit = async () => {
        await this.logout();
        this.props.navigation.navigate("Login")
    }

    handleMenuPress = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer())
        Keyboard.dismiss();
    }

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <IconButton onPress={() => this.handleMenuPress()} color="white" size={50} icon="menu" />
                <Menu onDismiss={() => this.handleAvatarPress()} visible={this.state.visible} anchor={<TouchableOpacity onPress={() => this.handleAvatarPress()} style={{ flex: 1, padding: 10, justifyContent: 'center' }} ><Avatar.Image size={50} source={this.props.image != undefined ? { uri: `data:image/png;base64,${this.state.profileImage}` } : require('../assets/images/usr.png')} /></TouchableOpacity>}>
                    <Menu.Item icon="power" titleStyle={styles.text} title={t("header.logOut")} onPress={() => this.handleExit()} />
                </Menu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1.2,
        flexDirection: 'row',
        backgroundColor: colors.primary,
        justifyContent: 'space-between'
    },
    image: {
        flex: 1,
        height: 55,
        width: 55,
        resizeMode: 'contain',
        borderRadius: 100,
        padding: 10
    },
    text: {
        fontFamily: fonts.openSans.Regular,
        fontSize: 20
    }
});

export default withTranslation("global")(Header);