import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParams } from '../interfaces';



interface Props{
    children:React.ReactNode
}

const TabNavigator = createBottomTabNavigator<TabNavigatorParams>();

const ItemTabNavigator = ({children }:Props) =>{

    return(
        <>
            <TabNavigator.Navigator initialRouteName={'ShoeList'}>
                {children}
            </TabNavigator.Navigator>
        </>
    );
}

export {
    TabNavigator,
    ItemTabNavigator
};

