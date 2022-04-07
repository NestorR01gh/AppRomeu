import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { StaffChip } from './StaffChip';
import { newsList } from '../utils/Constants';

export class StaffList extends Component {

    getStaff = (onPress) => {
        return (
            newsList.map(function (item, index) {
                return <StaffChip key={index} onPress={() => onPress.navigate("Employee", { employeeId: index + 73453 })} name={"José Ramírez"} image="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1425034585/content-items/001/228/844/sesion-estudio-barcelona-10-original.jpg?1425034585" />
            })
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.getStaff(this.props.navigation)}
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