import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props{
    completed:Number;
}

const CompletedSets:React.FC<Props> = ({completed}) => {
    return (
        <View>
            <Text style={styles.header}>You Have Completed : {completed} Sets So Far!</Text>
            <Text style={styles.subHeader}>Keep Going!</Text>
        </View>
    )
}

export default CompletedSets;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#484848'
    },
    header:{
        paddingTop:10,
        paddingHorizontal:5,
        textAlign:'center',
        fontSize:20,
        fontFamily:'JosefinSans-Italic-VariableFont_wght',
        fontWeight:'bold'
    },
    subHeader:{
        paddingTop:10,
        textAlign:'center',
        fontFamily:'JosefinSans-Italic-VariableFont_wght',
        fontSize:20,
        fontWeight:'bold'
    }
})
