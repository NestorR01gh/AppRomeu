import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { News } from './News';


export class NewsList extends Component {

    getNews(list) {
        return (
            list.map(function (item, index) {
                return <News key={index} title={item.title} logo={item.logo} image={item.image} section={item.section} read={item.read} isNews={item.isNews}/>
            })
        );
    }


    render() {
        return (
            <ScrollView>
                {this.getNews(this.props.list)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    
});