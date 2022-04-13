import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class StaffFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    clean = () => {
        this.setState({ search: "" });
        this.props.handleSearch(this.state.search);
    }

    setInputValue = (value) => {
        this.setState({ search: value });
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.search);
    }  

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterLine}>
                    <TextInput onSubmitEditing={this.handleSearch} left={<TextInput.Icon icon="magnify" size={30} />} onChangeText={this.setInputValue} placeholder='Nombre' underlineColor='transparent' activeUnderlineColor='transparent' style={styles.input} value={this.state.search} />
                    <TouchableHighlight onPress={() => this.clean()} style={styles.buttonClean}><Text style={styles.buttonLabelClean}>Limpiar</Text></TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        padding: 7
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