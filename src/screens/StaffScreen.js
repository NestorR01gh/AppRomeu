import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from '../components/Header';

export class StaffScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header placeholder="Nombre o tlf." image="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1425034585/content-items/001/228/844/sesion-estudio-barcelona-10-original.jpg?1425034585" navigation={this.props.navigation}/>
                <View style={styles.body}>
                    <Text>Staff</Text>
                </View>
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