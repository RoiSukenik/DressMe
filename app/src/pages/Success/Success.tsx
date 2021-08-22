import React, { useContext } from 'react'
import { Share, StyleSheet, View } from 'react-native'
import { Button, Paragraph, Subheading, Title } from 'react-native-paper'
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import { RootStoreContext } from '../../../App'

const Success = () => {

    let {setStore}  = useContext(RootStoreContext);
    const {sets} =setStore 
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              `I've Successfully created a new set for me to use!\nmy set is:\n ${sets.pop()}`,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          
        }
      };
      
    return (
        <View>
            <Image source={require('https://source.unsplash.com/random/50x50')} style={styles.image}/>
            <Title>Success!</Title>
            <Subheading>You Have Completed A Set!</Subheading>
            <Paragraph>Feel Like Sharing it?</Paragraph>
            <Button mode={'outlined'} icon={"share"} onPress={onShare}>Share!</Button>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({
    image:{
        height:50,
        width:50
    }
})
