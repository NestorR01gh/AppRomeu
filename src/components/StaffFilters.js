import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

class StaffFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    clear = async () => {
        await this.setState({ search: "" });
        this.props.handleSearch(this.state.search);
    }

    setInputValue = (value) => {
        this.setState({ search: value });
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.search);
    }

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.filterLine}>
                    <TextInput onSubmitEditing={() => this.handleSearch()} left={<TextInput.Icon icon="magnify" size={30} />} onChangeText={this.setInputValue} placeholder={t("staffScreen.placeholder")} underlineColor='transparent' activeUnderlineColor='transparent' style={styles.input} value={this.state.search} />
                    <TouchableOpacity onPress={() => this.clear()} style={styles.buttonClean}>
                        <Text style={styles.buttonLabelClean}>{t("mainScreen.filters.buttonLabel")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        padding: 7,
        borderBottomWidth: 2,
        borderBottomColor: backgroundColor
    },
    filterLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        fontFamily: fontFamily,
        borderWidth: 1,
        borderColor: backgroundColor,
        color: backgroundColor,
        margin: 10,
        height: 50
    },
    buttonClean: {
        margin: 5,
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: backgroundColor,
        padding: 10,
        backgroundColor: 'white',
        height: 50
    },
    buttonLabelClean: {
        fontSize: 16,
        fontWeight: 'bold',
        color: backgroundColor
    }
});

export default withTranslation("global")(StaffFilters)