import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carrinho from './telas/Carrinho';
import Servicos from './telas/Servicos';
import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return (
        <NavigationContainer options={{
            tabBarActiveBackgroundColor: cores.roxo,
            tabBarInactiveBackgroundColor: cores.laranja,
        }} >
            <Tab.Navigator>
                <Tab.Screen options={{
                    tabBarActiveTintColor: cores.roxo,
                    tabBarInactiveTintColor: cores.claro,
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        lineHeight: 21,
                    },
                    tabBarStyle: {
                        backgroundColor: cores.laranja,
                        height:70,
                        paddingBottom:25,
                    },
                    tabBarIconStyle: {
                        display: 'none',
                    },
                    tabBarHideOnKeyboard:true,
                }} name='Serviços' component={Servicos} />
                <Tab.Screen options={{
                    tabBarActiveTintColor: cores.roxo,
                    tabBarInactiveTintColor: cores.claro,
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        lineHeight: 21,
                    },
                    headerStyle: {
                        backgroundColor: cores.laranja,
                    },
                    tabBarStyle: {
                        backgroundColor: cores.laranja,
                        height:70,
                        paddingBottom:25,
                    },
                    tabBarIconStyle: {
                        display: 'none',
                    },
                    tabBarHideOnKeyboard:true,
                }} name='Carrinho' component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};