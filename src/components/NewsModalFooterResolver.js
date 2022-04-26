import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { urlApi } from '../utils/Constants';
import { CustomButton } from './CustomButton';
import { Request } from '../utils/Request';
import { withTranslation } from 'react-i18next';

class NewsModalFooterResolver extends Component {

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
        const { t } = this.props;
        if (this.props.signRequired) {
            if (this.props.date != undefined) {
                return (
                    <View>
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
                    <View>
                        <Text>{t("newsModalFooterResolver.accepted.title")}</Text>
                        <Text>{this.props.date}</Text>
                    </View>
                );
            } else {
                return (
                    <View>
                        <CustomButton label={t("newsModalFooterResolver.accepted.title")} onPress={this.accept} />
                    </View>
                );
            }
        } else {
            return <View />
        }
    }
}

export default withTranslation("global")(NewsModalFooterResolver);