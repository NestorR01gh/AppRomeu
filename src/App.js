import React, { Component } from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { StaffScreen } from './screens/StaffScreen';
import { MainScreen } from './screens/MainScreen';
import { EmployeeScreen } from './screens/EmployeeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { News } from './components/News';
import { NewsList } from './components/NewsList';
import { newsList } from './utils/Constants';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator(); <-- EL CREATE DRAWER PETA 

class App extends Component {

  login = ({ navigation }) => {
    return <LoginScreen navigation={navigation} />;
  }

  main = ({navigation}) => {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="MainDrawer" component={MainScreen}/>
        <Drawer.Screen name="Personal" component={StaffScreen}/>
      </Drawer.Navigator>
    );
  }

  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator screenOptions={{ headerShown: false }}>
      //     <Stack.Screen name="Login" component={this.login} />
      //     <Stack.Screen name="Main" component={this.main} />
      //     <Stack.Screen name="Employee" component={EmployeeScreen}/>
      //   </Stack.Navigator>
      // </NavigationContainer>
      <NewsList list={newsList}/>
    );
  }
}


export default App;