import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { List } from 'react-native-paper'


type Props = {
    Id:number,
    Brand:string,
    Colors:Array<string>,
    Sizes:Array<number>,
    Name:string
}

const ItemSelection:React.FC<Props> = observer(({Id,Brand,Colors, Sizes , Name}) => {
    
    const [expanded,setExpanded] = useState(false)
    const [expandedColors,setExpandedColors] = useState(false)
    const [expandedSizes,setExpandedSizes] = useState(false)
    const [size,setSize] = useState("");
    const [color,setColor] = useState("")
    useEffect(()=>{

    },[size,color])
    return (
            <List.Accordion
            title={Name}
            expanded={expanded}
            onPress={()=>setExpanded(!expanded)}
            id={Id}
           >    
            <List.Subheader>Brand Name: {Brand}</List.Subheader>
            <List.AccordionGroup>
                <List.Accordion
                    title="Avilable Colors"
                    expanded={expandedColors}
                    onPress={()=>setExpandedColors(!expandedColors)}
                    id={`${Id}Colors`}
                >
                {
                    Colors.map((color,index)=>(
                        <List.Subheader  key={index}  onPress={()=>{setColor(color);}}>
                           {color} 
                        </List.Subheader>
                    ))
                }
                </List.Accordion>
                <List.Accordion
                    title="Avilable Sizes"
                    expanded={expandedSizes}
                    onPress={()=>setExpandedColors(!expandedSizes)}
                    id={`${Id}Sizes`}
                >
                {
                    Sizes.map((size,index)=>(
                        <List.Subheader  key={index} onPress={()=>{setSize(size.toString());}}>
                            {size}
                        </List.Subheader>
                    ))
                }
                </List.Accordion>
            </List.AccordionGroup>
           </List.Accordion>
    )
})

export default ItemSelection

const styles = StyleSheet.create({
    Item:{
    }
})
