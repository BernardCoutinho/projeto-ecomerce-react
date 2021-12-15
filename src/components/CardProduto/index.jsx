import React from 'react';
import {View, Image, Stylesheet, Text} from 'react-native'
import {styles} from "./styles"
import {Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function CardProduto(props){
    const navigation = useNavigation();
    

    return(
        <View>
            <View style={styles.containerImg} > 
                <Image  source={{uri: props.uri}}
                        style={styles.img}/>      
            </View>

            <View style={{marginTop: 20}}>
                <Text style={{fontSize:20}}>preco={props.price} </Text>
                <Text style={{fontSize:20}}>titulo={props.titulo} </Text>

                <Button  style={{width: "10%"}} title="Detalhe" onPress={() =>{
                    navigation.navigate("Detalhe", {id: props.id})
                }} />
            </View>
                
        </View>
        
    )
}