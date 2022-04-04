import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { ListFooter } from './ListFooter';
import { StaffFilters } from './StaffFilters';
import { StaffList } from './StaffList';

export class StaffSection extends Component {

    firstPage = () => {

    }

    prevPage = () => {

    }

    nextPage = () => {

    }

    lastPage = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <StaffFilters />
                    <StaffList navigation={this.props.navigation}/>
                    <ListFooter totalCount={2709} firstPage={this.firstPage} prevPage={this.prevPage} nextPage={this.nextPage} lastPage={this.lastPage}/>
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