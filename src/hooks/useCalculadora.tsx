import { useRef, useState } from "react";

enum Operadores{
    sumar,restar,multiplicar,dividir
}

export const useCalculadora = () => {
    const [numero, setnumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>()//para guardar algo en memoria sin renderizar solo guardar

    const limpiar=()=>{
        setnumero('0');
        setnumeroAnterior('0');
    };

    const armarNumero=(numeroTexto:string)=>{
        if(numero.includes('.')&&numeroTexto=='.')return;
        if(numero.startsWith('0')||numero.startsWith('-0')){
            if(numeroTexto=='.'){
                setnumero(numero+numeroTexto);
            }else if(numeroTexto=='0'&&numero.includes('.')){
                setnumero(numero+numeroTexto);
            }else if(numeroTexto!='0'&&!numero.includes('.')){
                setnumero(numeroTexto);
            }else if(numeroTexto=='0'&&!numero.includes('.')){
                setnumero(numero);
            }else{
                setnumero(numero+numeroTexto);
            }
        }else{
            setnumero(numero+numeroTexto);
        }
    };

    const positivoNegativo=()=>{
        if(numero.includes('-')){
            setnumero(numero.replace('-',''));
        }else{
            setnumero('-'+numero);
        }
    };

    const delNumero=()=>{
        if(numero.includes('-')){
            if(numero.length==2){
                setnumero('0');
            }else{
                setnumero(numero.substr(0,numero.length-1));
            }
        }else{
            if(numero.length==1){
                setnumero('0');
            }else{
                setnumero(numero.substr(0,numero.length-1));
            }
        }
    };

    const cambiarNumero=()=>{
        if(numero.endsWith('.')){
            setnumeroAnterior(numero.slice(0,-1));
        }else{
            setnumeroAnterior(numero);
        }
        setnumero('0');
    };

    const dividir=()=>{
        cambiarNumero();
        ultimaOperacion.current=Operadores.dividir;
    }
    const multiplicar=()=>{
        cambiarNumero();
        ultimaOperacion.current=Operadores.multiplicar;
    }
    const restar=()=>{
        cambiarNumero();
        ultimaOperacion.current=Operadores.restar;
    }
    const sumar=()=>{
        cambiarNumero();
        ultimaOperacion.current=Operadores.sumar;
    }

    const calcular=()=>{
        let num1=Number(numero);
        let num2=Number(numeroAnterior);
        switch (ultimaOperacion.current) { //current son los valores que se asigno
            case Operadores.sumar:
                setnumero((num1+num2)+'');
                break;
            case Operadores.restar:
                setnumero((num2-num1)+'');
                break;
            case Operadores.multiplicar:
                setnumero((num1*num2)+'');
                break;
            case Operadores.dividir:
                setnumero((num2/num1)+'');
                break;
        }
        setnumeroAnterior('0');
    };

    return {
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
    }
}
