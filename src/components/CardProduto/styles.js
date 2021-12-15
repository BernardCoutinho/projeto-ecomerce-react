import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   containerexperimental:{
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:'space-between',
        maxWidth: '99%',
        flex: 1,
   },
    container:{
        width:'45%',
        height:200,
        marginTop:5,
        marginBottom: 5,
        flexDirection:'row',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
    },
    container2:{
        width:'45%',
        height:200,
        marginTop:15,
        marginBottom: 5,
        flexDirection:'row',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
    },
    containerImg:{
        width: '50%',
        height: '100%',
    },
    img:{
        width:"100%",
        height:"100%",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    card:{
        width: '55%',
        flexDirection: 'row',
    },
    textcontainer:{
        width: '100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    texto1:{
        display:'flex',
        alignItems:'flex-start',
        marginLeft: 10,
        marginTop: 5,
        fontSize:16,
        color: 'white',
        fontWeight: 'bold',
    },
    texto2:{
        marginTop: 135,
        marginLeft: 13,
        margin: 10,
        fontSize:16,
        color: 'white',
        fontWeight: 'bold',
    },
    par:{
        backgroundColor: '#e96556',
    },  
    impar:{
        backgroundColor:'#7cc633',
    },
})


