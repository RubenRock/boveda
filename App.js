import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login'

export default function App() {
  return (
    <View style={styles.container}>  
    <View style={styles.barra}>
    </View>
      <StatusBar backgroundColor='rgba(155, 255, 155, 0.4)' style='auto' />     
      <Login />            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',   
  },
  barra:{    
    height:45,
  }
 
});
