import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TriviaStack } from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      {
        (<TriviaStack />)
      }
    </NavigationContainer>
    );
}
