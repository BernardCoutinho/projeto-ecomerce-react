import React, {useState, useEffect} from "react";
import {View} from 'react-native';
import axios from "axios";
import Api from '../../service/api'
import CardProduto from '../CardProduto';

export default function Produtos() {
    const [produto,setProduto] = useState([]);
  
    const handleClick = async () => {
      await  Api.get("/produtos").then((response) =>{
        setProduto(response.data)
        console.log(response.data)
      } ) 
        
    };

      useEffect(()=>{handleClick()},[])
    
      return (
      <View>
        
        {produto?.map((produto)=>{
         return( <CardProduto key={produto.id} id={produto.id} uri={produto.imagens} 
          price={produto.vlUnitario} titulo={produto.nome}/>
            );
        })}
      </View>
    );
  }