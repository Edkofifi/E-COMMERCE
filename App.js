import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/login';
import Home from './Screens/Home';
import cart from './Screens/Cart';

export default function App() {
  const MainNavigator = createStackNavigator()
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
      screenOptions={{headerShown: false}}>
        <MainNavigator.Screen name='Login' component={Login}/>
        <MainNavigator.Screen name='Home' component={Home}/>
        <MainNavigator.Screen name='cart' component={cart}/>
      </MainNavigator.Navigator>
    </NavigationContainer>
    
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
