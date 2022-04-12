import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NewsFilters } from './NewsFilters';
import { NewsList } from './NewsList';
import { NewsModal } from './NewsModal';
import { DataTable, Provider } from 'react-native-paper';
import { fontFamily, backgroundColor, newsList, urlApi, idLanguage } from '../utils/Constants';
import { Request } from '../utils/Request';
import { LoadingModal } from './LoadingModal';

const newsPerPageList = [5, 10, 15]

export class NewsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            newsPerPage: newsPerPageList[0],
            read: false,
            signed: false,
            search: "",
            totalCount: 1,
            data: undefined,
            newsList: newsList,
            updated: false,
            loading: false
        }
    }

    setLoading = (loading) => {
        this.setState({ loading: loading });
    }

    setRead = async () => {
        await this.setState({ read: !this.state.read });
        await this.setState({ page: 0 });
        this.getNewsList();
    }

    setSigned = async () => {
        await this.setState({ signed: !this.state.signed });
        await this.setState({ page: 0 });
        this.getNewsList();
    }

    setPage = async (page) => {
        await this.setState({ page: page });
        this.getNewsList();
    }

    setNewsPerPage = async (npp) => {
        await this.setState({ newsPerPage: npp });
        this.getNewsList();
    }

    setSearch = async (search) => {
        await this.setState({ search: search });
        await this.setState({ page: 0 });
        this.getNewsList();
    }

    getPaginationLabel = () => {
        //return this.state.page + 1 + "/" + Math.ceil(this.state.totalCount / this.state.newsPerPage);

        //Esto es el label que hay en portal pero se descudra cuando hay muchos registros
        return `${this.state.page * this.state.newsPerPage + 1}-${Math.min((this.state.page + 1) * this.state.newsPerPage, this.state.totalCount)} of ${this.state.totalCount}`
    }

    getNewsList = async () => {
        await this.setState({ loading: true });
        let requestString = urlApi + `News/Paged?idLanguage=${idLanguage}&page=${this.state.page}&pageSize=${this.state.newsPerPage}`;
        if (this.state.search != "") {
            requestString += `&search=${this.state.search}`
        }
        if (this.state.read) {
            requestString += `&isNotRead=${this.state.read}`
        }
        if (this.state.signed) {
            requestString += `&isNotSigned=${this.state.signed}`
        }
        let request = new Request(requestString, "GET");
        request.withAuth();
        let response = await request.execute();
        this.setState({ newsList: response.data.data[0].items });
        this.setState({ totalCount: response.data.data[0].totalCount });
        await this.setState({ loading: false });
    }

    componentDidMount() {
        this.getNewsList();
    }

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <LoadingModal color={backgroundColor} animating={this.state.loading} />
                    <Text style={styles.title}>NOTICIAS {this.state.search}</Text>
                    <NewsFilters handleSearch={this.setSearch} read={this.state.read} handleRead={this.setRead} signed={this.state.signed} handleSigned={this.setSigned} />
                    <NewsList list={this.state.newsList} setModalData={this.props.setModalData} />
                </Provider>
                <View style={styles.paginationView}>
                    <DataTable.Pagination label={this.getPaginationLabel()} onItemsPerPageChange={(npp) => this.setNewsPerPage(npp)} numberOfItemsPerPageList={newsPerPageList} numberOfItemsPerPage={this.state.newsPerPage} onPageChange={(page) => this.setPage(page)} page={this.state.page} numberOfPages={Math.ceil(this.state.totalCount / this.state.newsPerPage)} showFastPaginationControls />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        justifyContent: 'center'
    },
    title: {
        fontFamily: fontFamily,
        fontSize: 30,
        color: backgroundColor,
        alignSelf: 'center',
        marginTop: 10
    },
    paginationView: {
        borderTopWidth: 1,
        borderTopColor: backgroundColor
    }
});