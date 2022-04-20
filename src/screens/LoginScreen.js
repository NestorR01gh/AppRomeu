import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ButtonDescription } from '../components/ButtonDescription';
import { authorize } from 'react-native-app-auth';
import { backgroundColor, fonts } from '../utils/Constants';
import LoadingModal from '../components/LoadingModal';
import { lang, token } from '../utils/Variables';
import { config } from '../utils/Constants';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showDropDown: false,
            language: 1,
            languages: [{ label: "ES", value: 0 }, { label: "EN", value: 1 }, { label: "FR", value: 2 }, { label: "PT", value: 3 }],
            error: ""
        }
    }

    setLanguage = async (callback) => {
        await this.setState(state => ({
            language: callback(state.value)
        }));
        let language;
        switch (this.state.language) {
            case 0:
                language = "es"
                break;
            case 1:
                language = "en"
                break;
            case 2:
                language = "fr"
                break;
            case 3:
                language = "pt"
                break;
        }
        i18next.changeLanguage(language);
        lang.id = this.state.language + 1;
    }

    setDropDownState = (state) => {
        this.setState({ showDropDown: state });
    }

    async handlePress() {
        this.setState({ loading: true });

        try {
            const result = await authorize(config);
            token.data = result;
            this.setState({ error: "" })
            this.props.navigation.navigate('Main');
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ error: error.toString() })
            this.setState({ loading: false });
            console.error(error);
        }
    }

    render() {
        const { t } = this.props;
        return (
            <View style={styles.container}>
                <LoadingModal animating={this.state.loading} color={backgroundColor} />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                    <DropDownPicker containerStyle={{ width: "22%" }} placeholder={this.state.language - 1} open={this.state.showDropDown} value={this.state.language - 1} items={this.state.languages} setOpen={this.setDropDownState} setValue={this.setLanguage} />
                </View>
                <View style={styles.viewLogo}>
                    <Image style={styles.imageLogo} source={require('../assets/images/login.png')} />
                </View>
                <View style={styles.viewInfo}>
                    <ButtonDescription onPress={() => this.handlePress()} Description={t("loginScreen.description")} ButtonText={t("loginScreen.buttonLabel")} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'red', opacity: this.state.error != "" ? 1 : 0, fontFamily: fonts.openSansItalic, fontSize: 15 }}>{this.state.error}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    viewLogo: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLogo: {
        height: 150,
        width: 250,
        resizeMode: 'contain'
    },
    viewInfo: {
        flex: 1,
        paddingBottom: 30
    },
    listItem: {
        borderRadius: 7
    }
});

export default withTranslation("global")(LoginScreen);