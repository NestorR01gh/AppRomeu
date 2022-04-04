import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NewsFilters } from './NewsFilters';
import { NewsList } from './NewsList';
import { NewsModal } from './NewsModal';
import { Provider } from 'react-native-paper';
import { ListFooter } from './ListFooter';
import { fontFamily, backgroundColor } from '../utils/Constants';

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
            fileLink: ""
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

    setVisibility = (visible) => {
        this.setState({ visible: visible });
    }

    render() {
        return (
            <View style={styles.container}>
                <Provider>
                    <Text style={styles.title}>NOTICIAS</Text>
                    <NewsModal setVisibility={this.setVisibility} title={this.state.title} description={this.state.description} image={this.state.image} date={this.state.date} hasFile={this.state.hasFile} fileLink={this.state.fileLink} visible={this.state.visible} />
                    <NewsFilters />
                    <NewsList setVisibility={this.setVisibility} setModalData={this.setModalData} />
                    {/* <ListFooter /> */}
                </Provider>
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
    }
});