import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { styles } from "./styles";
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
  );
}
