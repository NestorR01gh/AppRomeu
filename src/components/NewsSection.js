import React, { Component } from 'react';
import { StyleSheet, View, Text, Appearance } from 'react-native';
import NewsFilters from './NewsFilters';
import { NewsList } from './NewsList';
import { DataTable, IconButton } from 'react-native-paper';
import { fonts, colors } from '../utils/Constants';
import { Request } from '../utils/Request';
import LoadingModal from './LoadingModal';
import NewsModal from './NewsModal';
import { lang } from '../utils/Variables';
import { withTranslation } from 'react-i18next';
import { api } from '../utils/Variables';
import NewsLegendModal from './NewsLegendModal';

const newsPerPageList = [10, 15, 20]

class NewsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            newsPerPage: newsPerPageList[0],
            read: false,
            signed: false,
            search: "",
            totalCount: 1,
            newsList: [],
            loading: false,
            visible: false,
            id: 0,
            type: 0,
            legendVisible: false,
            data: { title: "", description: "", imageUrl: { uri: "" }, creationDate: "", hasFile: false, fileUrl: "", fileExtension: "", logo: "", signRequired: false, readRequired: false, acceptOrSignDate: undefined, id: 0, expired: false }
        }
    }

    setLegendVisibility = (visible) => {
        this.setState({ legendVisible: visible });
    }

    setType = async (value) => {
        this.setState({ type: value });
        await this.setState({ page: 0 });
        this.getNewsList();
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
        this.setState({ page: 0 });
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
        //return `${this.state.page * this.state.newsPerPage + 1}-${Math.min((this.state.page + 1) * this.state.newsPerPage, this.state.totalCount)} of ${this.state.totalCount}`
    }

    clear = async () => {
        await this.setState({ search: "" });
        await this.setState({ read: false });
        await this.setState({ signed: false });
        this.getNewsList();
    }

    getNewsList = async () => {
        await this.setState({ loading: true });
        let requestString = api.url + `News/Paged?idLanguage=${lang.id}&page=${this.state.page}&pageSize=${this.state.newsPerPage}`;
        if (this.state.search != "") {
            requestString += `&search=${this.state.search}`
        }
        if (this.state.read) {
            requestString += `&isNotRead=${this.state.read}`
        }
        if (this.state.signed) {
            requestString += `&isNotSigned=${this.state.signed}`
        }
        if (this.state.type == 1 || this.state.type == 2) {
            requestString += `&newsType=${this.state.type}`
        }
        let request = new Request(requestString, "GET");
        request.withAuth();
        let response = await request.execute();
        this.setState({ newsList: response.data.data[0].items });
        this.setState({ totalCount: response.data.data[0].totalCount });
        await this.setState({ loading: false });
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
        data.imageUrl = { uri: news.imageUrl };
        data.creationDate = news.creationDate.split("T")[0];

        let logo = "https://portal.romeu.com/assets/img/logos/" + news.publishByCompany + ".png";
        data.logo = { uri: logo }

        data.readRequired = news.readRequired;
        data.signRequired = news.signRequired;
        data.acceptOrSignDate = acceptOrSignDate;
        data.expired = news.expired;

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

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <NewsLegendModal handlePress={this.setLegendVisibility} visible={this.state.legendVisible} />
                <NewsModal getNewsList={this.getNewsList} visible={this.state.visible} setVisibility={this.setVisibility} data={this.state.data} />
                <LoadingModal color={colors.primary} animating={this.state.loading} />
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <Text style={styles.title}>{t("mainScreen.title")}</Text>
                    <IconButton onPress={() => this.setLegendVisibility(true)} icon="information" size={40} color={colors.primary} />
                </View>
                <NewsFilters setType={this.setType} type={this.state.type} clear={this.clear} handleSearch={this.setSearch} read={this.state.read} handleRead={this.setRead} signed={this.state.signed} handleSigned={this.setSigned} />
                <NewsList loading={this.state.loading} list={this.state.newsList} setModalData={this.setModalData} />
                <View style={styles.paginationView}>
                    <DataTable.Pagination style={{ backgroundColor: Appearance.getColorScheme() == "light" ? "#f2f2f2" : colors.primary }} label={this.getPaginationLabel()} onItemsPerPageChange={(npp) => this.setNewsPerPage(npp)} numberOfItemsPerPageList={newsPerPageList} numberOfItemsPerPage={this.state.newsPerPage} onPageChange={(page) => this.setPage(page)} page={this.state.page} numberOfPages={Math.ceil(this.state.totalCount / this.state.newsPerPage)} showFastPaginationControls />
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
        fontFamily: fonts.openSans.ExtraBold,
        fontSize: 35,
        color: colors.primary
    },
    paginationView: {
        borderTopWidth: 1,
        borderTopColor: colors.primary
    }
});

export default withTranslation("global")(NewsSection);