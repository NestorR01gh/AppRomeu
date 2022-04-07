import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox, IconButton, List, TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class NewsFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            search: ""
        }
    }

    handleFocus = () => {
        this.setState({ focused: !this.state.focused });
    }

    handleRead = () => {
        this.props.handleRead();
    }

    handleSigned = () => {
        this.props.handleSigned();
    }

    handleChangeText = (text) => {
        this.setState({ search: text })
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.search);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listAccordion} >
                    <List.Section style={styles.listSection}>
                        <List.Accordion theme={{ colors: { primary: backgroundColor } }} titleStyle={styles.accordionTitle} title="Filtros" left={props => <IconButton {...props} icon="filter" size={30} />}>
                            <TextInput onSubmitEditing={() => this.handleSearch} onChangeText={this.handleChangeText} onBlur={() => this.handleFocus()} onFocus={() => this.handleFocus()} left={<TextInput.Icon icon="magnify" color={this.state.focused ? backgroundColor : "grey"} size={30} />} placeholder='Buscar' underlineColor='transparent' activeUnderlineColor="transparent" style={styles.textInput} />
                            <View style={styles.viewCheckboxes}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={styles.label}>No leído: </Text>
                                    <Checkbox color={backgroundColor} onPress={() => this.handleRead()} status={this.props.read ? 'checked' : 'unchecked'} />
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={styles.label}>No firmado: </Text>
                                    <Checkbox color={backgroundColor} onPress={() => this.handleSigned()} status={this.props.signed ? 'checked' : 'unchecked'} />
                                </View>
                            </View>
                        </List.Accordion>
                    </List.Section>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    listAccordion: {
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
    }
});