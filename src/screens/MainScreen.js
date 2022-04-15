import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';

export class MainScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <NewsSection />
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
