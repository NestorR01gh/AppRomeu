import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { backgroundColor, fontFamily } from './utils/Constants';


class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} resizeMode='cover' source={require('./assets/loginBackgroundImage.jpg')}>
          <View style={styles.cajaLogin}>
            <View style={styles.viewLogo}>
              <Image style={styles.imageLogo} source={require('./assets/logoRomeu.png')} />
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
              <View style={styles.touchableOpacity} >
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
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cajaLogin: {
    backgroundColor: 'white',
    width: "80%",
    height: "60%",
    borderWidth: 2,
    borderColor: backgroundColor
  },
  viewLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewLogin: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  imageLogo: {
    flex: 1,
    margin: 80
  },
  touchableOpacity: {
    flex: 1,
    margin: 5
  },
  button: {
    backgroundColor: backgroundColor
  },
  buttonText: {
    fontSize: 11,
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