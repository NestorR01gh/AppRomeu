import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { Header } from '../components/Header';
import { NewsSection } from '../components/NewsSection';
import { urlApi } from '../utils/Constants';
import { token } from '../utils/Variables';

export class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ""
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <Header image={this.state.image} navigation={this.props.navigation} />
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