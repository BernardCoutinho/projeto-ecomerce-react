import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { styles } from "./styles"
import { useNavigation } from '@react-navigation/native';


export default function CardProduto(props){
    const navigation = useNavigation(); 
    const {titulo, uri, price} = props
    const estilo = (props.id % 2 == 0) ? styles.par : styles.impar;
    
    return(
        <View style={styles.containerexperimental}>
            <TouchableOpacity style={[styles.container, estilo]}
            onPress={(()=>{navigation.navigate("Detalhe", {id: props.id})})}>
                <View style={styles.containerImg}>
                    <Image
                    style={styles.img}
                    source={{
                        uri: uri,
                    }}
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.textcontainer}>
                        <Text style={styles.texto1}>{titulo}</Text>
                        <Text style={styles.texto2}>{price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.container2, estilo]}
            onPress={(()=>{navigation.navigate("Detalhe", {id: props.id})})}>
                <View style={styles.containerImg}>
                    <Image
                    style={styles.img}
                    source={{
                        uri: uri,
                    }}
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.textcontainer}>
                        <Text style={styles.texto1}>{titulo}</Text>
                        <Text style={styles.texto2}>{price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}