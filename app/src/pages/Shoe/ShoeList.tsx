import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { RootStoreContext } from '../../../App';
import ItemSelection from '../../components/SelectList/ItemSelection';
import { ResponseObject } from '../../interfaces/navigation';
import { Filter } from '../../utils/searchUtils';


const ShoeList = observer(() => {
    
    let {shoes}  = useContext(RootStoreContext).dataStore;
    const [filteredShoes,setFilteredShoes] = useState([]);
    const [search,setSearch] = useState('');

    useEffect(() => {
        setFilteredShoes(Filter(search,shoes))
    }, [search])

    const List = (shoes:Array<ResponseObject>) =>{
        shoes.map((shoe:ResponseObject)=>{
            return <ItemSelection Id={shoe.id} Brand={shoe.brand} Colors={shoe.colors} Sizes={shoe.sizes} Name={shoe.name}/>
        })
    }

    return (
        <View>
            <Input
                placeholder="Search Item Here!..."
                onChangeText={value=>setSearch(value)}
            />
            <ScrollView>
              
            </ScrollView>
        </View>
    )
})

export default ShoeList

const styles = StyleSheet.create({})
