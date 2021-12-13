import React from 'react';
import {View, Image, Stylesheet, Text} from 'react-native'
import {styles} from "./styles"
import {Button} from 'react-native-elements'

import DetalheProduto from '../../pages/DetalheProduto';
import { useNavigation } from '@react-navigation/native';

export default function CardProduto(props){
    const navigation = useNavigation();
    

    return(
        <View style={styles.container}>
            <View style={styles.containerImg} > 
                <Image  source={{uri: props.uri}}
                        style={styles.img}/>      
            </View>

            <View>
                <Text>preco={props.price} </Text>
                <Text>titulo={props.titulo} </Text>
                <Button  title="Detalhe" onPress={() =>{
                    navigation.navigate("Detalhe", {id: props.id})
                } } />
            </View>
                
        </View>
        
    )
}