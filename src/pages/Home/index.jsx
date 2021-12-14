import React, {useState} from "react";
import {View, ScrollView, SafeAreaView,} from 'react-native';
import {styles} from './style'
import Produtos from '../../components/Produtos'

import {Button} from 'react-native-elements';
export default function Home(){

    const [getEndereco, setEndereco] = useState([]);

    return(
        
        <SafeAreaView>
            <ScrollView>
                <Produtos />
            </ScrollView>
        </SafeAreaView>
    )
}