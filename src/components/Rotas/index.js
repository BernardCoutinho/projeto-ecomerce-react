import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carrinho from '../../pages/Carrinho';
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import DetalheProduto from '../../pages/DetalheProduto';
import Logout from '../../pages/Logout';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

 function Tabs() {
 

  return (
    <Tab.Navigator  initialRouteName="Home" screenOptions={ {tabBarVisible: false}}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
     <Tab.Screen name="Carrinho" component={Carrinho}/>
     <Tab.Screen name="Logout" component={Logout}/>
    </Tab.Navigator>
    
  );
}

export const Routes = () =>{
  
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name={"Login"} component={Login} />
      <Stack.Screen options={{headerShown: false}} name={"Tabs"} component={Tabs} />
      <Stack.Screen options={{headerShown: false}} name={"Detalhe"} component={DetalheProduto} />
    </Stack.Navigator> 
  );
}