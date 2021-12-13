import React, {useState, useEffect} from "react";
import {View} from 'react-native';
import axios from "axios";

import CardProduto from '../CardProduto';

export default function Produtos() {
    const [produto,setProduto] = useState([]);
  
    const handleClick = async () => {
  
      await axios({
        method: "GET",
        url:"https://api-da-lojinha.herokuapp.com/produtos",
  
      }).then(response =>{
        setProduto(response.data),
        console.log(response.data);
      })
        
    };
      useEffect(()=>{handleClick()},[])
    
      return (
      <View>
        
        {produto?.map((produto)=>{
         return( <CardProduto key={produto.id} uri={produto.imagens} 
          price={produto.vlUnitario} titulo={produto.nome}/>
            );
        })}
      </View>
    );
  }