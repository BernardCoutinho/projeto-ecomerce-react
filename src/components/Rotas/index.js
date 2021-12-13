import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carrinho from '../../pages/Carrinho';
import Home from '../../pages/Home'


export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator  initialRouteName="Home" screenOptions={ {tabBarVisible: false}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarVisible: false}}/>
    <Tab.Screen name="Carrinho" component={Carrinho}/>
    </Tab.Navigator>
    
  );
}