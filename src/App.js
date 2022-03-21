import React, { Component } from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { MainScreen } from './screens/MainScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

class App extends Component {

  login = ({ navigation }) => {
    return <LoginScreen navigation={navigation} />;
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={this.login} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;