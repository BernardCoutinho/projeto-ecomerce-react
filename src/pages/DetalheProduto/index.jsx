import React, {useState, useEffect} from "react";
import {View, Text, Image} from 'react-native';
import axios from "axios";
import { styles } from "./styles";

  export default function DetalheProduto({imagens, nome, valor, route}) {

    const {id} = route.params

    
    return (
    <View style={styles.container}>
          <Image require={{uri: imagens}}/>
          <Text> {nome} </Text>
          <Text> {valor} </Text>
    </View>
  );

}
