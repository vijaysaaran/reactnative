/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

export const colos = {
  red: '#FJF'

}

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  

  render() {
    const url = "https://fortunedotcom.files.wordpress.com/2017/01/google.jpeg" 

    return (

      <View style={styles.container}>

        <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', height: 100 }}>
          <Image style={{ width: '100%', height: '100%' }} source={{ uri: url}} />
          {/* <Image style={{ width: '100%', height: '100%' }} source={require("./src/app/assets/images/google.jpeg")} /> */}

        </View>

        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', flexDirection: 'row', height: 100 }}>
          <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center' }}>
            <Text style={{ color: 'blue' }}>First Text</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', height: 100 }}>
            <Text style={{ color: 'blue' }}>First Text</Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', height: 100 }}>
          <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', height: 100 }}>
            <Text style={{ color: 'blue' }}>First Text</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', height: 100 }}>
            <Text style={{ color: 'blue' }}>First Text</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', height: 100 }}>
            <Text style={{ color: 'blue' }}>First Text</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', height: 50}}>
            <Text style={{ color: 'blue' }}>First Text</Text>
          </View>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});