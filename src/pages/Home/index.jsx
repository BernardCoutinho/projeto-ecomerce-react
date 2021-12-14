import React, {useEffect, useState} from "react";
import {View, ScrollView, SafeAreaView,} from 'react-native';
import {styles} from './style'
import Produtos from '../../components/Produtos'
import {createTable} from '../../repository/productRepository'

import {Button} from 'react-native-elements';
export default function Home(){



    useEffect(()=>{
        createTable();
    })

    return(
        
        <SafeAreaView>
            <View style={styles.container}>
                <Produtos />
            </View>
        </SafeAreaView>
    )
}