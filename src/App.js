import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { StaffScreen } from './screens/StaffScreen';
import { MainScreen } from './screens/MainScreen';
import { EmployeeScreen } from './screens/EmployeeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { backgroundColor, fontFamily } from './utils/Constants';
import { DrawerItem } from './components/DrawerItem';
import { LogBox, Text } from 'react-native';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs();

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
        <DrawerItem icon="account" label="Staff" onPress={() => navigation.navigate('Staff')} />
      </DrawerContentScrollView>
    );
  }

  main = ({ navigation }) => {
    return (
      <Drawer.Navigator useLegacyImplementation={true} drawerContent={this.customDrawerContent} screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="MainDrawer" component={this.mainScreen} />
        <Drawer.Screen name="Staff" component={StaffScreen} />
      </Drawer.Navigator>
    );
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={this.login} />
          <Stack.Screen name="Main" component={this.main} />
          <Stack.Screen name="Employee" component={EmployeeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;