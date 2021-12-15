import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
      container: {
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000",
        position:'relative',
      },
      FotoTelaInicial: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
      },
      img:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
      },
      containerInput:{
        width:'100%',
        height: '40%',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top: '20%',
      },
      inputStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 60,
        borderRadius: 5,
        margin: 10,
        width:'80%',
      },
      buttonImageIconStyle: {
        padding: 10,
        height: 25,
        resizeMode: "stretch",
      },   
      buttonCervaStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'center',
        backgroundColor: "#ff8c00",
        padding: 10,
        borderRadius: 5,
        width: "35%",
      },    
      buttonTextStyle:{
        color:'black',
        fontWeight:'bold',
      },
      inputTxt:{
        width: "80%",
        padding: 18,
      },  
      text:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 40,
      },
      logo:{
        color: 'white',
        fontSize: 60,
        fontWeight:'bold',
      },
      login:{
        color:'white',
        fontSize:30,
      }
});