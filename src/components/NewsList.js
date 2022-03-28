import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { News } from './News';
import { NewsModal } from './NewsModal';
import { newsList } from '../utils/Constants';

export class NewsList extends Component {

    getNews = (setVisibility, setModalData) => {
        return (
            newsList.map(function (item, index) {
                return <News setModalData={setModalData} setVisibility={setVisibility} key={index} title={item.title} logo={item.logo} image={item.image} section={item.section} read={item.read} isNews={item.isNews} date={item.date} hasFile={item.hasFile} fileLink={item.fileLink} />
            })
        );
    }

    render() {
        return (
            <View style={{ flex: 7 }}>
                <ScrollView>
                    {this.getNews(this.props.setVisibility, this.props.setModalData)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});