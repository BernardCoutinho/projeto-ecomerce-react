import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { View } from "react-native-web";
import { styles } from "./styles";

export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={style ? style : styles.container}
      onPress={onPress}
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}
