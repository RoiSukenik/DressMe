import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements';
import { List } from 'react-native-paper';
import { RootStoreContext } from '../../../App';
import { ItemSelection } from '../../components';
import { TabNavigatorParams } from '../../interfaces';
import { Filter } from '../../utils';

type ShoeListScreenRouteProp = RouteProp<TabNavigatorParams,'ShoeList'>;
type ShoeListScreenNavigationProp = BottomTabNavigationProp<TabNavigatorParams,'ShoeList'>;
type Props = {
    route: ShoeListScreenRouteProp;
    navigation: ShoeListScreenNavigationProp;
};


const ShoeList = observer(({route,navigation}:Props) => {
    
    let {dataStore,setStore}  = useContext(RootStoreContext);
    let {shoes} = dataStore;
    let {addShoe, startTime} = setStore;
    const [filteredShoes,setFilteredShoes] = useState([]);
    const [search,setSearch] = useState('');
    startTime= Date.now()


    useEffect(() => {
        let filtered = Filter(search,shoes)
        setFilteredShoes(filtered);
    }, [search])

    return (
        <View>
            <Input
                placeholder="Search Shoes Here!..."
                onChangeText={value=>setSearch(value)}
            />
            <ScrollView>
                <List.AccordionGroup>
                    {filteredShoes.map((shoe)=> (<ItemSelection 
                                                    Id={shoe.id} 
                                                    Brand={shoe.brand} 
                                                    Colors={shoe.colors} 
                                                    Sizes={shoe.sizes} 
                                                    Name={shoe.name} 
                                                    SaveToSet={addShoe}/>))}
                </List.AccordionGroup> 
            </ScrollView>
        </View>
    )
})

export default ShoeList

const styles = StyleSheet.create({})
