import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { StaffScreen } from './screens/StaffScreen';
import { MainScreen } from './screens/MainScreen';
import { EmployeeScreen } from './screens/EmployeeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {

  login = ({ navigation }) => {
    return <LoginScreen navigation={navigation} />;
  }

  mainScreen = ({ navigation }) => {
    return <MainScreen navigation={navigation} />
  }

  main = ({ navigation }) => {
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Principal" component={this.mainScreen} />
        <Drawer.Screen name="Personal" component={StaffScreen} />
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