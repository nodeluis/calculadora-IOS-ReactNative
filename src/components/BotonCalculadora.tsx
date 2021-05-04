import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    texto:string;
    color?:string; //signo de int para decirle que si se envia o no
    ancho?:boolean;
    action: (numero:string) => void;
}

export const BotonCalculadora = ({texto,color='#2d2d2d',ancho=false,action}:Props) => {

    return (
        <TouchableOpacity
            onPress={()=>{action(texto)}}
        >
            <View style={{
                ...styles.boton,
                backgroundColor:color,
                width:(ancho?180:80)
            }}>
                <Text style={{
                    ...styles.botonTexto,//desetructurar el objeto
                    color:(color=='#9b9b9b'?'black':'white')
                }}>{texto}</Text>
            </View>
        </TouchableOpacity> 
    )
}

const styles1=StyleSheet.create({
    colorB:{

    }
});
