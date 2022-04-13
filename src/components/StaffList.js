import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { StaffChip } from './StaffChip';

export class StaffList extends Component {

    getStaff = (onPress, list) => {
        if (list.length > 0) {
            return (
                list.map(function (item, index) {
                    return <StaffChip key={index} onPress={() => onPress.navigate("Employee", { loginName: item.loginName })} name={item.userName} image={item.photo} />
                })
            );
        } else {
            return (
                <View>
                    <Text>Vacío</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.getStaff(this.props.navigation, this.props.list)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    }
});