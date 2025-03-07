import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Pantalla1Screen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../components/img/numOpacuty.jpg')} style={styles.container}>
            <View >
                <Text style={styles.title}>Bienvenido</Text>
                <Image
                    source={require('../components/img/cerebros-tecnologicos.jpg')}
                    style={styles.img} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))}
                    style={styles.btnAcceder}>
                    <Text style={styles.buttonAccederText} >Acceder</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
