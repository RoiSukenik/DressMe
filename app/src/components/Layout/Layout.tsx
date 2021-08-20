import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'


const Layout:React.FC<{}> =({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    }
})
