import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, List, TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';
import { CustomDropdown } from './CustomDropdown';

const list = ["Todos", "BeGreen", "", "", "", "", ""]

export class NewsFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
    }

    handleFocus = () => {
        this.setState({ focused: !this.state.focused });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>NOTICIAS</Text>
                <View style={styles.listAccordion} >
                    <List.Section style={styles.listSection}>
                        <List.Accordion theme={{ colors: { primary: backgroundColor } }} titleStyle={styles.accordionTitle} title="Filtros" left={props => <IconButton {...props} icon="filter" size={30} />}>
                            <TextInput onBlur={() => this.handleFocus()} onFocus={() => this.handleFocus()} left={<TextInput.Icon icon="magnify" color={this.state.focused ? backgroundColor : "grey"} size={30} />} placeholder='Buscar' underlineColor='transparent' activeUnderlineColor="transparent" style={styles.textInput} />
                            <View style={styles.dropdownViews}>
                                <CustomDropdown list={list} />
                                <CustomDropdown/>
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
    title: {
        fontFamily: fontFamily,
        fontSize: 30,
        color: backgroundColor,
        alignSelf: 'center',
        marginTop: 10
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
    dropdownViews: {
        flex: 1,
        flexDirection: 'row'
    }
});