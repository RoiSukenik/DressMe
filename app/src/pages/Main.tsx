import React from 'react'

import DrawerNavigator, { DrawerNav } from '../navigations/DrawerNavigator'
import { Builder } from './Builder';
import { Home } from './Home';

const Main = () => {

    const {Screen} = DrawerNav;

    return (
        <DrawerNavigator>
            <Screen 
            name="Home" 
            component={Home}/>
            <Screen 
            name="Builder" 
            component={Builder}
            options={
                {
                drawerLabel:"Set Builder!"
                }
            }
            />
        </DrawerNavigator>
    )
}

export default Main
