import React, { Component } from 'react';
import { StyleSheet, View, BackHandler, Alert} from 'react-native';
import { Provider } from 'react-native-paper';
import { Header } from '../components/Header';
import { StaffSection } from '../components/StaffSection';

export class StaffScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <Header placeholder="Nombre o tlf." image="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1425034585/content-items/001/228/844/sesion-estudio-barcelona-10-original.jpg?1425034585" navigation={this.props.navigation} />
                    <StaffSection navigation={this.props.navigation} />
                </Provider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    body: {
        flex: 10
    }
});