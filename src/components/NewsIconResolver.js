import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from './CustomButton';

export class NewsIconResolver extends Component {
    render() {
        if (this.props.signRequired) {
            if (this.props.date != undefined) {
                return (
                    <View style={{padding: 5}}>
                        <Text>{t("newsModalFooterResolver.signed.title")}</Text>
                        <Text>{this.props.date}</Text>
                    </View>
                );
            } else {
                return (
                    <View>
                        <CustomButton label={t("newsModalFooterResolver.signed.button")} onPress={this.sign} />
                    </View>
                );
            }
        } else if (this.props.readRequired) {
            if (this.props.date != undefined) {
                return (
                    <View style={{padding: 5}}>
                        <Text>{t("newsModalFooterResolver.accepted.title")}</Text>
                        <Text>{this.props.date}</Text>
                    </View>
                );
            } else {
                return (
                    <View>
                        <CustomButton label={t("newsModalFooterResolver.accepted.button")} onPress={this.accept} />
                    </View>
                );
            }
        } else {
            return <View />
        }
    }
}