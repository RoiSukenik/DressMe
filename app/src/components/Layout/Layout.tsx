import React from 'react'
import { StatusBar, View } from 'react-native'


const Layout:React.FC<{}> =({children}) => {
    return (
        <View>
            <StatusBar/>
            {children}
            
        </View>
    )
}

export default Layout;