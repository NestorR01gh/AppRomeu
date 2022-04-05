import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { ListFooter } from './ListFooter';
import { StaffFilters } from './StaffFilters';
import { StaffList } from './StaffList';

export class StaffSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pageSize: 5,
            totalCount: 2709
        }
    }

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
                    <StaffList navigation={this.props.navigation} />
                    <ListFooter page={this.state.page} pageSize={this.state.pageSize} setPageSize={this.setPageSize} totalCount={this.state.totalCount} firstPage={this.firstPage} prevPage={this.prevPage} nextPage={this.nextPage} lastPage={this.lastPage} />
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