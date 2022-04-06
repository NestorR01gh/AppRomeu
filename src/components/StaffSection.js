import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, DataTable } from 'react-native-paper';
import { StaffFilters } from './StaffFilters';
import { StaffList } from './StaffList';
import { backgroundColor } from '../utils/Constants';

const newsPerPageList = [5, 10, 15]
const totalCount = 45

export class StaffSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            newsPerPage: newsPerPageList[0]
        }
    }



    setPage = (page) => {
        this.setState({ page: page });
    }

    setNewsPerPage = (npp) => {
        this.setState({ newsPerPage: npp });
    }

    getPaginationLabel = () => {
        return `${this.state.page * this.state.newsPerPage + 1}-${Math.min((this.state.page + 1) * this.state.newsPerPage, totalCount)} of ${totalCount}`
    }

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <StaffFilters />
                    <StaffList navigation={this.props.navigation} />
                </Provider>
                <DataTable.Pagination style={{ color: backgroundColor }} onItemsPerPageChange={(npp) => this.setNewsPerPage(npp)} numberOfItemsPerPageList={newsPerPageList} numberOfItemsPerPage={this.state.newsPerPage} label={this.getPaginationLabel()} onPageChange={(page) => this.setPage(page)} page={this.state.page} numberOfPages={Math.ceil(totalCount / this.state.newsPerPage)} showFastPaginationControls />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10
    }
});