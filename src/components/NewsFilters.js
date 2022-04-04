import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox, IconButton, List, TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class NewsFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            checked: false
        }
    }

    handleFocus = () => {
        this.setState({ focused: !this.state.focused });
    }

    handleCheck = () => {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listAccordion} >
                    <List.Section style={styles.listSection}>
                        <List.Accordion theme={{ colors: { primary: backgroundColor } }} titleStyle={styles.accordionTitle} title="Filtros" left={props => <IconButton {...props} icon="filter" size={30} />}>
                            <TextInput onBlur={() => this.handleFocus()} onFocus={() => this.handleFocus()} left={<TextInput.Icon icon="magnify" color={this.state.focused ? backgroundColor : "grey"} size={30} />} placeholder='Buscar' underlineColor='transparent' activeUnderlineColor="transparent" style={styles.textInput} />
                            <View style={styles.viewRead}>
                                <Text style={styles.label}>Leído: </Text>
                                <Checkbox color={backgroundColor} onPress={() => this.handleCheck()} status={this.state.checked ? 'checked' : 'unchecked'} />
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
    viewRead: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontFamily: fontFamily,
        fontSize: 20
    }
});