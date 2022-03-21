import React, { Component } from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { MainScreen } from './screens/MainScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StaffScreen } from './screens/StaffScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {

  login = ({ navigation }) => {
    return <LoginScreen navigation={navigation} />;
  }

  main = () => {
    return (
      <Drawer.Navigator initialRouteName='MainDrawer'>
        <Drawer.Screen name="MainDrawer" component={MainScreen} />
        <Drawer.Screen name="StaffDrawer" component={StaffScreen} />
      </Drawer.Navigator>
    );
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={this.login} />
          <Stack.Screen name="MainStack" component={this.main} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;