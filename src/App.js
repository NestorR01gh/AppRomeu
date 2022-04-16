import 'react-native-gesture-handler';
import React, { Component } from 'react';
import LoginScreen from './screens/LoginScreen';
import { StaffScreen } from './screens/StaffScreen';
import { MainScreen } from './screens/MainScreen';
import EmployeeScreen from './screens/EmployeeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { backgroundColor, fontFamily } from './utils/Constants';
import { DrawerItem } from './components/DrawerItem';
import { LogBox, Text } from 'react-native';
import { Portal, Provider } from 'react-native-paper';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import es from './assets/translations/es/global.json'
import fr from './assets/translations/fr/global.json'
import en from './assets/translations/en/global.json'
import pt from './assets/translations/pt/global.json'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs();
i18next.init({
  compatibilityJSON: 'v3',
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    },
    fr: {
      global: fr
    },
    pt: {
      global: pt
    }
  }
});

class App extends Component {

  login = ({ navigation }) => {
    return <LoginScreen navigation={navigation} />;
  }

  mainScreen = ({ navigation }) => {
    return <MainScreen navigation={navigation} />
  }

  customDrawerContent = ({ navigation }) => {
    return (
      <DrawerContentScrollView style={{ backgroundColor: backgroundColor }}>
        <Text style={{ padding: 20, alignSelf: 'center', fontFamily: fontFamily, color: 'white', fontSize: 40, textDecorationLine: 'underline' }}>MENÚ</Text>
        <DrawerItem icon="home" label="Principal" onPress={() => navigation.navigate('MainDrawer')} />
        <DrawerItem icon="account" label="Personal" onPress={() => navigation.navigate('Staff')} />
      </DrawerContentScrollView>
    );
  }

  main = () => {
    return (
      <Drawer.Navigator useLegacyImplementation={true} drawerContent={this.customDrawerContent} screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="MainDrawer" component={this.mainScreen} />
        <Drawer.Screen name="Staff" component={StaffScreen} />
      </Drawer.Navigator>
    );
  }

  render() {
    return (
      <I18nextProvider i18n={i18next}>
        <Provider>
          <Portal>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={this.login} />
                <Stack.Screen name="Main" component={this.main} />
                <Stack.Screen name="Employee" component={EmployeeScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </Portal>
        </Provider>
      </I18nextProvider>
    );
  }
}


export default App;