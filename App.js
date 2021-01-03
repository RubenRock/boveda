import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './screens/listanotas'

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />      
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
});
