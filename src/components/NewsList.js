import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { News } from './News';

export class NewsList extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        this.myRef.current.scrollTo({x: 0, y: 0, animated: false})
    }

    getNews = (setVisibility, setModalData, list, setLoading) => {
        return (
            list.map(function (item, index) {
                let logo = "../assets/logos/" + item.CompaniaPublicadora + ".png";
                return <News setLoading={setLoading} id={item.IdNews} setModalData={setModalData} setVisibility={setVisibility} key={index} title={item.Titulo} logo={require('../assets/logos/39.png')} image={item.ImageUrl} section={item.SectionName} read={item.ReadDate != null ? true : false} isNews={item.Type == "Comunicados" ? false : true} date={item.FechaPublicacion != undefined ? item.FechaPublicacion.split("T")[0] : undefined} />
            })
        );
    }

    render() {
        return (
            <View style={{ flex: 7 }}>
                <ScrollView ref={this.myRef}>
                    {this.getNews(this.props.setVisibility, this.props.setModalData, this.props.list, this.props.setLoading)}
                </ScrollView>
            </View>
        );
    }
}