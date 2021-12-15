import React,{useEffect, useState} from 'react'
import {View, Text} from  'react-native'
import { Button } from 'react-native-elements';
import {getAllItens, destroyItemById} from '../../repository/productRepository'

export default function Carrinho(){

    const [listaItemCarrinho, setListaItemCarrinho] = useState([]);
    const [valorTotal, setValorTotal] = useState({})

    useEffect( async () =>{
        atualizaLista()
    }, [])

    const atualizaLista = async () =>{
     setListaItemCarrinho(await getAllItens())
    }

    const somaTotal = async () =>{
        await atualizaLista();
         listaItemCarrinho?.map((item)=>{
            setValorTotal(valorTotal + item.valor*item.quant)
        })
    }

    const removeItem = async (id) =>{
        await destroyItemById(id)
        atualizaLista();
    }

    return(

        <View>
            <View>
        
        {listaItemCarrinho?.map((item)=>{
         return(
             <View>
                 <View>
                    <Image style={{width: 200, height: 200  }} source ={{uri: item.uri}} resizeMode="cover"/>
                </View>
                <Text> {item.nome} </Text>
                <Text> {item.valor} </Text>
                <Text> {item.quantidade} </Text> 
                <Button title={"Remover Produto"} onPress={()=>{removeItem}}/>
            </View> 
            
            );
        })}
            </View>
            <View>
                <Text>Valor total da compra {somaTotal}</Text>
                </View>        
        </View>
    )
}