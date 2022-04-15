import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { NoResultsFound } from './NoResultsFound';
import { StaffChip } from './StaffChip';

export class StaffList extends Component {

    getStaff = (onPress, list) => {
        if (list.length > 0) {
            return (
                list.map(function (item, index) {
                    return <StaffChip key={index} onPress={() => onPress.navigate("Employee", { loginName: item.loginName })} name={item.userName} image={item.photo} />
                })
            );
        } else if(!this.props.loading) {
            return (
                <NoResultsFound/>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 5 }}>
                <ScrollView>
                    {this.getStaff(this.props.navigation, this.props.list)}
                </ScrollView>
            </View>
        );
    }
}