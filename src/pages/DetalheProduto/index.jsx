import React, { useState, useEffect } from "react";
import { Text, Image, TextInput, View} from "react-native";
import { styles } from "./styles";
import Api from "../../service/api"
import  {createItem} from  '../../repository/productRepository';
import { Button } from "react-native-elements";
import BotaoC from "../../components/BotaoC";
import { useNavigation } from '@react-navigation/native';
 
export default function DetalheProduto({route}) {
  const [prod, setProd] = useState([]);
  const [quant, setQuant] = useState();
 

  const navigation = useNavigation();

  const getDatabyId = async () => {
    await Api.get(`/produtos/${id}`).then((response) => {
      setProd(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    getDatabyId();
  }, []);

  const {id} = route.params;
  console.log("id");

  const onClickCreateItem = () => {

    createItem(prod.name, prod.descricao, prod.vlUnitario, prod.vlUnitario, quant);

  };

  const backToHome = ()=>{
      navigation.navigate("Home")
    }

  function verificaQuantidade(text){
      let quantidade = '';
      let numeros = '0123456789';
  
      for (var i=0; i < text.length; i++) {
          if(numeros.indexOf(text[i]) > -1 ) {
              quantidade = quantidade + text[i];
          }
          else {
              setQuant("")
          }
      }
      setQuant(quantidade);
  };
  
  return (

        <View  style={styles.container1}>
        <Image
          style={styles.img}
          source={{ uri: prod.imagens }}
          resizeMode="cover"
          />
          <Text style={styles.nomeP}>{prod.nome}</Text>
          <Text style={styles.preco}>R$ {prod.vlUnitario}</Text>
         <View style={styles.textContainer}>
          <Text> descrição </Text>
          <Text>{prod.descricao}</Text>
         </View>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder={"Insira a quantidade"}
            value={quant}
            onChangeText={verificaQuantidade}
              keyboardType="numeric"
            />
            <Button onPress={backToHome} title={"Voltar para home"}/>
            <BotaoC onPress={onClickCreateItem}/>
          </View>
          

  );
}
