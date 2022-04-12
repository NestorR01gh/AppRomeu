import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { Header } from '../components/Header';
import { NewsSection } from '../components/NewsSection';
import { urlApi } from '../utils/Constants';
import { Request } from '../utils/Request';
import { NewsModal } from '../components/NewsModal';

export class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: undefined,
            visible: false,
            title: "",
            description: "",
            image: "",
            date: "",
            hasFile: "",
            fileLink: "",
            fileExtension: "",
        }
    }

    setVisibility = (visible) => {
        this.setState({ visible: visible });
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
                    <NewsModal setVisibility={this.setVisibility} title={this.state.title} description={this.state.description} image={this.state.image} date={this.state.date} hasFile={this.state.hasFile} fileLink={this.state.fileLink} visible={this.state.visible} fileExtension={this.state.fileExtension} />
                    <NewsSection setModalData={this.setModalData} setVisibility={this.setVisibility}/>
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