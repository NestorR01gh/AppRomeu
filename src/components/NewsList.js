import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import News from './News';
import NoResultsFound from './NoResultsFound';

export class NewsList extends Component {
    render() {
        return (
            <View style={{ flex: 7 }}>
                <FlatList data={this.props.list} onEndReachedThreshold={0.5} onEndReached={() => this.props.endReached()} renderItem={({ item, index }) => {
                    if (this.props.list.length > 0) {
                        let acceptOrSignDate;
                        if (item.AcceptRequired) {
                            acceptOrSignDate = item.AcceptDate;
                        } else if (item.SignRequired) {
                            acceptOrSignDate = item.SignDate;
                        }
                        if (acceptOrSignDate != undefined) {
                            acceptOrSignDate = acceptOrSignDate.split("T")[0]
                        }
                        let logo = "https://portal.romeu.com/assets/img/logos/" + item.CompaniaPublicadora + ".png";
                        return <News id={item.IdNews} setModalData={this.props.setModalData} key={index} title={item.Titulo} logo={{ uri: logo }} image={item.ImageUrl} section={item.SectionName} read={item.ReadDate != null ? true : false} isNews={item.Type == "Comunicados" ? false : true} date={item.FechaPublicacion != undefined ? item.FechaPublicacion.split("T")[0] : undefined} acceptOrSignDate={acceptOrSignDate} readRequired={item.AcceptRequired} signRequired={item.SignRequired} />
                    } else if (!this.props.loading) {
                        return (
                            <NoResultsFound />
                        );
                    }
                }} />
            </View>
        );
    }
}
