import React, { useEffect, useState } from 'react';
import {View, Image, Stylesheet, Text} from 'react-native'
import {styles} from "./styles"
import {Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function CardProduto(props){
    const navigation = useNavigation();
    const [color, setColor] = useState()

    useEffect(async () =>{
        let valor = (props.id%2)
        if(valor== 0){
            setColor("red")
        }else{
            setColor("blue")
        }
    })

    return(
        <View >
            <View style={styles.containerImg} > 
                <Image  source={{uri: props.uri}}
                        style={styles.img}/>      
            </View>

            <View style={{marginTop: 20, backgroundColor: color}}>
                <Text style={{fontSize:20}}>preco={props.price} </Text>
                <Text style={{fontSize:20}}>titulo={props.titulo} </Text>

                <Button  style={{width: "10%"}} title="Detalhe" onPress={() =>{
                    navigation.navigate("Detalhe", {id: props.id})
                }} />
            </View>
                
        </View>
        
    )
}