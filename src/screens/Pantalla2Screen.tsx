import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/AppTheme';


export const Pantalla2Screen = () => {
    const navigation = useNavigation();

    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [resultado, setResultado] = useState<string | number>('');


    const dividir = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (n1 != 0 && n2 != 0) {
            setResultado(n1 / n2)
        } else if (n1 == 0 && n2 == 0) {
            setResultado('INDETERMINACION')
        } else if (n1 != 0 && n2 == 0) {
            setResultado('NO EXISTE DIVISION PARA CERO')
        }
    };

    return (
        <ImageBackground source={require('../components/img/bg2.jpg')} style={styles.container}>
            <View>
                <Text style={styles.title}>División</Text>
                <Text style={styles.TextNumDiv}>Ingrese el primer número</Text>
                <TextInput style={styles.TextNumDivInput} placeholder='Número 1' onChangeText={setNum1} keyboardType="numeric"></TextInput>
                <Text style={styles.TextNumDiv}>Ingrese el segundo número</Text>
                <TextInput style={styles.TextNumDivInput} placeholder='Número 2' onChangeText={setNum2} keyboardType="numeric"></TextInput>
                <TouchableOpacity
                                onPress={dividir}
                                style={styles.btnAcceder}>
                                <Text style={styles.buttonAccederText} >Dividir</Text>
                            </TouchableOpacity>
                <Text style={styles.TextNumDiv}>La división es: {resultado} </Text>
            </View>
        </ImageBackground>
    )
}
