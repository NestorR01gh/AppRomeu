import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { colors, fonts } from '../utils/Constants';


class NewsTypeFilter extends Component {

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{t("newsTypeFilter.title")}: </Text>
                <Text style={styles.label}> {t("newsTypeFilter.all")}</Text>
                <RadioButton onPress={() => this.props.setType(0)} status={this.props.type == 0 ? "checked" : "unchecked"} value={0} uncheckedColor={colors.primary} color={colors.secondary} />
                <Text style={styles.label}> {t("newsTypeFilter.news")}</Text>
                <RadioButton onPress={() => this.props.setType(1)} status={this.props.type == 1 ? "checked" : "unchecked"} value={1} uncheckedColor={colors.primary} color={colors.secondary} />
                <Text style={styles.label}> {t("newsTypeFilter.comunicates")}</Text>
                <RadioButton onPress={() => this.props.setType(2)} status={this.props.type == 2 ? "checked" : "unchecked"} value={2} uncheckedColor={colors.primary} color={colors.secondary} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
        padding: 10
    },
    label: {
        fontFamily: fonts.openSans.Regular,
        fontSize: 13,
        color: colors.primary
    },
    title: {
        fontFamily: fonts.openSans.Regular,
        fontSize: 17,
        color: colors.primary
    }
});

export default withTranslation("global")(NewsTypeFilter)