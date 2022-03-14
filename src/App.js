import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} resizeMode='cover' source={require('./assets/loginBackgroundImage.jpg')}>
          <View style={styles.cajaLogin}>
            <View style={styles.viewLogo}>
              <Image style={styles.imageLogo} source={require('./assets/logoRomeu.png')} />
            </View>
            <View style={styles.viewLogin}>
              <TouchableOpacity style={styles.touchableOpacity} >
                <Button labelStyle={styles.buttonText} style={styles.button} mode='contained'>LOGIN</Button>
              </TouchableOpacity>
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
    height: "60%"
  },
  viewLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogo: {
    height: "50%",
    width: "90%"
  },
  touchableOpacity: {
    width: "80%"
  },
  button: {
    backgroundColor: '#0D1A32'
  },
  buttonText: {
    fontSize: 20
  }
});

export default App;