import React, { useState, useEffect } from "react";
import { Text, Image, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import Api from "../../service/api"
import  {createItem} from  '../../repository/productRepository';
import ButtonC from "../../components/Buttoncar";



export default function DetalheProduto({ route }) {
  const [prod, setProd] = useState([]);
  const [quant, setQuant] = useState(null);
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

    createItem(prod.name, prod.descricao, prod.vlUnitario, prod.vlUnitario, quant);

  };
  

  return (

        <TouchableOpacity style={styles.container1}>
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
          <TextInput type={Number}
            style={styles.input}
            placeholder={"Insira a quantidade"}
            value={quant}
            onChangeText={(value) => {
              setQuant(value)}}
              keyboardType="numeric"
            />
            <ButtonC onPress={onHandleClick}/>
          </TouchableOpacity>
          

  );
}
