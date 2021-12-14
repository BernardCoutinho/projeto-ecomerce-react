import React, {useState, useEffect} from "react";
import {View, Text, Image} from 'react-native';
import axios from "axios";
import { styles } from "./styles";
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
   
  );

}
