import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox, IconButton, List, TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';
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
                    <List.Accordion onPress={this.toggleExpanded} expanded={this.state.expanded} theme={{ colors: { primary: backgroundColor } }} titleStyle={styles.accordionTitle} title={t("mainScreen.filters.title")} left={props => <IconButton {...props} icon={this.state.expanded ? "filter" : "filter-outline"} size={30} color={backgroundColor} />}>
                        <TextInput value={this.state.search} onSubmitEditing={this.handleSearch} onChangeText={this.handleChangeText} left={<TextInput.Icon icon="magnify" color={backgroundColor} size={30} />} placeholder={t("mainScreen.filters.placeholder")} underlineColor='transparent' activeUnderlineColor="transparent" style={styles.textInput} />
                        <View style={styles.viewCheckboxes}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={styles.label}>{t("mainScreen.filters.notRead")}: </Text>
                                <Checkbox color={backgroundColor} onPress={() => this.handleRead()} status={this.props.read ? 'checked' : 'unchecked'} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={styles.label}>{t("mainScreen.filters.notSigned")}: </Text>
                                <Checkbox color={backgroundColor} onPress={() => this.handleSigned()} status={this.props.signed ? 'checked' : 'unchecked'} />
                            </View>
                        </View>
                        <CustomButton label={t("mainScreen.filters.buttonLabel")} clear={true} onPress={this.clear}/>
                    </List.Accordion>
                </List.Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        borderColor: backgroundColor,
        borderWidth: 2,
        margin: 10
    },
    listSection: {
        margin: 5,
    },
    accordionTitle: {
        fontFamily: fontFamily,
        fontSize: 20
    },
    textInput: {
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: 10,
        fontFamily: fontFamily,
        fontSize: 20
    },
    viewCheckboxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: -40
    },
    label: {
        fontFamily: fontFamily,
        fontSize: 20
    },
});

export default withTranslation("global")(NewsFilters)