import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/auth';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {
  return (
    <AuthProvider>

      <NavigationContainer>
        <StatusBar
          backgroundColor="#38A69D"
          barStyle="light-content"
        />
        <Routes />
      </NavigationContainer>
      
    </AuthProvider>
  );
}
