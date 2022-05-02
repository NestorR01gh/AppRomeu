import React, { Component } from 'react';
import { StyleSheet, View, Text, Appearance } from 'react-native';
import NewsFilters from './NewsFilters';
import { NewsList } from './NewsList';
import { fonts, colors, api } from '../utils/Constants';
import { Request } from '../utils/Request';
import LoadingModal from './LoadingModal';
import { NewsModal } from './NewsModal';
import { lang } from '../utils/Variables';
import { withTranslation } from 'react-i18next';

const newsPerPage = 10;

class NewsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            read: false,
            signed: false,
            search: "",
            totalCount: 1,
            newsList: [],
            loading: false,
            visible: false,
            id: 0,
            data: { title: "", description: "", imageUrl: undefined, creationDate: "", hasFile: false, fileUrl: "", fileExtension: "", logo: "", signRequired: false, readRequired: false, acceptOrSignDate: undefined, id: 0 }
        }
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

    setSearch = async (search) => {
        await this.setState({ search: search });
        await this.setState({ page: 0 });
        this.getNewsList();
    }

    clear = async () => {
        await this.setState({ search: "" });
        await this.setState({ read: false });
        await this.setState({ signed: false });
        this.getNewsList();
    }

    getNewsList = async () => {
        await this.setState({ loading: true });
        let requestString = api.url + `News/Paged?idLanguage=${lang.id}&page=${this.state.page}&pageSize=${newsPerPage}`;
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
        this.setState({ totalCount: response.data.data[0].totalCount });
        if (this.state.newsList.length == 0) {
            this.setState({ newsList: response.data.data[0].items });
            await this.setState({ loading: false });
        } else {
            await this.setState({ loading: false });
            return response.data.data[0].items;
        }
    }

    hasLanguage(newsLanguages, lang) {
        for (let i = 0; i < newsLanguages.length; i++) {
            if (newsLanguages[i].idLanguage == lang) {
                return i;
            }
        }
        return -1;
    }

    load = async (acceptOrSignDate, id) => {
        let news = await this.getNews();
        let data = this.state.data;
        let pos;

        data.id = id;
        if ((pos = this.hasLanguage(news.newsLanguages, lang.id)) >= 0) {
            data.title = news.newsLanguages[pos].title;
            data.description = news.newsLanguages[pos].description;
        } else if ((pos = this.hasLanguage(news.newsLanguages, 2)) >= 0) {
            data.title = news.newsLanguages[pos].title;
            data.description = news.newsLanguages[pos].description;
        } else {
            data.title = news.newsLanguages[0].title;
            data.description = news.newsLanguages[0].description;
        }
        data.imageUrl = news.imageUrl;
        data.creationDate = news.creationDate.split("T")[0];

        let logo = "https://portal.romeu.com/assets/img/logos/" + news.publishByCompany + ".png";
        data.logo = { uri: logo }

        data.readRequired = news.readRequired;
        data.signRequired = news.signRequired;
        data.acceptOrSignDate = acceptOrSignDate;

        //NO ESTÁ DEL TODO CLARO EL TEMA DE DESCARGA DE DOCUMENTOS
        //data.hasFile = news.thumbs == null ? false : true;
        //data.fileUrl = news.thumbs;
        //data.fileExtension = news.newsLanguages[lang.id].attachmentExtension;

        data.hasFile = false;
        await this.setState({ data: data });
    }

    getNews = async () => {
        if (this.state.id != 0) {
            let requestString = api.url + `News/${this.state.id}`;
            let request = new Request(requestString, "GET");
            request.withAuth();
            let response = await request.execute();
            return response.data.data[0];
        }
    }

    setVisibility = (visible) => {
        this.setState({ visible: visible });
    }

    setModalData = async (id, acceptOrSignDate) => {
        this.setState({ loading: true });
        await this.setState({ id: id });
        await this.load(acceptOrSignDate, id);
        this.setState({ loading: false });
        this.setState({ visible: true });
    }

    componentDidMount() {
        this.getNewsList();
    }

    endReached = async () => {
        await this.setState({ page: this.state.page + 1 });
        let news = await this.getNewsList();
        let existingNews = this.state.newsList;
        let newsResult = existingNews.concat(news);
        await this.setState({ newsList: newsResult });
    }

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <NewsModal getNewsList={this.getNewsList} visible={this.state.visible} setVisibility={this.setVisibility} data={this.state.data} />
                <LoadingModal color={colors.primary} animating={this.state.loading} />
                <Text style={styles.title}>{t("mainScreen.title")}</Text>
                <NewsFilters clear={this.clear} handleSearch={this.setSearch} read={this.state.read} handleRead={this.setRead} signed={this.state.signed} handleSigned={this.setSigned} />
                <NewsList endReached={this.endReached} loading={this.state.loading} list={this.state.newsList} setModalData={this.setModalData} />
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
        fontFamily: fonts.openSans.ExtraBold,
        fontSize: 40,
        color: colors.primary,
        alignSelf: 'center',
        padding: 10,
    },
    paginationView: {
        borderTopWidth: 1,
        borderTopColor: colors.primary
    }
});

export default withTranslation("global")(NewsSection);