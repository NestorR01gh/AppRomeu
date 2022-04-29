import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox, IconButton, List, TextInput } from 'react-native-paper';
import { colors, fonts } from '../utils/Constants';
import { CustomButton } from './CustomButton';

class NewsFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            expanded: false
        }
    }

    handleRead = () => {
        this.props.handleRead();
        this.toggleExpanded();
    }

    handleSigned = () => {
        this.props.handleSigned();
        this.toggleExpanded();
    }

    handleChangeText = (text) => {
        this.setState({ search: text })
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.search);
        this.toggleExpanded();
    }

    clear = async () => {
        this.setState({ search: "" });
        this.props.clear();
        this.toggleExpanded();
    }

    toggleExpanded = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <List.Section style={styles.listSection}>
                    <List.Accordion onPress={this.toggleExpanded} expanded={this.state.expanded} theme={{ colors: { background: 'transparent' } }} titleStyle={styles.accordionTitle} title={t("mainScreen.filters.title")} left={props => <IconButton {...props} icon={this.state.expanded ? "filter" : "filter-outline"} size={30} color={colors.primary} />}>
                        <TextInput placeholderTextColor={colors.primary} value={this.state.search} onSubmitEditing={this.handleSearch} onChangeText={this.handleChangeText} left={<TextInput.Icon icon="magnify" color={colors.primary} size={30} />} placeholder={t("mainScreen.filters.placeholder")} underlineColor='transparent' activeUnderlineColor={colors.secondary} style={styles.textInput} ref={ref => ref && ref.setNativeProps({ style: { fontFamily: fonts.openSans.SemiBold, color: colors.primary } })} />
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            <Text style={styles.label}>{t("mainScreen.filters.notSigned")}: </Text>
                            <Checkbox uncheckedColor='black' color={colors.secondary} onPress={() => this.handleSigned()} status={this.props.signed ? 'checked' : 'unchecked'} />
                        </View>
                        <View style={styles.viewCheckboxes}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={styles.label}>{t("mainScreen.filters.notRead")}: </Text>
                                <Checkbox uncheckedColor='black' color={colors.secondary} onPress={() => this.handleRead()} status={this.props.read ? 'checked' : 'unchecked'} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <CustomButton label={t("mainScreen.filters.buttonLabel")} clear={true} onPress={this.clear} />
                            </View>
                        </View>
                    </List.Accordion>
                </List.Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    listSection: {
        borderRadius: 15,
        borderColor: colors.primary,
        borderWidth: 2
    },
    accordionTitle: {
        fontFamily: fonts.openSans.Bold,
        fontSize: 21,
        color: colors.primary
    },
    textInput: {
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 10,
        fontSize: 20,
        backgroundColor: "transparent",
        borderWidth: 1,
        height: 45
    },
    viewCheckboxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: "-10%",
        margin: 5
    },
    label: {
        fontFamily: fonts.openSans.Regular,
        fontSize: 20,
        color: 'black'
    },
});

export default withTranslation("global")(NewsFilters)