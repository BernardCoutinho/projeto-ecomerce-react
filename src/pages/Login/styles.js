import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:"#fff",
        width:"100%",
    },
 
    container1: {
        display:"flex",
        alignItems: "center",
        backgroundColor: "#fff",
        width:"100%",
        height: "10%",
        marginTop: "10%",
        marginBottom:"10%",
    },
    container2: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        width:"100%",
        flexDirection: "column",
        height: "25%",  
    },

    logo:{
        
        fontSize: 10,
        
    },
    
    inputTxt:{
        width: "80%",
        height: 40,
        marginTop: "5%",
        // backgroundColor:"#F8F8FF",
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: "grey",

    },

    botao:{
        width: 200, 
        marginTop: 20,  
        marginBottom: 20,
    },
});