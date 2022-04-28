import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { DisplayDataBox } from '../components/DisplayDataBox';
import LoadingModal from '../components/LoadingModal';
import { backgroundColor, fonts, api } from '../utils/Constants';
import { Request } from '../utils/Request';
import { withTranslation } from 'react-i18next';

class EmployeeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            streetAddress: "",
            loading: false
        }
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

    setStreetAddress = async () => {
        let requestString = api.url + `IPCalls/GetAdvancedCallUsersPaged?page=0&pageSize=1&orderColumn=userName&ascendingOrder=ASC`;
        let request = new Request(requestString, "POST", { "nameUser": `${this.props.route.params.loginName}` });
        request.withAuth();
        let response = await request.execute();
        let streetAddress = response.data.data[0].items[0].streetAddress;
        this.setState({ streetAddress: streetAddress });
    }

    componentDidMount() {
        this.load();
    }

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <LoadingModal color={backgroundColor} animating={this.state.loading} />
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>{this.state.data.userName}</Text>
                </View>
                <ScrollView>
                    <View style={{ flex: 1, padding: 10 }}>
                        <View style={styles.viewImageAndLabels}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image resizeMode='cover' source={this.state.data.photo == undefined ? require("../assets/images/usr.png") : { uri: `data:image/png;base64,${this.state.data.photo}` }} style={styles.image} />
                                <Text style={styles.iusu}>{this.state.data.iusu}</Text>
                            </View>
                            <View style={styles.labelsImageView}>
                                <DisplayDataBox label={t("employeeScreen.position")} icon="account-cog" value={this.state.data.title} />
                                <DisplayDataBox label={t("employeeScreen.company")} icon="briefcase-variant-outline" value={this.state.data.company} />
                            </View>
                        </View>
                        <View style={styles.body}>
                            <DisplayDataBox label={t("employeeScreen.mail")} icon="email" value={this.state.data.emailAddress} />
                            <DisplayDataBox label={t("employeeScreen.address")} icon="map-marker" value={this.state.streetAddress} />
                            <DisplayDataBox label={t("employeeScreen.manager")} icon="account-tie" value={this.state.data.manager} />
                            <View style={styles.doubleInputView}>
                                <DisplayDataBox label={t("employeeScreen.office")} icon="office-building-marker" value={this.state.data.office} />
                                <DisplayDataBox label={t("employeeScreen.loginName")} icon="account-lock-open" value={this.props.route.params.loginName} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <DisplayDataBox flex={0.5} icon="pound" label={t("employeeScreen.extension")} value={this.state.data.extension} />
                                <DisplayDataBox label={t("employeeScreen.phone")} icon="phone" value={this.state.data.phone} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <DisplayDataBox flex={0.5} icon="pound" label={t("employeeScreen.extension")} value={this.state.data.extensionMobile} />
                                <DisplayDataBox label={t("employeeScreen.mobilePhone")} icon="cellphone" value={this.state.data.mobile} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <DisplayDataBox label={t("employeeScreen.country")} icon="flag" value={this.state.data.country} />
                                <DisplayDataBox label={t("employeeScreen.department")} icon="account-group" value={this.state.data.department} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iusu:{
        fontFamily: fonts.openSansSemiBold,
        fontSize: 30,
        color: backgroundColor,
    },
    title: {
        fontFamily: fonts.openSansExtraBold,
        fontSize: 30,
        color: backgroundColor,
        textAlign: 'center'
    },
    viewTitle: {
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: backgroundColor
    },
    viewImageAndLabels: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    body: {
        flex: 3
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: backgroundColor
    },
    labelsImageView: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 25
    },
    doubleInputView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default withTranslation("global")(EmployeeScreen)