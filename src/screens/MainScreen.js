import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { Header } from '../components/Header';
import { NewsSection } from '../components/NewsSection';

export class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <Header image="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1425034585/content-items/001/228/844/sesion-estudio-barcelona-10-original.jpg?1425034585" navigation={this.props.navigation} />
                    <NewsSection />
                </Provider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 10
    }
});