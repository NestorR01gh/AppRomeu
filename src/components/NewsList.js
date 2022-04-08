import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { News } from './News';

export class NewsList extends Component {

    getNews = (setVisibility, setModalData, list) => {
        return (
            list.map(function (item, index) {
                let logo = "../assets/logos/"+item.CompaniaPublicadora+".png";
                console.log(logo);
                return <News id={item.IdNews} setModalData={setModalData} setVisibility={setVisibility} key={index} title={item.Titulo} logo={require('../assets/logos/39.png')} image={item.ImageUrl} section={item.SectionName} read={item.ReadDate != null ? true : false} isNews={item.Type == "Comunicados" ? false : true} date={item.FechaPublicacion != undefined ? item.FechaPublicacion.split("T")[0] : undefined} hasFile={item.hasFile} fileLink={item.fileLink} />
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