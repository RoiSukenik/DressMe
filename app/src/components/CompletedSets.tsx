import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props{
    completed:number;
}

const CompletedSets:React.FC<Props> = ({completed}) => {
    return (
        <View>
            <Text style={styles.header}>You Have Completed : {completed} Sets So Far!</Text>
            <Text style={styles.subHeader}>Keep Going!</Text>
        </View>
    )
}

export default CompletedSets

const styles = StyleSheet.create({
    container:{
        flexWrap:"nowrap",
        flexDirection:'row',
    },
    header:{
        textAlign:'center',
        fontSize:20
    },
    subHeader:{
        textAlign:'center',
        fontSize:16,
    }
})
