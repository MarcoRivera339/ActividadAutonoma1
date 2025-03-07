import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

    return (
        <Stack.Navigator
            //initialRouteName='Pantalla2'
            screenOptions={{  //funcionalidades de manera general a todos los screen
                headerStyle: {
                    elevation: 10,
                    shadowColor: '#000'
                },
                headerShown: true,
                cardStyle: { //estilo al contenido de los escreen de navigacion
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="Pantalla1" options={{ title: 'Screen 1' }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" options={{ title: 'Screen 2' }} component={Pantalla2Screen} />
        </Stack.Navigator>
    )
}
