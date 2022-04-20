import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import ShareSection from '../components/ShareSection';

export class ShareScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <ShareSection />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});