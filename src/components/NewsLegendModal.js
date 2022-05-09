import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Modal, Portal, Text } from 'react-native-paper';
import { colors, fonts } from '../utils/Constants';
import { withTranslation } from 'react-i18next';


class NewsLegendModal extends Component {

    handlePress = () => {
        this.props.handlePress();
    }

    render() {
        const { t } = this.props;
        return (
            <Portal>
                <Modal style={{ padding: 20 }} onDismiss={() => this.props.handlePress(false)} visible={this.props.visible}>
                    <View style={styles.modal}>
                        <Text style={{ color: "white", fontSize: 40, fontFamily: fonts.openSans.ExtraBold, marginBottom: 25, margin: 20 }}>{t("newsLegendModal.title")}</Text>
                        <View style={{backgroundColor: "white", padding: 20, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                            <View style={styles.row}>
                                <IconButton style={{ backgroundColor: "#ffeea4", borderColor: colors.primary, borderWidth: 1.2 }} icon="alert-outline" size={35} color={colors.primary} />
                                <Text style={styles.label}>{t("newsLegendModal.expired")}</Text>
                            </View>
                            <View style={styles.row}>
                                <IconButton icon="thumb-up" size={35} color={colors.primary} />
                                <Text style={styles.label}>{t("newsLegendModal.accept")}</Text>
                            </View>
                            <View style={styles.row}>
                                <IconButton icon="file-sign" size={35} color={colors.primary} />
                                <Text style={styles.label}>{t("newsLegendModal.sign")}</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Portal >
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: colors.primary,
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.primary,
        margin: 20
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        margin: 10
    },
    label: {
        fontFamily: fonts.openSans.SemiBoldItalic,
        color: colors.primary,
        fontSize: 30,
        marginLeft: 10
    }
});

export default withTranslation("global")(NewsLegendModal);