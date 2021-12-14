import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { styles } from "./styles";
<<<<<<< HEAD
import Api from "../../service/api"
import { Button } from "react-native-elements";
import  {createItem} from  '../../repository/productRepository';


  export default function DetalheProduto({route}) {

    const [prod, setProd] = useState([]);
    const [quant, setQuant] = useState(null);
    const getDatabyId = async () => {
      await  Api.get(`/produtos/${id}`).then((response) =>{
        setProd(response.data)
        console.log(response.data)
      } ) 
    };

      useEffect(() =>{
        getDatabyId();
      }, [])

    const {id} = route.params
    console.log("id",)

    

   const onHandleClick = async () => { 
      await createItem(prod.name, prod.descricao, prod.vlUnitario, prod.vlUnitario, quant)
    
   }
    
    return (
      <View style={styles.container1}>
        <View>
           <View>
             <Image style={{width: 200, height: 200  }} source ={{uri: prod.imagens}} resizeMode="cover"/>
          </View>
          <View style={styles.container1}>
            
            <Text> nome = {prod.nome} </Text>
            <Text> valor = {prod.vlUnitario} </Text>
            <View>
            <TextInput type={Number}
            style={styles.inserirQuantidade}
            placeholder={"Insira seu endereço"}
            value={quantidade}
            onChangeText={(value) => {
              setQuant(value)}}
            />
        </View>
            <Button title="adicionar" onPress={onHandleClick}/>
          </View>
        </View>
      </View>
   
=======
import Api from "../../service/api";
import { createItem } from "../../repository/productRepository";
import CustomButton from "../../components/Button";
import { TouchableOpacity } from "react-native-web";

export default function DetalheProduto({ route }) {
  const [prod, setProd] = useState([]);
  const getDatabyId = async () => {
    await Api.get(`/produtos/${id}`).then((response) => {
      setProd(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    getDatabyId();
  }, []);

  const { id } = route.params;
  console.log("id");

  const onHandleClick = () => {
    createItem(prod.name, prod.descricao, prod.vlUnitario, prod.vlUnitario);
  };

  return (

        <TouchableOpacity style={styles.container1}>
        <Image
          style={styles.img}
          source={{ uri: prod.imagens }}
          resizeMode="center"
          />
          <Text style={styles.nomeP}>{prod.nome}</Text>
          <Text>R$ {prod.vlUnitario}</Text>
          <Text> descrição </Text>
          <Text>{prod.descricao}</Text>
          <CustomButton title="Adicionar ao Carrinho" />
          </TouchableOpacity>
>>>>>>> 578a4394faa12cff247ff60e775e8226e8f3888c
  );
}
