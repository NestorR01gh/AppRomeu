import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export class EmployeeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Employee nº {this.props.route.params.employeeId}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});