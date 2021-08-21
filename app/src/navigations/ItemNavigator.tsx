import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigatorParams } from '../interfaces/navigation';



interface Props{
    children:React.ReactNode
}

const TabNavigator = createBottomTabNavigator<TabNavigatorParams>();

const ItemTabNavigator = ({children }:Props) =>{

    return(
        <NavigationContainer>
            <TabNavigator.Navigator initialRouteName={'ShoeList'}>
                {children}
            </TabNavigator.Navigator>
        </NavigationContainer>
    );
}

export {
    TabNavigator,
    ItemTabNavigator
};
export type { TabNavigatorParams };
