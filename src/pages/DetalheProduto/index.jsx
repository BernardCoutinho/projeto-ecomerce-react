import React, { useState, useEffect } from "react";
import { Text, Image } from "react-native";
import { styles } from "./styles";
import CustomButton from "../../components/Button";
import { TouchableOpacity } from "react-native-web";
import Api from "../../service/api"
import  {createItem} from  '../../repository/productRepository';

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
          resizeMode="center"
          />
          <Text style={styles.nomeP}>{prod.nome}</Text>
          <Text>R$ {prod.vlUnitario}</Text>
          <Text> descrição </Text>
          <Text>{prod.descricao}</Text>
          <TextInput type={Number}
            style={styles.inserirQuantidade}
            placeholder={"Insira seu endereço"}
            value={quantidade}
            onChangeText={(value) => {
              setQuant(value)}}
            />
          <CustomButton onPress={onHandleClick} title="Adicionar ao Carrinho" />
          </TouchableOpacity>

  );
}
