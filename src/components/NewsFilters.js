import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox, IconButton, List, TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class NewsFilters extends Component {
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
        await this.setState({ search: "" });
        this.props.handleSearch(this.state.search);
        this.toggleExpanded();
    }

    toggleExpanded = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listAccordion} >
                    <List.Section style={styles.listSection}>
                        <List.Accordion onPress={this.toggleExpanded} expanded={this.state.expanded} theme={{ colors: { primary: backgroundColor } }} titleStyle={styles.accordionTitle} title="Filtros" left={props => <IconButton {...props} icon="filter" size={30} />}>
                            <TextInput value={this.state.search} onSubmitEditing={this.handleSearch} onChangeText={this.handleChangeText} right={<TextInput.Icon onPress={this.clear} icon="window-close" color={backgroundColor} size={30} />} left={<TextInput.Icon icon="magnify" color={backgroundColor} size={30} />} placeholder='Buscar' underlineColor='transparent' activeUnderlineColor="transparent" style={styles.textInput} />
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