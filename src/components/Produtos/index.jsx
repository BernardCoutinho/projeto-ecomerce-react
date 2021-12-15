import React, {useState, useEffect} from "react";
import {ScrollView, View} from 'react-native';
import Api from '../../service/api'
import CardProduto from '../CardProduto';
import { styles } from './styles'

export default function Produtos() {
    const [produto,setProduto] = useState([]);
  
    const getProdutos = async () => {
      await  Api.get("/produtos").then((response) =>{
        setProduto(response.data)
        console.log(response.data)
      } ) 
        
    };

      useEffect(()=>{getProdutos()},[])
    
      return (
            <ScrollView style={styles.container2}>
              <View style={styles.container}>
              {produto?.map((produto)=>{
              return( <CardProduto key={produto.id} id={produto.id} uri={produto.imagens} 
                price={produto.vlUnitario} titulo={produto.nome}/>
                  );
              })}
              </View>
            </ScrollView>
    );
  }