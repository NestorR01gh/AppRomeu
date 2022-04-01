import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, TextInput } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';


export class StaffFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            pageSizes: [{ label: "5", value: 5 }, { label: "10", value: 10 }, { label: "15", value: 15 }],
            showDropDown: false
        }
    }

    setPageSize = (callback) => {
        this.setState(state => ({
            pageSize: callback(state.value)
        }));
    }

    setDropDownState = (state) => {
        this.setState({ showDropDown: state });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterLine}>
                    <TextInput placeholder='Nombre' underlineColor='transparent' activeUnderlineColor='transparent' style={styles.input} />
                    <TextInput keyboardType='numeric' placeholder='Teléfono' underlineColor='transparent' activeUnderlineColor='transparent' style={styles.input} />
                </View>
                <View style={styles.filterLine}>
                    <TextInput placeholder='Posición' underlineColor='transparent' activeUnderlineColor='transparent' style={styles.input} />
                    <DropDownPicker textStyle={styles.dropDownText} containerStyle={styles.dropdown} placeholder={this.state.pageSize} open={this.state.showDropDown} value={this.state.pageSize} items={this.state.pageSizes} setOpen={this.setDropDownState} setValue={this.setPageSize} />
                </View>
                <View style={styles.filterLine}>
                    <DropDownPicker textStyle={styles.dropDownText} containerStyle={styles.dropdown} placeholder={this.state.pageSize} open={this.state.showDropDown} value={this.state.pageSize} items={this.state.pageSizes} setOpen={this.setDropDownState} setValue={this.setPageSize} />
                    <DropDownPicker textStyle={styles.dropDownText} containerStyle={styles.dropdown} placeholder={this.state.pageSize} open={this.state.showDropDown} value={this.state.pageSize} items={this.state.pageSizes} setOpen={this.setDropDownState} setValue={this.setPageSize} />
                </View>
                <View style={styles.filterLine}>
                    <DropDownPicker textStyle={styles.dropDownText} containerStyle={styles.dropdown} placeholder={this.state.pageSize} open={this.state.showDropDown} value={this.state.pageSize} items={this.state.pageSizes} setOpen={this.setDropDownState} setValue={this.setPageSize} />
                    <DropDownPicker textStyle={styles.dropDownText} containerStyle={styles.dropdown} placeholder={this.state.pageSize} open={this.state.showDropDown} value={this.state.pageSize} items={this.state.pageSizes} setOpen={this.setDropDownState} setValue={this.setPageSize} />
                </View>
                <View style={styles.filterLine}>
                    <DropDownPicker textStyle={styles.dropDownText} containerStyle={styles.dropdown} placeholder={this.state.pageSize} open={this.state.showDropDown} value={this.state.pageSize} items={this.state.pageSizes} setOpen={this.setDropDownState} setValue={this.setPageSize} />
                    <View style={styles.buttonView}>
                        <Button color={backgroundColor} labelStyle={styles.buttonLabel} mode='contained' style={styles.button}>Buscar</Button>
                        <Button color='white' labelStyle={styles.buttonLabel} mode='contained' style={styles.button}>Limpiar</Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.75,
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
        margin: 10,
        justifyContent: 'center'
    },
    dropDownText: {
        fontFamily: fontFamily,
        fontSize: 15
    },
    buttonView: {
        flex: 1.10,
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: backgroundColor
    },
    buttonLabel: {
        fontSize: 10
    }
});