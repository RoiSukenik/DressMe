import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ListItem } from 'react-native-elements'

type Props = {
    Id:number,
    Brand:string,
    Colors:Array<string>,
    Sizes:Array<number>,
    Name:string
}

const ItemSelection:React.FC<Props> = observer(({Id,Brand,Colors, Sizes , Name}) => {

    const [expanded,setExpanded] = useState(false)
    
    return (
        <View>
            <ListItem key={Id} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{Brand}</ListItem.Title>
                    <ListItem.Subtitle>{Name}</ListItem.Subtitle>
                    <ListItem.Accordion
                        content={
                            <>
                                <ListItem.Title>
                                    Colors
                                </ListItem.Title>
                            </>
                        }
                        isExpanded={expanded}
                        onPress={()=>setExpanded(!expanded)}
                    >
                    {Colors.map(color=>{
                        return
                        <ListItem key={color} bottomDivider>
                            <ListItem.Title>{color}</ListItem.Title>
                        </ListItem>
                    })}
                    </ListItem.Accordion>
                    <ListItem.Accordion
                        content={
                            <>
                                <ListItem.Title>
                                    Sizes
                                </ListItem.Title>
                            </>
                        }
                        isExpanded={expanded}
                        onPress={()=>setExpanded(!expanded)}
                    >
                    {Sizes.map(size=>{
                        return
                        <ListItem key={size} bottomDivider>
                            <ListItem.Title>{size}</ListItem.Title>
                        </ListItem>
                    })}
                    </ListItem.Accordion>
                </ListItem.Content>
            </ListItem>
        </View>
    )
})

export default ItemSelection

const styles = StyleSheet.create({})
