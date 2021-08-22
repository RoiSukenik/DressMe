import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'

const Success = () => {
    return (
        <View>
            <Image source={require('https://source.unsplash.com/random/50x50')}/>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({})
