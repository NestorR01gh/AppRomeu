import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { langImages } from '../utils/Constants';

export class LangSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: langImages[this.props.lang],
            lang: this.props.lang
        }
    }

    nextLang = () => {
        if (this.props.lang == (langImages.length - 1)) {
            this.setState({ image: langImages[0] });
            this.props.setLanguage(0);
        } else {
            this.setState({ image: langImages[this.props.lang + 1] });
            this.props.setLanguage(this.props.lang + 1);
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.nextLang()}>
                <Image source={this.state.image} style={{ height: 40, width: 80 }} />
            </TouchableOpacity>
        );
    }
}