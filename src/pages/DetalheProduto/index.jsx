import React, {useState, useEffect} from "react";
import {View, Text} from 'react-native';
import axios from "axios";
import {style} from "./styles"

export default function DetalheProduto(props) {
    
    return (
    <View>
        <View style={style.container}>
          <Text> {props.imagens}</Text>
          <Text> {props.nome}</Text>
          <Text> {props.imagens}</Text>
        </View>   
    </View>
  );
}
