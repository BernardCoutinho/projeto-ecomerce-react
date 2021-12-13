import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {styles} from './style'
import BarraEndereco from "../../components/BarraEndereco";
import Produtos from '../../components/Produtos'

import {Button} from 'react-native-elements';
export default function Home(){

    const [getEndereco, setEndereco] = useState([]);

    return(
        <View style={styles.container} >
            
            <View>
                <Produtos />
            </View>
        </View>
           


    )
}