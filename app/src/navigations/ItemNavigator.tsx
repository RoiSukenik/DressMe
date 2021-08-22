import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParams } from '../interfaces';



interface Props{
    children:React.ReactNode
}

const TabNavigator = createBottomTabNavigator<TabNavigatorParams>();

const ItemTabNavigator = ({children }:Props) =>{

    const {Navigator} = TabNavigator;


    return(
        <>
            <Navigator initialRouteName={'ShoeList'}>
                {children}
            </Navigator>
        </>
    );
}

export {
    TabNavigator,
    ItemTabNavigator
};

