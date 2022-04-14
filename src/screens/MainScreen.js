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
        }
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
                <NewsSection />
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