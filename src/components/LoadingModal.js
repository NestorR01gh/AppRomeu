import React, { Component } from 'react';
import { backgroundColor, fonts } from '../utils/Constants';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Modal, Portal, Text } from 'react-native-paper';
import { withTranslation } from 'react-i18next';


class LoadingModal extends Component {
    render() {
        const { t } = this.props;
        return (
            <Portal>
                <Modal visible={this.props.animating}>
                    <View style={styles.container}>
                        <Text style={{ fontFamily: fonts.openSansSemiBold, fontSize: 25, marginBottom: 50, color: this.props.color }}>{t("loadingModal.label")}</Text>
                        <ActivityIndicator size={40} animating={this.props.animating} color={this.props.color} />
                    </View>
                </Modal>
            </Portal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: backgroundColor,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 30,
        justifyContent: 'space-around',
        margin: 20
    }
});

export default withTranslation("global")(LoadingModal);