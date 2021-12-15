import React, { useState, useEffect } from "react";
import { Text, Image, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import Api from "../../service/api"
import  {createItem} from  '../../repository/productRepository';
import BotaoC from "../../components/BotaoC";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

export default function DetalheProduto({ route }) {
  const [prod, setProd] = useState([]);
  const [quant, setQuant] = useState(null);

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

  const { id } = route.params;
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
    <View style={styles.containerPage}> 
          <View style={styles.header}>
            <Image
              style={styles.headerimg}
              source={require("../../../assets/kermit.jpeg")}
              />
            </View>
        <View style={styles.container1}>
            <View style={styles.detalhe}>
              <View style={styles.imgcontainer}>
                <Image
                  style={styles.img}
                  source={{ uri: prod.imagens }}
                  resizeMode="cover"
                  />
              </View>
              <View style={styles.textContainer}>
              <View style={styles.circlecontainer}>
                  <Image
                    style={styles.circle}
                    source={require("../../../assets/circle.png")}
                    />
                  </View>
                <Text style={styles.nome}>{prod.nome}</Text>
                <Text style={styles.descricao}>{prod.descricao}</Text>
                  <View style={styles.ratingcontainer}>
                  <Image
                    style={styles.rating}
                    source={require("../../../assets/rating.png")}
                    />
                  </View>
                <Text style={styles.preco}>R$ {prod.vlUnitario}</Text>
                <TextInput type={Number}
                  style={styles.input}
                  placeholder={"1"}
                  value={quant}
                  onChangeText={verificaQuantidade}
                    keyboardType="numeric"
                  />
              </View>
            </View>
              <BotaoC onPress={onClickCreateItem}/>
          </View>
    </View>
          

  );
}
