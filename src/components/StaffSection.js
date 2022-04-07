import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, DataTable } from 'react-native-paper';
import { StaffFilters } from './StaffFilters';
import { StaffList } from './StaffList';
import { backgroundColor } from '../utils/Constants';

const staffPerPageList = [5, 10, 15]

export class StaffSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            staffPerPage: staffPerPageList[0],
            totalCount: 1,
            search: ""
        }
    }

    setPage = (page) => {
        this.setState({ page: page });
    }

    setStaffPerPage = (npp) => {
        this.setState({ staffPerPage: npp });
    }

    getPaginationLabel = () => {
        return this.state.page + 1 + "/" + Math.ceil(this.state.totalCount / this.state.staffPerPage);
        //Esto es el label que hay en portal pero se descudra cuando hay muchos registros
        //return `${this.state.page * this.state.staffPerPage + 1}-${Math.min((this.state.page + 1) * this.state.staffPerPage, this.state.totalCount)} of ${totalCount}`
    }

    handleSearch = (search) => {
        this.setState({ search: search });
    }

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <StaffFilters handleSearch={this.handleSearch} />
                    <StaffList navigation={this.props.navigation} />
                </Provider>
                <View style={styles.paginationView}>
                    <DataTable.Pagination style={{ color: backgroundColor }} onItemsPerPageChange={(npp) => this.setStaffPerPage(npp)} numberOfItemsPerPageList={staffPerPageList} numberOfItemsPerPage={this.state.staffPerPage} label={this.getPaginationLabel()} onPageChange={(page) => this.setPage(page)} page={this.state.page} numberOfPages={Math.ceil(this.state.totalCount / this.state.newsPerPage)} showFastPaginationControls />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10
    },
    paginationView: {
        borderTopWidth: 1,
        borderTopColor: backgroundColor
    }
});