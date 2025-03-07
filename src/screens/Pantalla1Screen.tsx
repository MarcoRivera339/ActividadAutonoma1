import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ImageBackground, Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Pantalla1Screen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../components/img/bg.jpg')} style={styles.container}>
            <View >
                <Text style={styles.title}>Bienvenido</Text>
                <Image
                    source={require('../components/img/cerebros-tecnologicos.jpg')}
                    style={{ width: 200, height: 200 }} />
                <Button title='Acceder'
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))} />
            </View>
        </ImageBackground>
    )
}
