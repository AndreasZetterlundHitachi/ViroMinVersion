import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import AR from '../screens/AR';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: 'Reviews' }} />
          <Stack.Screen name="AR" component={AR} options={{ title: 'Details' }} />
        </Stack.Navigator>
    );
  }