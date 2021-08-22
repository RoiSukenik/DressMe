import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { List } from 'react-native-paper'
import { RootStoreContext } from '../../../App'


type Props = {
    Id:number,
    Brand:string,
    Colors:Array<string>,
    Sizes:Array<number>,
    Name:string,
    SaveId:Function;
    SaveColor:Function;
    SaveSize:Function;
    

}

const ItemSelection:React.FC<Props> = observer(({Id,Brand,Colors, Sizes , Name,SaveId,SaveColor,SaveSize}) => {
    
    const [expanded,setExpanded] = useState(false)
    const [expandedColors,setExpandedColors] = useState(false)
    const [expandedSizes,setExpandedSizes] = useState(false)

   return (
            <List.Accordion
            title={Name}
            expanded={expanded}
            onPress={()=>{
                SaveId(Id);
                setExpanded(!expanded)
            }}
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
                        <List.Subheader  key={index}  onPress={()=>{SaveColor(color);}}>
                           {color} 
                        </List.Subheader>
                    ))
                }
                </List.Accordion>
                <List.Accordion
                    title="Avilable Sizes"
                    expanded={expandedSizes}
                    onPress={()=>setExpandedSizes(!expandedSizes)}
                    id={`${Id}Sizes`}
                >
                {
                    Sizes.map((size,index)=>(
                        <List.Subheader  key={index} onPress={()=>{SaveSize(size.toString());}}>
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


