import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, {useState} from "react";
import {View, Text, TextInput, SafeAreaView, Image,  TouchableOpacity} from 'react-native';
import { styles } from "./styles";


export default function Login({navigation}){

  const emailCerto = '';
  const senhaCerta = '';
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erro, setError] = useState(false);

    
    const validar = () =>{
        if(senha == senhaCerta && email == emailCerto){
            navigation.navigate("Tabs")
        }else{
            setError(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.FotoTelaInicial}>
              <Image
                source={require("../../../assets/cacilds.jpeg")}
                style={styles.FotoTelaInicial} />
            </View>
            <View style={styles.containerInput}>
              <View style={styles.text}>
                <Text style={styles.logo}>Birits</Text>
                <Text style={styles.login}>Login</Text>
              </View>
              <View style={styles.inputStyle}>
                <FontAwesomeIcon icon={faBeer}/>
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Número de telefone, email ou nome de usuário"
                  value={email}
                  onChangeText={(value) => {setEmail(value)}}
                  underlineColorAndroid="transparent" />
              </View>
              <View style={styles.inputStyle}>
                <FontAwesomeIcon icon={faBeer}/>
                <TextInput
                  style={styles.inputTxt}
                  secureTextEntry={true}
                  placeholder="Digite sua senha!"
                  value={senha}
                  onChangeText={(value) => {setSenha(value)}}
                  underlineColorAndroid="transparent" />
                  {erro && <Text> Tá erradis! </Text>} 
              </View>
                <TouchableOpacity onPress ={()=> validar()} style={styles.buttonCervaStyle} activeOpacity={0.5}>
                  <Text style={styles.buttonTextStyle}>Entrar</Text>
                </TouchableOpacity> 
            </View>
          </View>
        </SafeAreaView>
      );
    }