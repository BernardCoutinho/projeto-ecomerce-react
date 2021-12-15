import React, {useEffect, useState} from "react";
import {View, ScrollView, SafeAreaView,} from 'react-native';
import {styles} from './style'
import Produtos from '../../components/Produtos'
import {createTable} from '../../repository/productRepository'
  import { StackActions } from '@react-navigation/native';
import {Button} from 'react-native-elements';

export default function Home({navigation}){

 
    const logout = ()=>{
        navigation.dispatch(StackActions.popToTop())
    }
            
          
    
    

    useEffect(()=>{
        // createTable();
    })

    return(
        
        <View>

            <View>
                <Button title={"Logout"} onPress={logout} />
            </View>
            <View style={styles.container}>
                <Produtos />
            </View>
        </View>
    )
}