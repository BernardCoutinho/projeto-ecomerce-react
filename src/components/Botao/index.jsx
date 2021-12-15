import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export default function Botao(props) {

  return (
    <TouchableOpacity
      style={styles.container}>
      <Text style={styles.txt}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}
