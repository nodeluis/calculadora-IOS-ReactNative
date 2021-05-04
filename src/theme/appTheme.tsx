import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
        
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right',
    },
    resultado:{
        color:'white',
        fontSize:50,
        textAlign:'right',
        marginBottom:10,
        paddingHorizontal:10
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10
    },
    boton:{
        width:80,
        height:80,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    botonTexto:{
        textAlign:"center",
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight:'300'
    }
});