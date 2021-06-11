import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar/NavBar'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
