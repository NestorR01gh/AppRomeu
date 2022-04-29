import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, fonts } from '../utils/Constants';
import { IconButton } from 'react-native-paper';
import { withTranslation } from 'react-i18next';

class NoResultsFound extends Component {
    render() {
        const { t } = this.props;
        return (
            <View style={styles.viewNoResults}>
                <IconButton style={{ flex: 1, padding: 5 }} icon="alert-outline" size={40} color={colors.primary} />
                <Text style={styles.textNoResults}>{t("noResultsFound.label")}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewNoResults: {
        flex: 1,
        backgroundColor: '#80bfff',
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        alignItems: 'center'
    },
    textNoResults: {
        fontFamily: fonts.openSans.MediumItalic,
        color: colors.primary,
        fontSize: 20,
        flex: 5
    }
});

export default withTranslation("global")(NoResultsFound);