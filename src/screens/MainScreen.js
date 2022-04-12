import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
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
        console.log("kidwobodpin");
        let news = await this.getNews();
        let data = this.state.data;
        data.title = news.newsLanguages[idLanguage].title;
        data.description = news.newsLanguages[idLanguage].description;
        data.imageUrl = news.imageUrl;
        data.creationDate = news.creationDate.split("T")[0];
        data.hasFile = news.newsLanguages[idLanguage].attachmentUrl == null ? false : true;
        data.fileUrl = news.newsLanguages[idLanguage].attachmentUrl;
        data.fileExtension = news.newsLanguages[idLanguage].attachmentExtension;
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
            this.setState({ profileImage: res.data });
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
                <Provider>
                    <Header image={this.state.profileImage} navigation={this.props.navigation} />
                    <NewsModal visible={this.state.visible} setVisibility={this.setVisibility} data={this.state.data} />
                    <NewsSection setModalData={this.setModalData} setVisibility={this.setVisibility} />
                </Provider>
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