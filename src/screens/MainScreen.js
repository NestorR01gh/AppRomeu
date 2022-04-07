import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { Header } from '../components/Header';
import { NewsSection } from '../components/NewsSection';
import { urlApi } from '../utils/Constants';
import { Request } from '../utils/Request';

export class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: undefined
        }
    }

    getPhoto = async () => {
        let req = new Request(urlApi + "User/GetUserPhoto", "POST");
        req.withAuth();
        try {
            let res = await req.execute();
            this.setState({ image: res.data });
        } catch (e) {
            this.setState({ image: undefined });
        }
    }

    componentDidMount() {
        this.getPhoto();
    }

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <Header image={this.state.image} navigation={this.props.navigation} />
                    <NewsSection />
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