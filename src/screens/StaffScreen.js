import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { Header } from '../components/Header';
import { StaffSection } from '../components/StaffSection';
import { urlApi } from '../utils/Constants';
import { Request } from '../utils/Request';

export class StaffScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: undefined
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
        //this.getPhoto();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header image={this.state.profileImage} navigation={this.props.navigation} />
                <StaffSection navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    body: {
        flex: 10
    }
});