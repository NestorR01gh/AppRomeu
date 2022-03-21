import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { backgroundColor, fontFamily } from './utils/Constants';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cajaLogin}>
          <View style={styles.viewLogo}>
            <Image style={styles.imageLogo} source={require('./assets/images/logoRomeu.png')} />
          </View>
          <View style={styles.viewInfo}>
            <View style={styles.textView}>
              <Text style={styles.text}>Login for external employees</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Login for GRM employees</Text>
            </View>
          </View>
          <View style={styles.viewLogin}>
            <View style={styles.touchableOpacity}>
              <TouchableOpacity>
                <Button labelStyle={styles.buttonText} style={styles.button} mode='contained'>EXTERNAL LOGIN</Button>
              </TouchableOpacity>
            </View>
            <View style={styles.touchableOpacity} >
              <TouchableOpacity>
                <Button labelStyle={styles.buttonText} style={styles.button} mode='contained'>ROMEU LOGIN</Button>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cajaLogin: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: backgroundColor
  },
  viewLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogin: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 70
  },
  imageLogo: {
    height: 150,
    width: 250,
    resizeMode: 'contain'
  },
  touchableOpacity: {
    flex: 1,
    margin: 5
  },
  button: {
    backgroundColor: backgroundColor
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontFamily
  },
  viewInfo: {
    flex: 0,
    flexDirection: 'row'
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily
  }
});

export default App;