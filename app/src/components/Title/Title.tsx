import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props{
    text:string;

}

const Title:React.FC<Props> = ({text}) => {

    return (
        <View style={styles.continer} >
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    continer:{
        backgroundColor:'#000000',
    },
    title:{
        paddingHorizontal:10,
        paddingVertical:10,
        color: '#fff',
        fontSize:48,
        fontFamily: 'RampartOne-Regular',
        paddingBottom:10,
    }
})
