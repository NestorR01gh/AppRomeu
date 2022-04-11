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
            visible: false,
            title: "",
            description: "",
            image: "",
            date: "",
            hasFile: "",
            fileLink: "",
            page: 0,
            newsPerPage: newsPerPageList[0],
            read: false,
            signed: false,
            search: "",
            totalCount: 1,
            data: undefined,
            newsList: newsList,
            updated: false,
            loading: false,
            fileExtension: ""
        }
    }

    setModalData = (title, desc, image, date, hasFile, fileLink, fileExtension) => {
        this.setState({ title: title });
        this.setState({ description: desc });
        this.setState({ image: image });
        this.setState({ date: date });
        this.setState({ hasFile: hasFile });
        this.setState({ fileLink: fileLink });
        this.setState({ fileExtension: fileExtension });
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

    setVisibility = (visible) => {
        this.setState({ visible: visible });
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
        return this.state.page + 1 + "/" + Math.ceil(this.state.totalCount / this.state.newsPerPage);

        //Esto es el label que hay en portal pero se descudra cuando hay muchos registros
        //return `${this.state.page * this.state.newsPerPage + 1}-${Math.min((this.state.page + 1) * this.state.newsPerPage, totalCount)} of ${totalCount}`
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
                    <NewsModal setVisibility={this.setVisibility} title={this.state.title} description={this.state.description} image={this.state.image} date={this.state.date} hasFile={this.state.hasFile} fileLink={this.state.fileLink} visible={this.state.visible} fileExtension={this.state.fileExtension}/>
                    <NewsFilters handleSearch={this.setSearch} read={this.state.read} handleRead={this.setRead} signed={this.state.signed} handleSigned={this.setSigned} />
                    <NewsList list={this.state.newsList} setVisibility={this.setVisibility} setModalData={this.setModalData} />
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