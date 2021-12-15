import { StyleSheet } from "react-native"

export  const styles = StyleSheet.create({

    container1:{
        flex: 1,
        backgroundColor:"#ea5b2f",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"column",
    },
    texto:{
        justifyContent: "center",
        alignItems:"center",
        fontSize:15,
        margin:15

    },
    
    img:{
        width: '80%', 
        height: 400,
        borderWidth:0.2,
    },
    
    nomeP:{
        fontSize:26,
        fontWeight:"bold",
        // textDecorationLine:"underline",
        justifyContent: "center",
        alignItems:"center", 
    },
    textContainer:{
        fontSize:15,
        justifyContent: "center",
        alignItems:"center", 
    },

    preco:{
     fontSize:15,
     fontWeight:"bold",
     alignSelf:"center"

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})