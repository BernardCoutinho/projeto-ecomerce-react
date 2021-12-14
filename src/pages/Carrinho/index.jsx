import react,{useEffect} from 'react'
import {View, Text} from  'react-native'
import {getAllItens} from '../../repository/productRepository'

export default function Carrinho(){

    const [listaItemCarrinho, setListaItemCarrinho] = useState([]);

    useEffect( async () =>{
        setListaItemCarrinho(await getAllItens())
    }, [])

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
            </View> 
            
            );
        })}
            </View>
        </View>
    )
}