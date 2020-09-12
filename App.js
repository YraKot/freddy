import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OrederScreens } from './src/screens/OrederScreens';
 
export default function App() {
  return (
    <OrederScreens />
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Text>Open up App.js to start working on your app!</Text>
    //  </View>
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
