import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalculadora } from '../components/BotonCalculadora'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'


export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        delNumero,
        dividir,
        armarNumero,
        multiplicar,
        restar,
        sumar,
        calcular
    }=useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior!='0')&&(<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
            }
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <BotonCalculadora texto='C' color='#9b9b9b' action={limpiar}/>
                <BotonCalculadora texto='+/-' color='#9b9b9b' action={positivoNegativo}/>
                <BotonCalculadora texto='del' color='#9b9b9b' action={delNumero}/>
                <BotonCalculadora texto='/' color='#ff9427' action={dividir}/>
            </View>
            
            <View style={styles.fila}>
                <BotonCalculadora texto='7' action={armarNumero}/>
                <BotonCalculadora texto='8' action={armarNumero}/>
                <BotonCalculadora texto='9' action={armarNumero}/>
                <BotonCalculadora texto='x' color='#ff9427' action={multiplicar}/>
            </View>

            <View style={styles.fila}>
                <BotonCalculadora texto='4' action={armarNumero}/>
                <BotonCalculadora texto='5' action={armarNumero}/>
                <BotonCalculadora texto='6' action={armarNumero}/>
                <BotonCalculadora texto='-' color='#ff9427' action={restar}/>
            </View>

            <View style={styles.fila}>
                <BotonCalculadora texto='1' action={armarNumero}/>
                <BotonCalculadora texto='2' action={armarNumero}/>
                <BotonCalculadora texto='3' action={armarNumero}/>
                <BotonCalculadora texto='+' color='#ff9427' action={sumar}/>
            </View>

            <View style={styles.fila}>
                <BotonCalculadora texto='0' ancho action={armarNumero}/>
                <BotonCalculadora texto='.' action={armarNumero}/>
                <BotonCalculadora texto='=' color='#ff9427' action={calcular}/>
            </View>
        </View>
    )
}
