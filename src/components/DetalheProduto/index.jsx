import React, {useState, useEffect} from "react";
import {View, Text} from 'react-native';
import axios from "axios";
import {style} from "./styles"

export default function DetalheProduto(props) {
    const [produto,setProduto] = useState([]);
  
    const handleClick = async () => {
  
      await axios({
        method: "GET",
        url: `https://api-da-lojinha.herokuapp.com/produtos/{props.id}`,
  
      }).then(response =>{
        setProduto(response.data),
        console.log(response.data);
      })
        
    };
    useEffect(()=>{handleClick()},[])
    
    return (
    <View>
      
      {produto?.map((produto)=>{
          if(produto == props.id)
               return(
                <View style={style.container}>
                    <Text> {produto.imagens}</Text>
                    <Text> {produto.nome}</Text>
                    <Text> {produto.imagens}</Text>
                </View>   
        )
          return(null);
          
      })}
    </View>
  );
}
