import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Carrinho from './src/pages/Carrinho';
import Login from './src/pages/Login'


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
    <Tab.Navigator  initialRouteName="Login">
      <Tab.Screen name="Login" component={Login}/>
    <Tab.Screen name="Carrinho" component={Carrinho}/>
        <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>

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
