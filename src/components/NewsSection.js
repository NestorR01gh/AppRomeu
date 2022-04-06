import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NewsFilters } from './NewsFilters';
import { NewsList } from './NewsList';
import { NewsModal } from './NewsModal';
import { DataTable, Provider } from 'react-native-paper';
import { fontFamily, backgroundColor, newsList, urlApi } from '../utils/Constants';
import { Request } from '../utils/Request';
import { Method } from 'axios';

const newsPerPageList = [5, 10, 15]
const totalCount = 3043;

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
            checked: false,
        }
    }

    setModalData = (title, desc, image, date, hasFile, fileLink) => {
        this.setState({ title: title });
        this.setState({ description: desc });
        this.setState({ image: image });
        this.setState({ date: date });
        this.setState({ hasFile: hasFile });
        this.setState({ fileLink: fileLink });
    }

    setChecked = () => {
        this.setState({ checked: !this.state.checked });
    }

    setVisibility = (visible) => {
        this.setState({ visible: visible });
    }

    setPage = (page) => {
        this.setState({ page: page });
    }

    setNewsPerPage = (npp) => {
        this.setState({ newsPerPage: npp });
    }

    getPaginationLabel = () => {
        return this.state.page + 1 + "/" + Math.ceil(totalCount / this.state.newsPerPage);
        //Esto es el label que hay en portal pero se descudra cuando hay muchos registros
        //return `${this.state.page * this.state.newsPerPage + 1}-${Math.min((this.state.page + 1) * this.state.newsPerPage, totalCount)} of ${totalCount}`
    }

    getNewsList = () => {
        let request = new Request(urlApi + "User/GetUser", "POST");
        request.withAuth();
        request.execute();
    }

    componentDidMount() {
        this.getNewsList();
    }

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <Text style={styles.title}>NOTICIAS</Text>
                    <NewsModal setVisibility={this.setVisibility} title={this.state.title} description={this.state.description} image={this.state.image} date={this.state.date} hasFile={this.state.hasFile} fileLink={this.state.fileLink} visible={this.state.visible} />
                    <NewsFilters checked={this.state.checked} handleCheck={this.setChecked} />
                    <NewsList list={newsList} setVisibility={this.setVisibility} setModalData={this.setModalData} />
                </Provider>
                <View style={styles.paginationView}>
                    <DataTable.Pagination label={this.getPaginationLabel()} onItemsPerPageChange={(npp) => this.setNewsPerPage(npp)} numberOfItemsPerPageList={newsPerPageList} numberOfItemsPerPage={this.state.newsPerPage} onPageChange={(page) => this.setPage(page)} page={this.state.page} numberOfPages={Math.ceil(totalCount / this.state.newsPerPage)} showFastPaginationControls />
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