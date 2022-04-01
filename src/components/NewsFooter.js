import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { backgroundColor, fontFamily } from '../utils/Constants';
import DropDownPicker from 'react-native-dropdown-picker';

export class NewsFooter extends Component {
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
                <DropDownPicker textStyle={styles.dropDownText} containerStyle={{ width: 80 }} placeholder={this.state.pageSize} open={this.state.showDropDown} value={this.state.pageSize} items={this.state.pageSizes} setOpen={this.setDropDownState} setValue={this.setPageSize} />
                <Text>1-{this.state.pageSize} de 264</Text>
                <View style={styles.buttonsView}>
                    <IconButton onPress={() => this.props.firstPage()} icon="arrow-collapse-left" size={20} color={backgroundColor} />
                    <IconButton onPress={() => this.props.prevPage()} icon="arrow-expand-left" size={20} color={backgroundColor} />
                    <IconButton onPress={() => this.props.nextPage()} icon="arrow-expand-right" size={20} color={backgroundColor} />
                    <IconButton onPress={() => this.props.lastPage()} icon="arrow-collapse-right" size={20} color={backgroundColor} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: backgroundColor,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    dropDownText: {
        fontFamily: fontFamily,
        fontSize: 20
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});