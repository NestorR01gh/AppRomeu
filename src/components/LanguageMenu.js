import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, List } from 'react-native-paper';
import { colors, fonts } from '../utils/Constants';


export class LanguageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false,
            language: "es"
        }
    }

    setDropDownState = (state) => {
        this.setState({ showDropDown: state });
    }

    setLanguage = (value) => {
        this.setState({ language: value });
        this.setDropDownState(false);
    }

    render() {
        return (
            <View style={styles.container}>
                <Menu visible={this.state.showDropDown} onDismiss={() => this.setDropDownState(false)} anchor={<Button onPress={() => this.setDropDownState(true)}>{this.state.language}</Button>}>
                    <Menu.Item onPress={() => this.setLanguage("es")} title="ES" />
                    <Menu.Item onPress={() => this.setLanguage("en")} title="EN" />
                    <Menu.Item onPress={() => this.setLanguage("fr")} title="FR" />
                    <Menu.Item onPress={() => this.setLanguage("pt")} title="PT" />
                </Menu>
                <List.Section style={styles.listSection}>
                    <List.Accordion style={styles.listAccordion} titleStyle={{ textAlign: 'right' }} title={this.state.language.toUpperCase()} right={() => <List.Icon icon="arrow-down-drop-circle" />}>
                        <View style={{ borderWidth: 1 }}>
                            <List.Item title="ES" onPress={() => this.setLanguage("ES")} />
                            <List.Item title="EN" onPress={() => this.setLanguage("EN")} />
                            <List.Item title="FR" onPress={() => this.setLanguage("FR")} />
                            <List.Item title="PT" onPress={() => this.setLanguage("PT")} />
                        </View>
                    </List.Accordion>
                </List.Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    listSection: {
        width: 140,
        margin: 10
    },
    listAccordion: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        borderRadius: 7
    }
});