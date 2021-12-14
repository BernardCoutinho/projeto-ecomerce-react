import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './src/components/Rotas'
import { NavigationContainer } from '@react-navigation/native';
import { createTable } from './src/repository/productRepository';
import DetalheProduto from './src/pages/DetalheProduto';


export default function App() {

  // useEffect( async () =>{
  //   createTable();

  // },[])
  return (
    <NavigationContainer>
    <Routes />
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
