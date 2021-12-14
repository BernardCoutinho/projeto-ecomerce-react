import React, { Component, useState } from "react";
import { TextInput, View } from "react-native";
import {styles} from './styles';
export default function BarraEndereco(){

    const [endereco, setEndereco] = useState(null);

    return(
        <View style={styles.BarraEndereco}>
            <TextInput 
            style={styles.inserirEndereco}
            placeholder={"Insira seu endereço"}
            value={endereco}
            onChangeText={(endereco) => {setEndereco(endereco)}}
            />
        </View>
    )
}