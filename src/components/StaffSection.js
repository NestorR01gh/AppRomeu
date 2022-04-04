import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { ListFooter } from './ListFooter';
import { StaffFilters } from './StaffFilters';
import { StaffList } from './StaffList';

export class StaffSection extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <StaffFilters />
                    <StaffList navigation={this.props.navigation}/>
                    <ListFooter />
                </Provider>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10
    }
});