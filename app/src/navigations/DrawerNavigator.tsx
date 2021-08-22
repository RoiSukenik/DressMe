import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerNavigatorParams } from '../interfaces';

export const DrawerNav = createDrawerNavigator<DrawerNavigatorParams>();

const DrawerNavigator = ({children})=>{

    const {Navigator} = DrawerNav;

    return(
        <>
            <Navigator initialRouteName="Home">
                {children}
            </Navigator>
        </>
    )
    
}

export default DrawerNavigator
