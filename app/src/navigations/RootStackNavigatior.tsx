import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigatorParams } from "../interfaces";

interface Props{
    children:React.ReactNode
}

export const RootStack = createStackNavigator<StackNavigatorParams>();

const RootStackNavigator = ({children}:Props)=>{

    const {Navigator} = RootStack;
    
    return(
        <Navigator>
            {children}
        </Navigator>
    )
}

export default RootStackNavigator;