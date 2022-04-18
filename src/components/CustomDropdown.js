import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';


export class CustomDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDropDown: false,
            value: "Todos"
        }
    }

    setValue = (callback) => {
        this.setState(state => ({
            value: callback(state.value)
        }));
    }

    setDropDownState = (state) => {
        this.setState({ showDropDown: state });
    }

    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <AutocompleteInput data={this.props.list} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});