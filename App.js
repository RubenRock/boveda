import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.barra}>

      </View>
      <Login />      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  barra:{
    backgroundColor:'rgba(155, 255, 155, 0.4)',
    height:30,
  }
});
