import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider, DataTable } from 'react-native-paper';
import { StaffFilters } from './StaffFilters';
import { StaffList } from './StaffList';
import { backgroundColor, urlApi } from '../utils/Constants';
import { LoadingModal } from './LoadingModal';
import { Request } from '../utils/Request';

const staffPerPageList = [5, 10, 15]

export class StaffSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            staffPerPage: staffPerPageList[0],
            totalCount: 1,
            search: "",
            loading: false,
            staffList: [],
            totalCount: 1
        }
    }

    setPage = (page) => {
        this.setState({ page: page });
        this.getStaffList();
    }

    setStaffPerPage = (npp) => {
        this.setState({ staffPerPage: npp });
        this.setState({ page: 0 });
        this.getStaffList();
    }

    getPaginationLabel = () => {
        return this.state.page + 1 + "/" + Math.ceil(this.state.totalCount / this.state.staffPerPage);
        //Esto es el label que hay en portal pero se descudra cuando hay muchos registros
        //return `${this.state.page * this.state.staffPerPage + 1}-${Math.min((this.state.page + 1) * this.state.staffPerPage, this.state.totalCount)} of ${totalCount}`
    }

    setSearch = async (search) => {
        await this.setState({ search: search });
        await this.setState({ page: 0 });
        this.getStaffList();
    }

    getStaffList = async () => {
        await this.setState({ loading: true });
        let requestString = urlApi + `IPCalls/GetCallUsersPaged?page=${this.state.page}&pageSize=${this.state.staffPerPage}&orderColumn=userName&ascendingOrder=ASC`;
        let request = new Request(requestString, "POST", { "searchtext": `${this.state.search}` });
        request.withAuth();
        let response = await request.execute();
        this.setState({ staffList: response.data.data[0].items });
        this.setState({ totalCount: response.data.data[0].totalCount });
        await this.setState({ loading: false });
    }

    componentDidMount() {
        this.getStaffList();
    }

    render() {
        return (
            <View style={styles.container}>
                <LoadingModal color={backgroundColor} animating={this.state.loading} />
                <StaffFilters handleSearch={this.setSearch} />
                <StaffList loading={this.state.loading} list={this.state.staffList} navigation={this.props.navigation} />
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