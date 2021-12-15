import { StyleSheet } from "react-native"

export  const styles = StyleSheet.create({
    containerPage:{
        width:'100%',
        height: '100%',
    },
    container1:{
        width:'100%',
        height: '100%',
        backgroundColor:"white",
        alignItems:"center",
        flexDirection:"column",
    },
    texto:{
        justifyContent: "center",
        alignItems:"center",
        fontSize:15,
        margin:15
    },

    header:{
        width:'100%',
        height:'35%',
        backgroundColor:'black',
    },

    headerimg:{
        width:'100%',
        height:'100%',
        opacity:0.7,
    },

    detalhe:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height: '50%',
        margin: 10,
        marginLeft: 13,
        marginRight: 15,
        position:'relative',
    },
    imgcontainer:{
        width: '30%',
        height:'80%',
    },
    img:{
        width: '100%', 
        height: '100%',
        borderWidth:0.2,
        borderRadius: 10,
    },
    
    textContainer:{
        marginLeft:15,
        width:'60%',
        height: '80%',
        flexDirection:'column',
        fontSize:15,
        alignItems:'center',
        backgroundColor:'#ebf7df',
        borderRadius: 20,
    },
    
    nome:{
        fontSize:22,
        fontWeight:"bold",
        justifyContent: "center",
        alignItems:"flex-start", 
        marginTop:20,
        marginLeft: 40,
        marginBottom:4,
        width:'100%',
    },
    ratingcontainer:{
        width: '50%',
        height:'8%',
        alignSelf: 'flex-start',
        marginTop: 6,
        marginLeft: 20,
    },
    rating:{
        width:'100%',
        height:'100%',
    },
    circlecontainer:{
        width:'38%',
        height: '37%',
        position:'absolute',
        right: -20,
        top: -15,
    },
    circle:{
        width:'52%',
        height:'52%',
    },
    preco:{
     fontSize:15,
     fontWeight:"bold",
     alignSelf:"center",
     padding: 8,
     borderColor:'#bfe699',
     borderWidth: 2,
     borderRadius: 10,
     alignSelf: 'flex-start',
     marginLeft: 15,
     marginTop:18,
    },

    descricao:{
        fontSize:12,
        color:'gray',
        alignItems:"flex-start", 
        flexWrap:'wrap',
        marginLeft: 40,
        marginBottom:10,
        width:'100%',
    },
    input: {
        width:'20%',
        alignSelf: 'flex-start',
        marginTop: 17,
        marginLeft: 16,
        padding: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
      },
})