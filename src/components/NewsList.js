import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import News from './News';
import NoResultsFound from './NoResultsFound';

export class NewsList extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        this.myRef.current.scrollTo({ x: 0, y: 0, animated: false })
    }

    getNews = (setModalData, list) => {
        if (list.length > 0) {
            return (
                list.map(function (item, index) {
                    let acceptOrSignDate;
                    if (item.AcceptRequired) {
                        acceptOrSignDate = item.AcceptDate;
                    } else if (item.SignRequired) {
                        acceptOrSignDate = item.SignDate;
                    }
                    
                    let pubDate = new Date(item.FechaPublicacion);
                    let pubDateString = pubDate.getDate()+"/"+pubDate.getMonth()+"/"+pubDate.getFullYear().toString().slice(2);

                    let AccSignDate = new Date(acceptOrSignDate);
                    //let AccSignDateString = AccSignDate.getDate()+"/"+AccSignDate.getMonth()+"/"+AccSignDate.getFullYear().toString().slice(2);
                    let AccSignDateString = AccSignDate.toDateString();
                    let logo = "https://portal.romeu.com/assets/img/logos/" + item.CompaniaPublicadora + ".png";
                    return <News id={item.IdNews} expired={item.Expired} setModalData={setModalData} key={index} title={item.Titulo} logo={{ uri: logo }} image={item.ImageUrl} section={item.SectionName} read={item.ReadDate != null ? true : false} isNews={item.Type == "Comunicados" ? false : true} date={pubDateString} acceptOrSignDate={AccSignDateString} readRequired={item.AcceptRequired} signRequired={item.SignRequired} />
                })
            );
        } else if (!this.props.loading) {
            return (
                <NoResultsFound />
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 7 }}>
                <ScrollView ref={this.myRef}>
                    {this.getNews(this.props.setModalData, this.props.list)}
                </ScrollView>
            </View>
        );
    }
}
