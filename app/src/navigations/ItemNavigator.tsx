import React from 'react';
import { createBottomTabNavigator ,BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

type TabNavigatorParams ={
    Shoe: undefined,
    Shirt:undefined,
    Pants:undefined
}
interface Props{
    children:React.ReactNode
}
const TabNavigator = createBottomTabNavigator<TabNavigatorParams>();

const ItemTabNavigator = ({children }:Props) =>{

    return(
            <TabNavigator.Navigator initialRouteName={'Shoe'}>
                {children}
            </TabNavigator.Navigator>
    );
}

export {
    TabNavigator,
    ItemTabNavigator
};