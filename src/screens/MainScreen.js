import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { NewsSection } from '../components/NewsSection';
import { urlApi, idLanguage } from '../utils/Constants';
import { Request } from '../utils/Request';
import { NewsModal } from '../components/NewsModal';

export class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: undefined,
            visible: false,
            id: 0,
            data: { title: "", description: "", imageUrl: undefined, creationDate: "", hasFile: false, fileUrl: "", fileExtension: "" }
        }
    }

    load = async () => {
        let news = await this.getNews();
        let data = this.state.data;
        data.title = news.newsLanguages[idLanguage].title;
        data.description = news.newsLanguages[idLanguage].description;
        data.imageUrl = news.imageUrl;
        data.creationDate = news.creationDate.split("T")[0];

        //NO ESTÁ DEL TODO CLARO EL TEMA DE DESCARGA DE DOCUMENTOS
        //data.hasFile = news.newsLanguages[idLanguage].attachmentUrl == null ? false : true;
        //data.fileUrl = news.newsLanguages[idLanguage].attachmentUrl;
        //data.fileExtension = news.newsLanguages[idLanguage].attachmentExtension;
        
        data.hasFile = false;
        await this.setState({ data: data });
    }

    getNews = async () => {
        if (this.state.id != 0) {
            let requestString = urlApi + `News/${this.state.id}`;
            let request = new Request(requestString, "GET");
            request.withAuth();
            let response = await request.execute();
            return response.data.data[0];
        }
    }

    setVisibility = (visible) => {
        this.setState({ visible: visible });
        this.forceUpdate();
    }

    setModalData = async (id) => {
        await this.setState({ id: id });
        await this.load();
        this.setState({ visible: true });
    }

    getPhoto = async () => {
        let req = new Request(urlApi + "User/GetUserPhoto", "POST");
        req.withAuth();
        try {
            let res = await req.execute();
            this.setState({ profileImage: res.data.data });
        } catch (e) {
            this.setState({ profileImage: undefined });
        }
    }

    componentDidMount() {
        this.getPhoto();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header image={this.state.profileImage} navigation={this.props.navigation} />
                <NewsModal visible={this.state.visible} setVisibility={this.setVisibility} data={this.state.data} />
                <NewsSection setModalData={this.setModalData} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 10
    }
});