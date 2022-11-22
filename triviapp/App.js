import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TriviaStackNavigator } from './src/navigation'

export default function App() {

  return (
    <NavigationContainer>
      {
        (<TriviaStackNavigator />)
      }
    </NavigationContainer>
  );
}
