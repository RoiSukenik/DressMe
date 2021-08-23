import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Dialog } from 'react-native-paper'

type Props={
    show:boolean;
    SaveToSet:Function;
    Id:string;
    choosenColor:string;
    choosenSize:string;
}

const AddDialog = ({show,SaveToSet,Id,choosenColor,choosenSize}) => {

    const [showDialog,setShowDialog] = useState(show)

    return (
        <View>
            <Dialog visible={showDialog} onDismiss={()=>setShowDialog(false)}>
                <Dialog.Title>Add To Set</Dialog.Title>
                <Dialog.Content>Are you sure you like to add item to set?</Dialog.Content>
                <Dialog.Actions>
                <Button onPress={SaveToSet(Id,choosenColor,choosenSize)}>Done</Button>
            </Dialog.Actions>
            </Dialog>
        </View>
    )
}

export default AddDialog
