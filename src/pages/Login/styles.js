import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: "#000000",
          },
      
          
      sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
      },
      imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
    
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: "stretch",
      },
    
     
    
      FotoTelaInicial: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 0,
        backgroundColor: "#000000",
        padding: 30,
        flex: 1,
        margin: 10,    
      },
    
      buttonCervaStyle: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ff8c00",
        borderWidth: 0.5,
        borderColor: "#fff",
        height: 40,
        borderRadius: 5,
        margin: 5,
        width: "30%",
      },    
    
    inputTxt:{
        width: "80%",
        height: 40,
        marginTop: "5%",
        padding: 10,

    },    
});