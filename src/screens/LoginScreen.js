import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { ButtonDescription } from '../components/ButtonDescription';
import { authorize } from 'react-native-app-auth';
import { colors, fonts } from '../utils/Constants';
import LoadingModal from '../components/LoadingModal';
import { lang, token } from '../utils/Variables';
import { identityConfig } from '../utils/Constants';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LocalStorage } from '../utils/LocalStorage'
import { LangSelector } from '../components/LangSelector';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            language: 0,
            languages: [{ label: "ES", value: 0 }, { label: "EN", value: 1 }, { label: "FR", value: 2 }, { label: "PT", value: 3 }],
            error: ""
        }
    }

    componentDidMount = async () => {
        await this.loadLanguage();
    }

    loadLanguage = async () => {
        let lang = await LocalStorage.getData("languageId");
        if (lang == undefined) {
            await LocalStorage.storeData("languageId", "0");
            lang = 0;
        }
        lang = parseInt(lang);
        await this.setState({ language: lang });
        this.handleLanguageChange();
    }

    handleLanguageChange = async () => {
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
            default:
                language = "es";
        }
        await LocalStorage.storeData("languageId", this.state.language.toString())
        i18next.changeLanguage(language);
        lang.id = this.state.language + 1;
    }

    setLanguage = async (lang) => {
        await this.setState({ language: lang });
        this.handleLanguageChange();
    }

    async handlePress() {
        this.setState({ loading: true });

        try {
            const result = await authorize(identityConfig);
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
                <LoadingModal animating={this.state.loading} color={colors.primary} />
                <View style={styles.viewLanguage}>
                    <LangSelector setLanguage={this.setLanguage} lang={this.state.language} />
                </View>
                <View style={styles.viewLogo}>
                    <Image style={styles.imageLogo} source={require('../assets/images/login.png')} />
                </View>
                <View style={styles.viewInfo}>
                    <ButtonDescription onPress={() => this.handlePress()} Description={t("loginScreen.description")} ButtonText={t("loginScreen.buttonLabel")} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'red', opacity: this.state.error != "" ? 1 : 0, fontFamily: fonts.openSans.Italic, fontSize: 15 }}>{this.state.error}</Text>
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
    },
    viewLanguage: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20
    },
});

export default withTranslation("global")(LoginScreen);