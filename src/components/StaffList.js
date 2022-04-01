import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export class StaffList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>List</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    }
});