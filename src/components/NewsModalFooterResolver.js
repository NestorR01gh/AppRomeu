import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { urlApi } from '../utils/Constants';
import { CustomButton } from './CustomButton';
import { Request } from '../utils/Request';

export class NewsModalFooterResolver extends Component {

    sign = async () => {
        let requestString = urlApi + `News/${this.props.id}/Sign`;
        let request = new Request(requestString, "PUT", { "idNews": this.props.id });
        request.withAuth();
        await request.execute();
        this.props.closeModal();
    }

    accept = async () => {
        let requestString = urlApi + `News/${this.props.id}/Accept`;
        let request = new Request(requestString, "PUT", { "idNews": this.props.id });
        request.withAuth();
        await request.execute();
        this.props.closeModal();
    }

    render() {
        if (this.props.signRequired) {
            if (this.props.date != undefined) {
                return (
                    <View>
                        <Text>Firmado el</Text>
                        <Text>{this.props.date}</Text>
                    </View>
                );
            } else {
                return(
                    <View>
                        <CustomButton label={"Firmar"} onPress={this.sign}/>
                    </View>
                );
            }
        } else if (this.props.readRequired) {
            if (this.props.date != undefined) {
                return (
                    <View>
                        <Text>Aceptado el</Text>
                        <Text>{this.props.date}</Text>
                    </View>
                );
            } else {
                return(
                    <View>
                        <CustomButton label={"Aceptar"} onPress={this.accept}/>
                    </View>
                );
            }
        } else {
            return <View />
        }
    }
}
