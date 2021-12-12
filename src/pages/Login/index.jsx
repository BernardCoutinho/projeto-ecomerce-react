import React from "react";
import {View, Text, TextInput, Linking} from 'react-native';
import {style} from "./styles";
import {Button} from 'react-native-elements';


export default function Login(){

        return(
            <View style={style.container}>
                <View>
                    <Text>português (Brasil)</Text>
                </View>
                <View style={style.container1}>
                     <Text style={style.logo}>App Bebidas</Text>
                </View>
               
                <View style={style.container2}>
                    
                    <TextInput 
                        style={style.inputTxt}
                        placeholder="Número de telefone, email ou nome de usuário"/>
                    <TextInput 
                        style={style.inputTxt}
                        secureTextEntry={true}
                        placeholder="Digite sua senha!"/>
                        <Button buttonStyle={style.botao} title="Login"/>
                </View>   
        
            </View>
        );
    
}