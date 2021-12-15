import React, {useState} from "react";
import {View, Text, TextInput, SafeAreaView, Image,  TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import  beer from "../../../assets/beer.jpeg"

export default function Login({navigation}){

    const senhaCerta = '12345';
    const emailCerto = 'User'
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erro, setError] = useState(false);

    
    const validar = () =>{
        if(senha == senhaCerta && email == emailCerto){
            navigation.navigate("Logout")
        }else{
            setError(true);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
    
          <View style={styles.container}>
    
            <View style={styles.FotoTelaInicial}>
              <Image
                source={require("../../../assets/cacildis-logo.jpeg")}
                style={{
                  width: 250,
                  height: 280,
                }} />
            </View>
    
    
             <View style={styles.sectionStyle}>
              <Image
                source={require("../../../assets/beer.jpeg")}
                style={styles.imageStyle} />
              <TextInput
                style={styles.inputTxt}
                placeholder="Número de telefone, email ou nome de usuário"
                value={email}
                onChangeText={(value) => {setEmail(value)}}
                underlineColorAndroid="transparent" />
            </View>
            <View style={styles.sectionStyle}>
              <Image
                source={require(("../../../assets/beer.jpeg"))}
                style={styles.imageStyle} />
              <TextInput
                style={styles.inputTxt}
                secureTextEntry={true}
                placeholder="Digite sua senha!"
                value={senha}
                onChangeText={(value) => {setSenha(value)}}
                underlineColorAndroid="transparent" />
               
                {erro && <Text> Tá errado isso hein </Text>} 
            </View>
                   
    
            <View style={styles.container2}></View>
            <TouchableOpacity onPress ={()=> validar()} style={styles.buttonCervaStyle} activeOpacity={0.5}>
              <Image
                source={require(("../../../assets/beer.jpeg"))}
                style={styles.buttonImageIconStyle} />
              <View style={styles.buttonIconSeparatorStyle} />
              <Text style={styles.buttonTextStyle}>Entrar</Text>
    
            </TouchableOpacity> 
          </View>
        </SafeAreaView>
      );
    }