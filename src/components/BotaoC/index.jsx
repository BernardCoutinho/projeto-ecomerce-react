import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function BotaoC() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>Adicionar ao <FontAwesomeIcon icon={faShoppingCart} size={20} color="black" /></Text>
    </TouchableOpacity>
  );
}
