import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons'

type TabNavigatorParams ={
    Shoe:undefined,
    Shirt:undefined,
    Pants:undefined
}
interface Props{
    children:React.ReactNode
}
const TabNavigator = createBottomTabNavigator<TabNavigatorParams>();


const ItemTabNavigator = ({children }:Props) =>{

    return(
        <NavigationContainer>
            <TabNavigator.Navigator initialRouteName={'Shoe'}>
                {children}
            </TabNavigator.Navigator>
        </NavigationContainer>
    );
}

export {
    TabNavigator,
    ItemTabNavigator
};