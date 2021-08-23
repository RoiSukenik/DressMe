import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { Button, Dialog } from 'react-native-paper'
import { RootStoreContext } from '../../../App'

type Props={
    show:boolean;
    SaveToSet:Function;
    Id:string;
    choosenColor:string;
    choosenSize:string;
}

const AddDialog = ({show,SaveToSet,Id,choosenColor,choosenSize}) => {

    const [showDialog,setShowDialog] = useState(show)
    let {setStore}  = useContext(RootStoreContext);
    let {currentSet,addSet,addCompletedSet} = setStore
    if(currentSet.pants.id !== "" && currentSet.shirt.id !== "" && currentSet.shoes.id !== "")
    {
        return(
        <Dialog visible={showDialog} onDismiss={()=>setShowDialog(false)}>
            <Dialog.Title>Add To Set</Dialog.Title>
            <Dialog.Content>Are you sure you like to add set?</Dialog.Content>
            <Dialog.Actions>
            <Button onPress={()=>{
                addSet();
                addCompletedSet()
                }}
            >
            Done
            </Button>
            </Dialog.Actions>
        </Dialog> 
        )
    }
    else{
    return (
        <View>
            <Dialog visible={showDialog} onDismiss={()=>setShowDialog(false)}>
                <Dialog.Title>Add To Set</Dialog.Title>
                <Dialog.Content>Are you sure you like to add item to set?</Dialog.Content>
                <Dialog.Actions>
                <Button onPress={SaveToSet(Id,choosenColor,choosenSize)}>Yes</Button>
            </Dialog.Actions>
            </Dialog>
        </View>
    )}
}

export default AddDialog
