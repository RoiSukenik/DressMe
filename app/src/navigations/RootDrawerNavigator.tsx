import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerNavigatorParams } from '../interfaces';

export const RootDrawerNav = createDrawerNavigator<DrawerNavigatorParams>();

const RootDrawerNavigator = ({children})=>{

    const {Navigator} = RootDrawerNav;

    return(
        <>
            <Navigator initialRouteName="Home">
                {children}
            </Navigator>
        </>
    )
    
}

export default RootDrawerNavigator
