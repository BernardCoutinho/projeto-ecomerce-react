import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';

export default function ButtonCar({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={style ? style : styles.container}
      onPress={onPress}
    >
      <Text style={styles.txt}>Adicionar ao <FontAwesome5 name="shopping-cart" size={20} color="black" /></Text>
    </TouchableOpacity>
  );
}
