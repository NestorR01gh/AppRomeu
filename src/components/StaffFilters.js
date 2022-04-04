import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';

export class StaffFilters extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterLine}>
                    <TextInput placeholder='Nombre' underlineColor='transparent' activeUnderlineColor='transparent' style={styles.input} />
                </View>
                <KeyboardAvoidingView keyboardVerticalOffset={-1000}  style={styles.buttonView}>
                    <TouchableHighlight style={styles.buttonSearch}><Text style={styles.buttonLabelSearch}>Buscar</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.buttonClean}><Text style={styles.buttonLabelClean}>Limpiar</Text></TouchableHighlight>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2 ,
        padding: 7
    },
    filterLine: {
        flex: 1,
        flexDirection: 'row',
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
        justifyContent: 'center'
    },
    dropdown: {
        flex: 1,
        color: backgroundColor,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    dropDownText: {
        fontFamily: fontFamily,
        fontSize: 15
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonSearch: {
        margin: 5,
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: backgroundColor,
        padding: 10,
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
    buttonLabelSearch: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonLabelClean: {
        fontSize: 16,
        fontWeight: 'bold',
        color: backgroundColor
    }
});