import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { StaffSection } from '../components/StaffSection';

export class StaffScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <StaffSection navigation={this.props.navigation} />
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