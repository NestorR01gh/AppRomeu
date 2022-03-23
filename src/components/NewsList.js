import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';
import { backgroundColor } from '../utils/Constants';
import { News } from './News';
import { NewsModal } from './NewsModal';


export class NewsList extends Component {
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

    getNews = (list, setVisibility, setModalData) => {
        return (
            list.map(function (item, index) {
                return <News setModalData={setModalData} setVisibility={setVisibility} key={index} title={item.title} logo={item.logo} image={item.image} section={item.section} read={item.read} isNews={item.isNews} date={item.date} hasFile={item.hasFile} fileLink={item.fileLink} />
            })
        );
    }

    render() {
        return (
            <Provider>
                <NewsModal setVisibility={this.setVisibility} title={this.state.title} description={this.state.description} image={this.state.image} date={this.state.date} hasFile={this.state.hasFile} fileLink={this.state.fileLink} visible={this.state.visible} />
                <ScrollView>
                    {this.getNews(this.props.list, this.setVisibility, this.setModalData)}
                </ScrollView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: "90%",
        height: "95%",
        borderRadius: 15
    }
});