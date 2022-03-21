import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, List } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';


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
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Menu visible={this.state.showDropDown} onDismiss={() => this.setDropDownState(false)} anchor={<Button onPress={() => this.setDropDownState(true)}>{this.state.language}</Button>}>
                    <Menu.Item onPress={() => this.setLanguage("es")} title="ES" />
                    <Menu.Item onPress={() => this.setLanguage("en")} title="EN" />
                    <Menu.Item onPress={() => this.setLanguage("fr")} title="FR" />
                    <Menu.Item onPress={() => this.setLanguage("pt")} title="PT" />
                </Menu>
                <List.Section style={{ width: 140, margin: 10 }}>
                    <List.Accordion style={{ height: 50, justifyContent: 'center', backgroundColor: '#fafafa', borderRadius: 7 }} titleStyle={{ textAlign: 'right' }} title={this.state.language.toUpperCase()} right={() => <List.Icon icon="arrow-down-drop-circle" />}>
                        <View style={{ borderWidth: 1 }}>
                            <List.Item style={styles.listItem} title="ES" onPress={() => this.setLanguage("ES")} />
                            <List.Item style={styles.listItem} title="EN" onPress={() => this.setLanguage("EN")} />
                            <List.Item style={styles.listItem} title="FR" onPress={() => this.setLanguage("FR")} />
                            <List.Item style={styles.listItem} title="PT" onPress={() => this.setLanguage("PT")} />
                        </View>
                    </List.Accordion>
                </List.Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cajaLogin: {
        flex: 1,
    },
    viewLogin: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 70
    },
    touchableOpacity: {
        flex: 1,
        padding: 10
    },
    button: {
        backgroundColor: backgroundColor
    },
    buttonText: {
        fontSize: 14,
        fontFamily: fontFamily
    },
    viewInfo: {
        flex: 0,
        flexDirection: 'row'
    },
    textView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10
    },
    text: {
        textAlign: 'center',
        fontFamily: fontFamily
    }
});