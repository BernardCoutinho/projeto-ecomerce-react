import React, {useEffect, useState} from "react";
import {View, ScrollView, SafeAreaView,} from 'react-native';
import {styles} from './style'
import Produtos from '../../components/Produtos'
import {createTable} from '../../repository/productRepository'

export default function Home(){



    useEffect(()=>{
        createTable();
    })

    return(
        <Produtos />
    )
}