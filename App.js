import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/AppNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <AppNavigator />
      </View>
    </NavigationContainer>
  );
}
