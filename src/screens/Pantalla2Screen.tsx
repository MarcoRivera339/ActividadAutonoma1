import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, ImageBackground, Text, TextInput, View } from 'react-native';
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
                <Text style={styles.title}>Division</Text>
                <Text>Ingrese el primer número</Text>
                <TextInput placeholder='Número 1' onChangeText={setNum1} keyboardType="numeric"></TextInput>
                <Text>Ingrese el Segundo número</Text>
                <TextInput placeholder='Número 2' onChangeText={setNum2} keyboardType="numeric"></TextInput>
                <Button title='Calcular'
                    onPress={dividir} />
                <Text>La division es: {resultado} </Text>
            </View>
        </ImageBackground>
    )
}
