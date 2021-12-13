import React, {useState} from "react";
import {View, Text, TextInput, Linking} from 'react-native';
import {style} from "./styles";
import {Button} from 'react-native-elements';



export default function Login({navigation}){

    const senhaCerta = '12345';
    const emailCerto = 'batatinha@12345'
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    
    const validar = () =>{
        if(senha == senhaCerta && email == emailCerto){
            navigation.navigate("Tabs")
        }


    }
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
                        placeholder="Número de telefone, email ou nome de usuário"
                        value={email}
                        onChangeText={(value) => {setEmail(value)}}/>
                    <TextInput 
                        style={style.inputTxt}
                        secureTextEntry={true}
                        placeholder="Digite sua senha!"
                        value={senha}
                        onChangeText={(value) => {setSenha(value)}} />
                       
                        <Button 
                        onPress={() => validar()}
                        buttonStyle={style.botao} 
                        title="Login"
                        />
                </View>   
        
            </View>
        );
    
}