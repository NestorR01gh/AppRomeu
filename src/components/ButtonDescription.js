import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';


export class ButtonDescription extends Component {
    render() {
        return (
            <View style={styles.cajaLogin}>
                <View style={styles.viewInfo}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>{this.props.Description}</Text>
                    </View>
                </View>
                <View style={styles.viewLogin}>
                    <View style={styles.touchableOpacity}>
                        <TouchableOpacity>
                            <Button labelStyle={styles.buttonText} style={styles.button} mode='contained'>{this.props.ButtonText}</Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cajaLogin: {
        flex: 1,
        backgroundColor: 'white',
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