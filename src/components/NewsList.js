import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { News } from './News';

export class NewsList extends Component {

    getNews = (setVisibility, setModalData, list) => {
        return (
            list.map(function (item, index) {
                return <News id={item.id} setModalData={setModalData} setVisibility={setVisibility} key={index} title={item.title} logo={item.logo} image={item.image} section={item.section} read={item.read} isNews={item.isNews} date={item.date} hasFile={item.hasFile} fileLink={item.fileLink} />
            })
        );
    }

    render() {
        return (
            <View style={{ flex: 7 }}>
                <ScrollView>
                    {this.getNews(this.props.setVisibility, this.props.setModalData, this.props.list)}
                </ScrollView>
            </View>
        );
    }
}