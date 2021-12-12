import React from 'react';
import {View, Image, Stylesheet, Text} from 'react-native'
import {styles} from "./styles"
import {Button} from 'react-native-elements'
import DetalheProduto from '../DetalheProduto';

export default function CardProduto(props){

    return(
        <View style={styles.container}>
            <View style={styles.containerImg} > 
                <Image  source={{uri: props.uri}}
                        style={styles.img}/>      
            </View>
            <View>
                <Text>preço = {props.price} </Text>
                <Text>titulo= {props.titulo} </Text>
                <Button value={props.id} onClick={DetalheProduto} />
            </View>
                
        </View>
        
    )
}