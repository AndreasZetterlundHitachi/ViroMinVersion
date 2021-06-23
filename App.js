/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import AR from './screens/AR';
// import Navigator from './routes/homeStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="AR" component={AR} options={{ title: 'AR' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}