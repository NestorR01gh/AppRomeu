import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { LabelAndInput } from '../components/LabelAndInput';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class EmployeeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Néstor Roldán",
            image: "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1425034585/content-items/001/228/844/sesion-estudio-barcelona-10-original.jpg?1425034585",
            position: "Developer GRM",
            company: "TERMINAL DE RECONOCIMIENTOS ADUANEROS DE ALICANTE, S.L.",
            mail: "neroldan@romeu.com",
            adress: 'Calle JJ Domine, 1 planta 4',
            country: 'Spain',
            office: 'Valencia',
            loginName: 'neroldan',
            ext: '',
            phone: '954 672 342',
            mobileExt: '',
            mobilePhone: '654 672 342',
            manager: 'Jerónimo Morales',
            department: 'GROUP'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.name} - {this.props.route.params.employeeId}</Text>
                <ScrollView>
                    <View style={{ flex: 1, padding: 10 }}>
                        <View style={styles.viewImageAndLabels}>
                            <Image resizeMode='cover' source={{ uri: this.state.image }} style={styles.image} />
                            <View style={styles.labelsImageView}>
                                <LabelAndInput editable={false} label="Posición" value={this.state.position} />
                                <LabelAndInput editable={false} label="Compañía" value={this.state.company} />
                            </View>
                        </View>
                        <View style={styles.body}>
                            <LabelAndInput editable={false} label="Correo" value={this.state.mail} />
                            <LabelAndInput editable={false} label="Dirección" value={this.state.adress} />
                            <LabelAndInput editable={false} label="Mánager" value={this.state.manager} />
                            <View style={styles.doubleInputView}>
                                <LabelAndInput editable={false} label="Oficina" value={this.state.office} />
                                <LabelAndInput editable={false} label="Nombre inicio sesión" value={this.state.loginName} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <LabelAndInput flex={0.5} editable={false} label="Extensión" value={this.state.ext} />
                                <LabelAndInput editable={false} label="Teléfono" value={this.state.phone} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <LabelAndInput flex={0.5} editable={false} label="Extensión" value={this.state.mobileExt} />
                                <LabelAndInput editable={false} label="Teléfono móvil" value={this.state.mobilePhone} />
                            </View>
                            <View style={styles.doubleInputView}>
                                <LabelAndInput editable={false} label="País" value={this.state.country} />
                                <LabelAndInput editable={false} label="Departamento" value={this.state.department} />
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