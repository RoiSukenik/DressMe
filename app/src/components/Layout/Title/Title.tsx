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
        flexWrap:'nowrap',
        backgroundColor:'#000'
    },
    title:{
        alignContent:"center",
        textAlign:"center",
        color: '#fff',
        fontSize:48,
        fontFamily: 'RampartOne',
        paddingBottom:10,
    }
})
