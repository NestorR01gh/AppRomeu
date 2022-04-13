import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Provider } from 'react-native-paper';
import { LabelAndInput } from '../components/LabelAndInput';
import { LoadingModal } from '../components/LoadingModal';
import { backgroundColor, fontFamily, urlApi } from '../utils/Constants';
import { Request } from '../utils/Request';

export class EmployeeScreen extends Component {
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
        let requestString = urlApi + `IPCalls/GetCallUsersPaged?page=0&pageSize=1&orderColumn=userName&ascendingOrder=ASC`;
        let request = new Request(requestString, "POST", { "searchtext": `${this.props.route.params.loginName}` });
        request.withAuth();
        let response = await request.execute();
        let item = response.data.data[0].items[0];
        this.setState({ data: item });
        await this.setStreetAdress();
        this.setState({ loading: false });
    }

    setStreetAdress = async () => {
        let requestString = urlApi + `IPCalls/GetAdvancedCallUsersPaged?page=0&pageSize=1&orderColumn=userName&ascendingOrder=ASC`;
        let request = new Request(requestString, "POST", { "nameUser": `${this.props.route.params.loginName}` });
        request.withAuth();
        let response = await request.execute();
        let streetAdress = response.data.data[0].items[0].streetAddress;
        this.setState({ streetAddress: streetAdress });
    }

    componentDidMount() {
        this.load();
    }

    render() {
        return (
            <View style={styles.container}>
                <LoadingModal color={backgroundColor} animating={this.state.loading} />
                <Text style={styles.title}>{this.state.data.userName} - {this.state.data.iusu}</Text>
                <ScrollView>
                    <View style={{ flex: 1, padding: 10 }}>
                        <View style={styles.viewImageAndLabels}>
                            <Image resizeMode='cover' source={require('../assets/images/usr.png')} style={styles.image} />
                            <View style={styles.labelsImageView}>
                                <LabelAndInput editable={false} label="Posición" icon="account-cog" value={this.state.data.title} />
                                <LabelAndInput editable={false} label="Compañía" icon="briefcase-variant-outline" value={this.state.data.company} />
                            </View>
                        </View>
                        <View style={styles.body}>
                            <LabelAndInput editable={false} label="Correo" icon="email" value={this.state.data.emailAddress} />
                            <LabelAndInput editable={false} label="Dirección" icon="map-marker" value={this.state.streetAddress} />
                            <LabelAndInput editable={false} label="Mánager" icon="account-tie" value={this.state.data.manager} />
                            <View style={styles.doubleInputView}>
                                <LabelAndInput editable={false} label="Oficina" icon="office-building-marker" value={this.state.data.office} />
                                <LabelAndInput editable={false} label="Nombre inicio sesión" icon="account-lock-open" value={this.props.route.params.loginName} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <LabelAndInput flex={0.5} editable={false} icon="numeric" label="Extensión" value={this.state.data.extension} />
                                <LabelAndInput editable={false} label="Teléfono" icon="phone" value={this.state.data.phone} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <LabelAndInput flex={0.5} editable={false} icon="numeric" label="Extensión" value={this.state.data.extensionMobile} />
                                <LabelAndInput editable={false} label="Teléfono móvil" icon="cellphone" value={this.state.data.mobile} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <LabelAndInput editable={false} label="País" icon="flag" value={this.state.data.country} />
                                <LabelAndInput editable={false} label="Departamento" icon="account-group" value={this.state.data.department} />
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
    title: {
        fontFamily: fontFamily,
        fontSize: 30,
        color: backgroundColor,
        alignSelf: 'center',
        marginTop: 10
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
        height: 110,
        width: 110,
        borderRadius: 150,
        margin: 20,
        borderWidth: 1,
        borderColor: backgroundColor
    },
    labelsImageView: {
        flex: 2,
        justifyContent: 'center'
    },
    doubleInputView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});